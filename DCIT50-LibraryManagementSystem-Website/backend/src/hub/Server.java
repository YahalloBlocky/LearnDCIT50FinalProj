package hub;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

/**
 * Local server for the DCIT 50 Learning Hub, using only the JDK.
 *
 * <p>It does two jobs:</p>
 * <ol>
 *   <li>serves the static site from {@code public/}, and</li>
 *   <li>answers {@code POST /api/run} by compiling the learner's Java class and
 *       running it against the exercise's test harness with a short timeout.</li>
 * </ol>
 *
 * <pre>javac -d backend/out backend/src/hub/Server.java
 * java -cp backend/out hub.Server 8081 .</pre>
 *
 * <p>The runner is meant for a laptop: it executes code the user typed in the
 * page. It writes each attempt to a fresh temp folder, caps the code size, and
 * kills anything that runs longer than {@value #RUN_TIMEOUT_SECONDS} seconds.</p>
 */
public final class Server {

    private static final int DEFAULT_PORT = 8081;
    private static final int MAX_SNIPPET_CHARS = 40_000;
    private static final long MAX_BODY_BYTES = 200_000L;
    private static final int COMPILE_TIMEOUT_SECONDS = 20;
    private static final int RUN_TIMEOUT_SECONDS = 5;

    private static final String EXERCISE_FILE = "Exercise.java";
    private static final String HARNESS_FILE = "Harness.java";

    private final Path siteRoot;

    private Server(Path siteRoot) {
        this.siteRoot = siteRoot;
    }

    public static void main(String[] args) throws IOException {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : DEFAULT_PORT;
        Path root = Path.of(args.length > 1 ? args[1] : ".").toAbsolutePath().normalize();

        Path publicDir = root.resolve("public");
        if (!Files.isDirectory(publicDir)) {
            System.err.println("No public/ folder in " + root);
            System.err.println("Run this from the project folder, for example: java -cp backend/out hub.Server " + port + " .");
            System.exit(1);
        }

        new Server(root).start(port);
    }

    private void start(int port) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/run", this::handleRun);
        server.createContext("/", this::handleStatic);
        server.setExecutor(Executors.newFixedThreadPool(4));
        Runtime.getRuntime().addShutdownHook(new Thread(() -> server.stop(0)));

