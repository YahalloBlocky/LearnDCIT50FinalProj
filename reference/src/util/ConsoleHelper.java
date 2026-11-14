package util;

import java.util.Locale;
import java.util.NoSuchElementException;
import java.util.Scanner;

/**
 * Helps the program talk with the user in the terminal.
 *
 * - It reads input safely: empty text, letters instead of numbers, and
 *   out-of-range numbers are rejected and the user is asked again.
 * - It prints messages that look different: [SUCCESS], [ERROR], [INFO],
 *   [WARNING] and [NOTICE].
 *
 * It implements AutoCloseable so we can use it in try-with-resources,
 * which closes the Scanner for us when the program ends.
 */
public class ConsoleHelper implements AutoCloseable {

    private final Scanner scanner = new Scanner(System.in);

    /**
     * Shows a prompt and reads one line.
     *
     * @param prompt the text to show before the user types
     * @return what the user typed, without spaces at the start and end
     * @throws NoSuchElementException if there is no more input (for example, input was piped in and ended)
     */
    public String readLine(String prompt) {
        System.out.print(prompt);
        if (!scanner.hasNextLine()) {
            throw new NoSuchElementException("The input has ended.");
        }
        return scanner.nextLine().trim();
    }

    /**
     * Reads text that is not empty and does not contain the "|" character
     * (we use "|" to separate fields in the data files). Asks again until valid.
     *
     * @param prompt the text to show
     * @return the text typed by the user
     */
    public String readText(String prompt) {
        while (true) {
            String text = readLine(prompt);
            if (text.isEmpty()) {
                error("Input cannot be empty. Please try again.");
            } else if (text.contains("|")) {
                error("The '|' character is not allowed. Please try again.");
            } else {
                return text;
            }
        }
    }

    /**
     * Reads a whole number between min and max (both included). Asks again until valid.
     *
     * @param prompt the text to show
     * @param min    the smallest allowed number
     * @param max    the largest allowed number
     * @return the number typed by the user
     */
    public int readInt(String prompt, int min, int max) {
        while (true) {
            String text = readLine(prompt);
            if (text.isEmpty()) {
                error("Input cannot be empty. Please try again.");
                continue; // jump back to the start of the loop
            }
            try {
                int number = Integer.parseInt(text);
                if (number >= min && number <= max) {
                    return number;
                }
                error("Please enter a number from " + min + " to " + max + ".");
            } catch (NumberFormatException e) {
                error("'" + text + "' is not a whole number. Please try again.");
            }
        }
    }

    /**
     * Asks a yes/no question. Accepts y, yes, n, no (capital letters do not matter).
     *
     * @param prompt the question to show
     * @return true for yes, false for no
     */
    public boolean readYesNo(String prompt) {
        while (true) {
            String answer = readLine(prompt).toLowerCase();
            if (answer.equals("y") || answer.equals("yes")) {
                return true;
            }
            if (answer.equals("n") || answer.equals("no")) {
                return false;
            }
            error("Please type y or n.");
        }
    }

    /** Prints a success message. */
    public void success(String message) {
        System.out.println("[SUCCESS] " + message);
    }

    /** Prints an error message. */
    public void error(String message) {
        System.out.println("[ERROR] " + message);
    }

    /** Prints an information message. */
    public void info(String message) {
        System.out.println("[INFO] " + message);
    }

    /** Prints a warning message. */
    public void warning(String message) {
        System.out.println("[WARNING] " + message);
    }

    /** Prints a notice (used for overdue notifications). */
    public void notice(String message) {
        System.out.println("[NOTICE] " + message);
    }

    /** Prints one line of plain text. */
    public void line(String text) {
        System.out.println(text);
    }

    /** Prints an empty line. */
    public void blank() {
        System.out.println();
    }

    /**
     * Prints formatted text, like System.out.printf. Used for tables.
     *
     * @param format the format, for example "%-10s %5d%n"
     * @param values the values that fill the format
     */
    public void printf(String format, Object... values) {
        System.out.printf(format, values);
    }

    /**
     * Formats an amount of money, for example 35.0 becomes "PHP 35.00".
     * Locale.US makes sure the decimal mark is always a dot.
     *
     * @param amount the amount in PHP
     * @return the text
     */
    public static String money(double amount) {
        return String.format(Locale.US, "PHP %.2f", amount);
    }

    /**
     * Cuts long text so tables stay lined up.
     *
     * @param text  the text
     * @param width the most characters allowed
     * @return the text, or a shortened version ending in "..."
     */
    public static String cut(String text, int width) {
        if (text.length() <= width) {
            return text;
        }
        return text.substring(0, width - 3) + "...";
    }

    /** Closes the Scanner. Called automatically by try-with-resources. */
    @Override
    public void close() {
        scanner.close();
    }
}
