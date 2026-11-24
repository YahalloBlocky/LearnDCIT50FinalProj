/**
 * DCIT 50 Library Management System - Learning Hub
 * Debugging Lab: editable Java exercises graded by running hidden tests.
 *
 * Every card sends the learner's class to POST /api/run. The local Java server
 * compiles it together with the exercise's test harness and reports each test as
 * passed or failed, so the score never depends on how the code is formatted.
 */
(() => {
  const DC = window.DCIT50Content || {};
  const debuggingData = DC.debugging || {};
  const $ = (id) => document.getElementById(id);
  const RUN_URL = "/api/run";

  function escapeHtml(text) {
    if (text === undefined || text === null) return "";
    return String(text).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  function activePanel() {
    return document.querySelector(".tab-panel.active");
  }

  function markBug(id) {
    if (window.DCIT50Progress) window.DCIT50Progress.mark("bug:" + id);
  }

  function makeButton(text, className) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    if (className) button.className = className;
    return button;
  }

  /* --------------------------------------------------------------- runner glue */

  function harnessFor(exercise) {
    const template = debuggingData.harnessTemplate || "";
    return template.replace("/*CHECKS*/", exercise.checks || "");
  }

  async function requestRun(code, tests) {
    const response = await fetch(RUN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: code, tests: tests }),
    });
    if (!response.ok) {
      throw new Error("The runner answered HTTP " + response.status + ".");
    }
    return response.json();
  }

  /* ------------------------------------------------------------------ the lab */

  /**
   * Builds an editor + toolbar + console for one exercise.
   *
   * options.label          heading above the editor
   * options.hints          show the hints button (default true)
   * options.solution       show the solution button (default true)
   * options.progressive    reveal hints one at a time
   * options.onResult       called with the runner response after every run
   */
  function buildLab(exercise, options) {
    const opts = options || {};
    const wrap = document.createElement("div");
    wrap.className = "lab";

    const label = document.createElement("h4");
    label.textContent = opts.label || "Your fix (Java)";
    wrap.appendChild(label);

    const editor = document.createElement("textarea");
    editor.className = "code-editor";
    editor.spellcheck = false;
    editor.value = exercise.starter || "";
    editor.setAttribute("aria-label", "Java editor for " + (exercise.title || "this exercise"));
    editor.rows = Math.min(32, Math.max(10, editor.value.split("\n").length + 1));
    wrap.appendChild(editor);

    const toolbar = document.createElement("div");
    toolbar.className = "editor-toolbar";

    const runBtn = makeButton("Run tests", "btn-check-editor");
    const resetBtn = makeButton("Reset code", "");
    const status = document.createElement("span");
    status.className = "lab-status";
    status.textContent = "Ctrl+Enter runs the tests";

    toolbar.appendChild(runBtn);
    toolbar.appendChild(resetBtn);

    let hintsBox = null;
    let hintsList = null;
    let hintBtn = null;
    const hints = [exercise.hint1, exercise.hint2, exercise.hint3].filter(Boolean);
    if (opts.hints !== false && hints.length) {
      hintBtn = makeButton("Show hints", "btn-icon-btn");
      toolbar.appendChild(hintBtn);
    }

    let solutionBtn = null;
    let solutionBox = null;
    if (opts.solution !== false && exercise.solution) {
      solutionBtn = makeButton("Reveal solution", "btn btn-small btn-warning");
      toolbar.appendChild(solutionBtn);
    }

    toolbar.appendChild(status);
    wrap.appendChild(toolbar);

    const consoleBox = document.createElement("div");
    consoleBox.className = "editor-console";
    consoleBox.hidden = true;
    const consoleOut = document.createElement("div");
    consoleBox.appendChild(consoleOut);
    wrap.appendChild(consoleBox);

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    wrap.appendChild(feedback);

    if (hintBtn) {
      hintsBox = document.createElement("div");
      hintsBox.className = "hints";
      hintsBox.hidden = true;
      const heading = document.createElement("h4");
      heading.textContent = "Hints";
      hintsList = document.createElement("ol");
      hintsBox.appendChild(heading);
      hintsBox.appendChild(hintsList);
      wrap.appendChild(hintsBox);

      let shown = 0;
      let hintsOpen = false;
      hintBtn.addEventListener("click", () => {
        if (!opts.progressive) {
          if (!hintsList.children.length) {
            hints.forEach((hint) => {
              const li = document.createElement("li");
              li.textContent = hint;
              hintsList.appendChild(li);
            });
          }
          hintsOpen = !hintsOpen;
          hintsBox.hidden = !hintsOpen;
          hintBtn.textContent = hintsOpen ? "Hide hints" : "Show hints";
          return;
        }

        hintsBox.hidden = false;

        if (shown >= hints.length) return;
        const li = document.createElement("li");
        li.textContent = hints[shown];
        hintsList.appendChild(li);
        shown += 1;
        hintBtn.textContent = shown < hints.length ? "Show hint " + (shown + 1) : "No more hints";
        if (shown >= hints.length) hintBtn.disabled = true;
      });
    }

    if (solutionBtn) {
      solutionBox = document.createElement("div");
      solutionBox.className = "solution-block";
      solutionBox.hidden = true;
      solutionBox.innerHTML =
        "<h4>Solution</h4>" +
        "<pre><code>" + escapeHtml(exercise.solution) + "</code></pre>" +
        (exercise.expected
          ? "<p><strong>Key line:</strong> <code>" + escapeHtml(exercise.expected) + "</code></p>"
          : "") +
        (exercise.explanation
          ? "<p><strong>Why this is the fix:</strong> " + escapeHtml(exercise.explanation) + "</p>"
          : "");
      wrap.appendChild(solutionBox);

      solutionBtn.addEventListener("click", () => {
        solutionBox.hidden = !solutionBox.hidden;
        solutionBtn.textContent = solutionBox.hidden ? "Reveal solution" : "Hide solution";
        markBug(exercise.id);
      });
    }

    function reset() {
      editor.value = exercise.starter || "";
      consoleBox.hidden = true;
      consoleOut.innerHTML = "";
      feedback.textContent = "";
      feedback.className = "quiz-feedback";
      status.textContent = "Ctrl+Enter runs the tests";
    }

    resetBtn.addEventListener("click", reset);

    editor.addEventListener("keydown", (event) => {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.slice(0, start) + "    " + editor.value.slice(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        run();
      }
    });

    let busy = false;
    let lastResult = null;

    function line(text, className) {
      const p = document.createElement("p");
      p.className = "console-line" + (className ? " " + className : "");
      p.textContent = text;
      return p;
    }

    function renderTests(result) {
      consoleOut.innerHTML = "";
      if (result.message) {
        consoleOut.appendChild(line(result.message));
      }

      const list = document.createElement("ul");
      list.className = "test-list";
      (result.tests || []).forEach((test) => {
        const li = document.createElement("li");
        const mark = document.createElement("span");
        mark.className = "test-mark " + (test.passed ? "ok" : "fail");
        mark.textContent = test.passed ? "✓" : "✗";
        const text = document.createElement("span");
        text.textContent = test.name + (test.passed || !test.detail ? "" : " — " + test.detail);
        li.appendChild(mark);
        li.appendChild(text);
        list.appendChild(li);
      });
      if (list.children.length) {
        consoleOut.appendChild(list);
      }

      if (result.output) {
        const caption = document.createElement("p");
        caption.className = "console-caption";
        caption.textContent = "Program output";
        consoleOut.appendChild(caption);
        consoleOut.appendChild(line(result.output));
      }
    }

    function renderResult(result) {
      lastResult = result;
      consoleBox.hidden = false;

      const failed = result.total > 0 ? result.total - result.passed : 0;
      if (result.phase === "offline") {
        consoleOut.innerHTML = "";
        consoleOut.appendChild(line(
          "The Java runner is not reachable, so the tests cannot run yet."
        ));
        consoleOut.appendChild(line(
          "Start it from the project folder: javac -d backend/out backend/src/hub/Server.java " +
          "then java -cp backend/out hub.Server 8081 . and open http://localhost:8081/"
        ));
        feedback.className = "quiz-feedback info";
        feedback.textContent =
          "Editing works offline. Running the tests needs the local Java runner (" + result.message + ").";
        return;
      }

      if (result.phase === "compile" || result.phase === "compile-timeout") {
        consoleOut.innerHTML = "";
        consoleOut.appendChild(line(result.message || "The code did not compile."));
        if (result.compileOutput) {
          consoleOut.appendChild(line(result.compileOutput));
        }
        feedback.className = "quiz-feedback wrong";
        feedback.textContent =
          "Compilation failed. Fix the errors above — formatting and naming are up to you, only valid Java matters.";
        markBug(exercise.id);
        return;
      }

      if (result.phase === "timeout") {
        consoleOut.innerHTML = "";
        consoleOut.appendChild(line(result.message || "The code did not finish in time."));
        feedback.className = "quiz-feedback wrong";
        feedback.textContent = "Timed out after 5 seconds. Check for a loop that never ends.";
        markBug(exercise.id);
        return;
      }

      renderTests(result);

      if (!result.total) {
        feedback.className = "quiz-feedback wrong";
        feedback.textContent =
          "No tests reported a result. Reset the code and keep the Exercise class and its methods intact.";
        markBug(exercise.id);
        return;
      }

      if (failed === 0) {
        feedback.className = "quiz-feedback correct";
        feedback.textContent =
          "All " + result.total + " test" + (result.total === 1 ? "" : "s") +
          " passed. This behaviour is what the project needs.";
      } else {
        feedback.className = "quiz-feedback wrong";
        feedback.textContent =
          result.passed + " of " + result.total + " tests passed. Read the failing test, then run again.";
      }
      markBug(exercise.id);
      if (opts.onResult) opts.onResult(result);
    }

    async function run() {
      if (busy) return lastResult;
      busy = true;
      runBtn.disabled = true;
      runBtn.textContent = "Running…";
      status.textContent = "Compiling and testing…";
      consoleBox.hidden = false;
      consoleOut.innerHTML = "";
      consoleOut.appendChild(line("Compiling…"));
      feedback.className = "quiz-feedback info";
      feedback.textContent = "Sending your code to the local Java runner.";

      let result;
      try {
        result = await requestRun(editor.value, harnessFor(exercise));
      } catch (error) {
        result = { ok: false, phase: "offline", message: error.message, tests: [] };
      }

      busy = false;
      runBtn.disabled = false;
      runBtn.textContent = "Run tests";
      status.textContent = "Ctrl+Enter runs the tests";
      renderResult(result);
      return result;
    }

    runBtn.addEventListener("click", run);

    return {
      element: wrap,
      editor: editor,
      run: run,
      reset: reset,
      lastResult: () => lastResult,
    };
  }

  /* ------------------------------------------------------- exercise cards */

  function metaHtml(exercise) {
    return (
      '<div class="challenge-meta">' +
      (exercise.category ? '<span class="pill">' + escapeHtml(exercise.category) + "</span>" : "") +
      (exercise.difficulty ? '<span class="pill">' + escapeHtml(exercise.difficulty) + "</span>" : "") +
      (exercise.class
        ? '<span class="pill">' + escapeHtml(exercise.class) +
          (exercise.method ? " :: " + escapeHtml(exercise.method) : "") + "</span>"
        : "") +
      "</div>"
    );
  }

  function renderExercises(levelKey) {
    const container = activePanel();
    if (!container) return;
    const level = debuggingData.levels && debuggingData.levels[levelKey];

    if (!level) {
      container.innerHTML = '<div class="card"><p>No exercises are defined for this level yet.</p></div>';
      return;
    }

    container.innerHTML =
      '<div class="page-head" style="margin-bottom:20px;">' +
      "<h2>" + escapeHtml(level.title) + " debugging</h2>" +
      '<p class="subtitle">' + escapeHtml(level.description || "") + "</p>" +
      "</div>";

    (level.exercises || []).forEach((exercise) => {
      const card = document.createElement("article");
      card.className = "challenge-card";

      const intro = document.createElement("div");
      intro.innerHTML =
        "<h3>" + escapeHtml(exercise.title) + "</h3>" +
        metaHtml(exercise) +
        (exercise.description ? "<p>" + escapeHtml(exercise.description) + "</p>" : "") +
        (exercise.task
          ? '<p class="task"><strong>Your task:</strong> ' + escapeHtml(exercise.task) + "</p>"
          : "");
      card.appendChild(intro);

      const lab = buildLab(exercise, { label: "Fix it here (Java)" });
      card.appendChild(lab.element);
      container.appendChild(card);
    });
  }

  /* ------------------------------------------------------- five-minute sim */

  function allExercises() {
    const levels = debuggingData.levels || {};
    const found = [];
    Object.keys(levels).forEach((key) => {
      (levels[key].exercises || []).forEach((exercise) => found.push(exercise));
    });
    return found;
  }

  function renderSimulation() {
    const container = activePanel();
    if (!container) return;
    const sim = debuggingData.simulation || {};
    const catalog = allExercises();

    if (!catalog.length) {
      container.innerHTML = '<div class="card"><p>No simulation challenges are configured yet.</p></div>';
      return;
    }

    const ids = sim.challengeIds || [];
    const pool = catalog.filter((exercise) => ids.indexOf(exercise.id) >= 0);
    const challenges = pool.length ? pool : catalog;

    const rules = (sim.rules || [])
      .map((rule) => "<li>" + escapeHtml(rule) + "</li>")
      .join("");

    container.innerHTML =
      '<div class="page-head" style="margin-bottom:20px;">' +
      "<h2>" + escapeHtml(sim.title || "Five-Minute Challenge") + "</h2>" +
      '<p class="subtitle">' + escapeHtml(sim.description || "") + "</p>" +
      "</div>" +
      '<div class="card"><h3>How it works</h3><ul>' + rules + "</ul></div>" +
      '<article class="challenge-card">' +
      '<div class="panel-head"><h3 id="sim-title" style="margin:0;">Ready when you are</h3>' +
      '<span class="pill" id="sim-timer">5:00</span></div>' +
      '<p id="sim-desc">Press start and a random challenge appears. You have five minutes.</p>' +
      '<div id="sim-slot"></div>' +
      '<div class="editor-toolbar">' +
      '<button type="button" class="btn-check-editor" id="sim-start">Start challenge</button>' +
      '<button type="button" class="btn-icon-btn" id="sim-submit" hidden>Submit and score</button>' +
      "</div>" +
      "</article>" +
      '<div class="times-up" id="sim-times-up" hidden>Time is up. Review the result below.</div>' +
      '<div class="card" id="sim-results" hidden>' +
      "<h3>Your result</h3>" +
      '<ul class="test-list" id="sim-result-list"></ul>' +
      '<p id="sim-score" style="font-weight:700;"></p>' +
      '<div class="progress-bar"><div class="progress-fill" id="sim-progress"></div></div>' +
      "</div>";

    const el = {
      title: $("sim-title"),
      desc: $("sim-desc"),
      slot: $("sim-slot"),
      timer: $("sim-timer"),
      start: $("sim-start"),
      submit: $("sim-submit"),
      timesUp: $("sim-times-up"),
      results: $("sim-results"),
      list: $("sim-result-list"),
      score: $("sim-score"),
      progress: $("sim-progress"),
    };

    const state = {
      timeLeft: 300,
      current: null,
      lab: null,
      interval: null,
      done: false,
      started: false,
    };

    function paintTimer() {
      const minutes = Math.floor(state.timeLeft / 60);
      const seconds = state.timeLeft % 60;
      el.timer.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    function stopTimer() {
      if (state.interval) clearInterval(state.interval);
      state.interval = null;
    }

    function finish(reason, result) {
      if (state.done) return;
      state.done = true;
      stopTimer();
      el.timesUp.hidden = reason !== "timeout";
      el.submit.hidden = true;
      el.start.hidden = false;
      el.start.textContent = "Start another challenge";
      el.results.hidden = false;

      const tests = (result && result.tests) || [];
      el.list.innerHTML = tests
        .map(
          (test) =>
            '<li><span class="test-mark ' + (test.passed ? "ok" : "fail") + '">' +
            (test.passed ? "✓" : "✗") + "</span><span>" + escapeHtml(test.name) + "</span></li>"
        )
        .join("");

      const passed = result ? result.passed : 0;
      const total = tests.length;
      const pct = reason === "timeout" || !total ? 0 : Math.round((passed / total) * 100);

      el.score.textContent =
        reason === "timeout"
          ? "Time expired before the tests ran."
          : total
            ? "Score: " + pct + "% (" + passed + " of " + total + " tests passed)"
            : (result && result.message) || "No tests ran.";
      el.progress.style.width = pct + "%";
      if (state.current) markBug(state.current.id);
    }

    el.start.addEventListener("click", () => {
      stopTimer();
      state.current = challenges[Math.floor(Math.random() * challenges.length)];
      state.timeLeft = 300;
      state.done = false;
      state.started = true;

      el.title.textContent = state.current.title;
      el.desc.textContent = state.current.task || state.current.description || "";
      el.slot.innerHTML = "";
      el.timesUp.hidden = true;
      el.results.hidden = true;
      el.submit.hidden = false;
      el.start.hidden = true;
      paintTimer();

      state.lab = buildLab(state.current, {
        label: "Your fix (Java)",
        hints: false,
        solution: false,
        onResult: (result) => {
          if (!state.done && result && result.total && result.passed === result.total) {
            finish("solved", result);
          }
        },
      });
      el.slot.appendChild(state.lab.element);

      state.interval = setInterval(() => {
        state.timeLeft -= 1;
        paintTimer();
        if (state.timeLeft <= 0) {
          finish("timeout", state.lab ? state.lab.lastResult() : null);
        }
      }, 1000);
    });

    el.submit.addEventListener("click", async () => {
      if (!state.lab) return;
      const result = await state.lab.run();
      finish("submitted", result);
    });
  }

  /* ------------------------------------------------------------ random mode */

  function renderRandomMode() {
    const container = activePanel();
    if (!container) return;
    const catalog = allExercises();
    const random = debuggingData.randomMode || {};

    container.innerHTML =
      '<div class="page-head" style="margin-bottom:20px;">' +
      "<h2>" + escapeHtml(random.title || "Random challenge") + "</h2>" +
      '<p class="subtitle">' + escapeHtml(random.description || "") + "</p>" +
      "</div>" +
      '<div class="card">' +
      '<button type="button" class="btn btn-primary" id="random-generate">Generate a challenge</button>' +
      '<div id="random-box" style="margin-top:16px;" hidden></div>' +
      "</div>";

    const button = $("random-generate");
    const box = $("random-box");

    button.addEventListener("click", () => {
      const picked = catalog[Math.floor(Math.random() * catalog.length)];
      if (!picked) {
        box.hidden = false;
        box.textContent = "No exercises available.";
        return;
      }

      box.hidden = false;
      box.innerHTML =
        "<h3>" + escapeHtml(picked.title) + "</h3>" +
        '<div class="challenge-meta">' +
        '<span class="pill">' + escapeHtml(picked.class || "Exercise") +
        (picked.method ? " :: " + escapeHtml(picked.method) : "") + "</span></div>" +
        "<p>" + escapeHtml(picked.description || "") + "</p>" +
        (picked.task
          ? '<p class="task"><strong>Your task:</strong> ' + escapeHtml(picked.task) + "</p>"
          : "");

      const lab = buildLab(picked, { label: "Your fix (Java)", progressive: true });
      box.appendChild(lab.element);
      markBug(picked.id);
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ------------------------------------------------------------------ tabs */

  function renderTab(tab) {
    switch (tab) {
      case "intermediate":
      case "advanced":
      case "beginner":
        renderExercises(tab);
        break;
      case "simulator":
        renderSimulation();
        break;
      case "random":
        renderRandomMode();
        break;
      default:
        renderExercises("beginner");
    }
  }

  function bindTabs() {
    const buttons = document.querySelectorAll(".debugging-tabs .tab-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        document.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.panel === btn.dataset.tab);
        });

        const panel = document.querySelector('.tab-panel[data-panel="' + btn.dataset.tab + '"]');
        if (panel) panel.innerHTML = "";
        renderTab(btn.dataset.tab);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindTabs();
    renderExercises("beginner");
  });
})();