        server.start();
        System.out.println("Learning Hub running at http://localhost:" + port + "/");
        System.out.println("  site root: " + siteRoot);
        System.out.println("  code runner: POST /api/run (Java, " + RUN_TIMEOUT_SECONDS + "s timeout)");
        System.out.println("Press Ctrl+C to stop.");
    }

    /* ------------------------------------------------------------------ static */

    private void handleStatic(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();
        if (!"GET".equals(method) && !"HEAD".equals(method)) {
            sendJson(exchange, 405, "{\"ok\":false,\"message\":\"Method not allowed.\"}");
            return;
        }

        String path = exchange.getRequestURI().getPath();
        if (path == null || path.isEmpty() || "/".equals(path)) {
            path = "/index.html";
        }
        if (path.contains("..")) {
            sendJson(exchange, 400, "{\"ok\":false,\"message\":\"Bad request.\"}");
            return;
        }

        Path file = resolve(path);
        if (file == null) {
            sendText(exchange, 404, "Not found: " + path);
            return;
        }

        byte[] bytes = Files.readAllBytes(file);
        exchange.getResponseHeaders().set("Content-Type", contentType(file.getFileName().toString()));
        exchange.getResponseHeaders().set("Cache-Control", "no-store");
        exchange.getResponseHeaders().set("X-Content-Type-Options", "nosniff");
        if ("HEAD".equals(method)) {
            exchange.sendResponseHeaders(200, -1);
            exchange.close();
            return;
        }
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream out = exchange.getResponseBody()) {
            out.write(bytes);
        }
    }

    private Path resolve(String path) {
        String relative = path.startsWith("/") ? path.substring(1) : path;

        Path direct = siteRoot.resolve(relative).normalize();
        if (direct.startsWith(siteRoot) && Files.isRegularFile(direct)) {
            return direct;
        }

        Path inPublic = siteRoot.resolve("public").resolve(relative).normalize();
        if (inPublic.startsWith(siteRoot.resolve("public")) && Files.isRegularFile(inPublic)) {
            return inPublic;
        }

        Path asFolder = siteRoot.resolve("public").resolve(relative).resolve("index.html").normalize();
        if (asFolder.startsWith(siteRoot.resolve("public")) && Files.isRegularFile(asFolder)) {
            return asFolder;
        }
        return null;
    }

    private static String contentType(String fileName) {
        String name = fileName.toLowerCase(Locale.ROOT);
        if (name.endsWith(".html") || name.endsWith(".htm")) {
            return "text/html; charset=utf-8";
        }
        if (name.endsWith(".css")) {
            return "text/css; charset=utf-8";
        }
        if (name.endsWith(".js")) {
            return "text/javascript; charset=utf-8";
        }
        if (name.endsWith(".json")) {
            return "application/json; charset=utf-8";
        }
        if (name.endsWith(".svg")) {
            return "image/svg+xml";
        }
        if (name.endsWith(".png")) {
            return "image/png";
        }
        if (name.endsWith(".ico")) {
            return "image/x-icon";
        }
        if (name.endsWith(".woff2")) {
            return "font/woff2";
        }
        return "application/octet-stream";
    }

    /* --------------------------------------------------------------- code runner */

    private void handleRun(HttpExchange exchange) throws IOException {
        Path work = null;
        try {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, result(false, "error", "Use POST for /api/run.", "", "", List.of()));
                return;
            }

            String body = readBody(exchange);
            if (body == null) {
                sendJson(exchange, 413, result(false, "error", "Request too large.", "", "", List.of()));
                return;
            }

            Map<String, String> fields = new JsonReader(body).readObject();
            String code = fields.getOrDefault("code", "");
            String harness = fields.getOrDefault("tests", "");

            if (code.isBlank() || harness.isBlank()) {
                sendJson(exchange, 400, result(false, "error",
                        "Both the exercise code and its tests are required.", "", "", List.of()));
                return;
            }
            if (code.length() > MAX_SNIPPET_CHARS || harness.length() > MAX_SNIPPET_CHARS) {
                sendJson(exchange, 413, result(false, "error",
                        "Keep each snippet under " + MAX_SNIPPET_CHARS + " characters.", "", "", List.of()));
                return;
            }
            if (code.matches("(?s).*\\bpackage\\s+[\\w.]+\\s*;.*")) {
                sendJson(exchange, 400, result(false, "error",
                        "Remove the package declaration: exercises run in the default package.", "", "", List.of()));
                return;
            }

            work = Files.createTempDirectory("dcit50-run-");
            Path out = Files.createDirectories(work.resolve("out"));
            Files.writeString(work.resolve(EXERCISE_FILE), code, StandardCharsets.UTF_8);
            Files.writeString(work.resolve(HARNESS_FILE), harness, StandardCharsets.UTF_8);

            List<String> compileCommand = new ArrayList<>(List.of(
                    tool("javac"),
                    "-encoding", "UTF-8",
                    "-nowarn",
                    "-d", out.toString(),
                    EXERCISE_FILE,
                    HARNESS_FILE));

            ExecResult compile = exec(compileCommand, work, COMPILE_TIMEOUT_SECONDS);
            if (!compile.finished) {
                sendJson(exchange, 200, result(false, "compile-timeout",
                        "Compiling took longer than " + COMPILE_TIMEOUT_SECONDS + " seconds.", "",
                        "", List.of()));
                return;
            }
            if (compile.exitCode != 0) {
                sendJson(exchange, 200, result(false, "compile", "", compile.output, "", List.of()));
                return;
            }

            List<String> runCommand = new ArrayList<>(List.of(
                    tool("java"),
                    "-Xmx256m",
                    "-Dfile.encoding=UTF-8",
                    "-cp", out.toString(),
                    "Harness"));

            ExecResult run = exec(runCommand, work, RUN_TIMEOUT_SECONDS);
            if (!run.finished) {
                sendJson(exchange, 200, result(false, "timeout",
                        "The code did not finish within " + RUN_TIMEOUT_SECONDS + " seconds. Look for a loop that never ends.",
                        "", trimOutput(run.output), List.of()));
                return;
            }

            List<TestResult> tests = new ArrayList<>();
            StringBuilder programOutput = new StringBuilder();
            for (String line : run.output.split("\\R")) {
                if (line.startsWith("@@TEST ")) {
                    tests.add(TestResult.parse(line));
                } else if (line.startsWith("@@SUMMARY ")) {
                    continue;
                } else {
                    programOutput.append(line).append('\n');
                }
            }

            boolean allPassed = !tests.isEmpty();
            for (TestResult test : tests) {
                allPassed = allPassed && test.passed;
            }

            sendJson(exchange, 200, result(allPassed, run.exitCode == 0 ? "ran" : "failed",
                    "", "", programOutput.toString().stripTrailing(), tests));
        } catch (Exception problem) {
            sendJson(exchange, 500, result(false, "error",
                    "Runner failed: " + problem, "", "", List.of()));
        } finally {
            deleteTree(work);
        }
    }

    private String readBody(HttpExchange exchange) throws IOException {
        String declared = exchange.getRequestHeaders().getFirst("Content-Length");
        if (declared != null) {
            try {
                if (Long.parseLong(declared) > MAX_BODY_BYTES) {
                    return null;
                }
            } catch (NumberFormatException ignored) {
                // fall through and read what is there
            }
        }
        try (InputStream in = exchange.getRequestBody()) {
            byte[] bytes = in.readNBytes((int) MAX_BODY_BYTES + 1);
            if (bytes.length > MAX_BODY_BYTES) {
                return null;
            }
            return new String(bytes, StandardCharsets.UTF_8);
        }
    }

    private static String tool(String name) {
        Path bin = Path.of(System.getProperty("java.home"), "bin", name);
        Path windows = Path.of(System.getProperty("java.home"), "bin", name + ".exe");
        if (Files.isRegularFile(windows)) {
            return windows.toString();
        }
        return bin.toString();
    }

    private static final class ExecResult {
        final boolean finished;
        final int exitCode;
        final String output;

        ExecResult(boolean finished, int exitCode, String output) {
            this.finished = finished;
            this.exitCode = exitCode;
            this.output = output;
        }
    }

    private static ExecResult exec(List<String> command, Path directory, int timeoutSeconds)
            throws IOException, InterruptedException {
        ProcessBuilder builder = new ProcessBuilder(command)
                .directory(directory.toFile())
                .redirectErrorStream(true);
        Process process = builder.start();
        process.getOutputStream().close();

        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        Thread pump = new Thread(() -> {
            try (InputStream in = process.getInputStream()) {
                in.transferTo(buffer);
            } catch (IOException ignored) {
                // the process was killed; whatever it printed is already captured
            }
        });
        pump.setDaemon(true);
        pump.start();

        boolean finished = process.waitFor(timeoutSeconds, TimeUnit.SECONDS);
        if (!finished) {
            process.destroyForcibly();
            process.waitFor(2, TimeUnit.SECONDS);
        }
        pump.join(1000);

        int exitCode = -1;
        if (finished) {
            try {
                exitCode = process.exitValue();
            } catch (IllegalThreadStateException ignored) {
                exitCode = -1;
            }
        }
        return new ExecResult(finished, exitCode, buffer.toString(StandardCharsets.UTF_8));
    }

    private static String trimOutput(String output) {
        String trimmed = output.stripTrailing();
        return trimmed.length() > 4000 ? trimmed.substring(0, 4000) + "\n…" : trimmed;
    }

    private static final class TestResult {
        final String name;
        final boolean passed;
        final String detail;

        TestResult(String name, boolean passed, String detail) {
            this.name = name;
            this.passed = passed;
            this.detail = detail;
        }

        static TestResult parse(String line) {
            String rest = line.substring("@@TEST ".length());
            if (rest.endsWith(" PASS")) {
                return new TestResult(rest.substring(0, rest.length() - " PASS".length()), true, "");
            }
            int marker = rest.indexOf(" FAIL ");
            if (marker < 0) {
                return new TestResult(rest, false, "The test printed no result.");
            }
            String name = rest.substring(0, marker);
            String detail = rest.substring(marker + " FAIL ".length()).trim();
            return new TestResult(name, false, detail.isEmpty() ? "The test failed." : detail);
        }
    }

    private static String result(boolean ok, String phase, String message, String compileOutput,
                                 String output, List<TestResult> tests) {
        int passed = 0;
        for (TestResult test : tests) {
            if (test.passed) {
                passed++;
            }
        }

        StringBuilder json = new StringBuilder(256);
        json.append("{\"ok\":").append(ok);
        json.append(",\"phase\":\"").append(Json.escape(phase)).append('"');
        json.append(",\"message\":\"").append(Json.escape(message)).append('"');
        json.append(",\"compileOutput\":\"").append(Json.escape(compileOutput)).append('"');
        json.append(",\"output\":\"").append(Json.escape(output)).append('"');
        json.append(",\"passed\":").append(passed);
        json.append(",\"total\":").append(tests.size());
        json.append(",\"tests\":[");
        for (int i = 0; i < tests.size(); i++) {
            TestResult test = tests.get(i);
            if (i > 0) {
                json.append(',');
            }
            json.append("{\"name\":\"").append(Json.escape(test.name)).append('"');
            json.append(",\"passed\":").append(test.passed);
            json.append(",\"detail\":\"").append(Json.escape(test.detail)).append("\"}");
        }
        json.append("]}");
        return json.toString();
    }

    private static void deleteTree(Path root) {
        if (root == null || !Files.exists(root)) {
            return;
        }
        try (Stream<Path> paths = Files.walk(root)) {
            paths.sorted(Comparator.reverseOrder()).forEach((path) -> {
                try {
                    Files.deleteIfExists(path);
                } catch (IOException ignored) {
                    // best effort: the OS will clean the temp folder eventually
                }
            });
        } catch (IOException ignored) {
            // best effort
        }
    }

    private static void sendJson(HttpExchange exchange, int status, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        exchange.getResponseHeaders().set("Cache-Control", "no-store");
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream out = exchange.getResponseBody()) {
            out.write(bytes);
        }
    }

    private static void sendText(HttpExchange exchange, int status, String message) throws IOException {
        byte[] bytes = message.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "text/plain; charset=utf-8");
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream out = exchange.getResponseBody()) {
            out.write(bytes);
        }
    }

    /* ---------------------------------------------------------------- tiny JSON */

    private static final class Json {
        private Json() {
        }

        static String escape(String value) {
            if (value == null) {
                return "";
            }
            StringBuilder out = new StringBuilder(value.length() + 16);
            for (int i = 0; i < value.length(); i++) {
                char c = value.charAt(i);
                switch (c) {
                    case '"': out.append("\\\""); break;
                    case '\\': out.append("\\\\"); break;
                    case '\n': out.append("\\n"); break;
                    case '\r': out.append("\\r"); break;
                    case '\t': out.append("\\t"); break;
                    case '\b': out.append("\\b"); break;
                    case '\f': out.append("\\f"); break;
                    default:
                        if (c < 0x20) {
                            out.append(String.format("\\u%04x", (int) c));
                        } else {
                            out.append(c);
                        }
                }
            }
            return out.toString();
        }
    }

    /** Reads a flat JSON object whose values are all strings. */
    private static final class JsonReader {
        private final String text;
        private int index;

        JsonReader(String text) {
            this.text = text == null ? "" : text;
        }

        Map<String, String> readObject() {
            Map<String, String> values = new HashMap<>();
            skipSpace();
            if (index >= text.length() || text.charAt(index) != '{') {
                throw new IllegalArgumentException("Send a JSON object.");
            }
            index++;

            while (index < text.length()) {
                skipSpace();
                if (index >= text.length()) {
                    break;
                }
                char next = text.charAt(index);
                if (next == '}') {
                    index++;
                    break;
                }
                if (next == ',') {
                    index++;
                    continue;
                }

                String key = readString();
                skipSpace();
                if (index >= text.length() || text.charAt(index) != ':') {
                    throw new IllegalArgumentException("Expected ':' after " + key + ".");
                }
                index++;
                skipSpace();
                if (index >= text.length() || text.charAt(index) != '"') {
                    throw new IllegalArgumentException("Field " + key + " must be a string.");
                }
                values.put(key, readString());

                skipSpace();
                if (index < text.length() && text.charAt(index) == ',') {
                    index++;
                }
            }
            return values;
        }

        private void skipSpace() {
            while (index < text.length() && Character.isWhitespace(text.charAt(index))) {
                index++;
            }
        }

        private String readString() {
            skipSpace();
            if (index >= text.length() || text.charAt(index) != '"') {
                throw new IllegalArgumentException("Expected a JSON string.");
            }
            index++;

            StringBuilder value = new StringBuilder();
            while (index < text.length()) {
                char c = text.charAt(index++);
                if (c == '"') {
                    return value.toString();
                }
                if (c == '\\') {
                    if (index >= text.length()) {
                        break;
                    }
                    char escaped = text.charAt(index++);
                    switch (escaped) {
                        case 'n': value.append('\n'); break;
                        case 'r': value.append('\r'); break;
                        case 't': value.append('\t'); break;
                        case 'b': value.append('\b'); break;
                        case 'f': value.append('\f'); break;
                        case 'u':
                            if (index + 4 <= text.length()) {
                                value.append((char) Integer.parseInt(text.substring(index, index + 4), 16));
                                index += 4;
                            }
                            break;
                        default: value.append(escaped);
                    }
                } else {
                    value.append(c);
                }
            }
            throw new IllegalArgumentException("Unterminated JSON string.");
        }
    }
}
