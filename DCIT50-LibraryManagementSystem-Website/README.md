# DCIT 50 Library Management System — Learning Hub

A study site for the DCIT 50 Java project: Java basics, the real source code, a
debugging lab, practice questions and quizzes.

## Run it

The debugging lab compiles and runs the Java you type, so it needs the small
local server in `backend/`. From this folder:

```bash
javac -d backend/out backend/src/hub/Server.java
java -cp backend/out hub.Server 8081 .
```

Open <http://localhost:8081/>.

The server does two things:

- serves `public/` as the site;
- answers `POST /api/run` by writing the two snippets to a temp folder, compiling
  them with `javac`, and running the test harness with a 5-second timeout. Nothing
  is stored, and the folder is deleted after each run.

`python serve.py` still serves the pages on port 8081, but without `/api/run` the
debugging editor can be read and edited yet the tests cannot run.

## Layout

```text
public/            the site itself (index.html, css/, js/)
src/content/       content modules; debugging exercises live in debugging.js
backend/src/hub/   Server.java: static server + Java code runner
build-content.py   bundles src/content/*.js into public/js/content-data.js
check-js.py        parses every JS file and reports syntax errors
```

After editing anything in `src/content/`, rebuild the bundle:

```bash
python build-content.py
```

## Debugging exercises

Each exercise in `src/content/debugging.js` has:

- `starter` — the buggy, complete `Exercise` class the learner edits;
- `checks` — Java statements inserted into the shared test harness;
- `solution` — the fixed class, loaded by "Reveal solution";
- `hint1..hint3`, `task`, `expected`, `explanation` — the guidance shown in the card.

The harness prints `@@TEST <name> PASS` or `@@TEST <name> FAIL <reason>` for every
check, and the page grades from those lines. Only behaviour is judged, so any
correct implementation passes regardless of formatting, naming or approach.

A new exercise needs to compile on its own: `Exercise` plus the harness are the
only files sent to `javac`.
