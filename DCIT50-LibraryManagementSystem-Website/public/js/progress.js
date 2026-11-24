/**
 * DCIT 50 Library Management System - Learning Hub
 * Progress tracking (localStorage) and progress UI.
 *
 * Keys stored in "dcgit50_progress":
 *   lesson:<lessonId>  - a lesson was opened
 *   file:<fileId>      - a source file was studied
 *   bug:<exerciseId>   - a debugging exercise was attempted
 *   quizHistory        - array of the latest quiz attempts
 */
(() => {
  const STORAGE_KEY = "dcgit50_progress";

  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return raw && typeof raw === "object" ? raw : {};
    } catch (e) {
      return {};
    }
  }

  function write(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      /* storage full or blocked - progress just will not persist */
    }
  }

  function countKeys(progress, prefix) {
    return Object.keys(progress).filter(
      (k) => k.indexOf(prefix) === 0 && progress[k]
    ).length;
  }

  function contentTotals() {
    const c = window.DCIT50Content || {};
    const chapters = (c.javaFundamentals && c.javaFundamentals.chapters) || [];
    const lessons = chapters.reduce(
      (sum, ch) => sum + ((ch.lessons && ch.lessons.length) || 0),
      0
    );
    const files = (c.codeExplorer && c.codeExplorer.files) ? c.codeExplorer.files.length : 0;
    const quizzes = c.quizzes ? Object.keys(c.quizzes).length : 0;

    let bugs = 0;
    const levels = c.debugging && c.debugging.levels;
    if (levels) {
      Object.keys(levels).forEach((key) => {
        bugs += (levels[key].exercises || []).length;
      });
    }
    return { lessons, files, quizzes, bugs };
  }

  function summary() {
    const progress = read();
    const totals = contentTotals();
    const history = Array.isArray(progress.quizHistory) ? progress.quizHistory : [];

    const lessons = countKeys(progress, "lesson:");
    const files = countKeys(progress, "file:");
    const bugs = countKeys(progress, "bug:");
    const quizzes = history.length;

    const total = totals.lessons + totals.files + totals.quizzes + totals.bugs;
    const done = lessons + files + quizzes + bugs;
    const percent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;

    return { totals, lessons, files, bugs, quizzes, history, done, total, percent };
  }

  function mark(key) {
    const progress = read();
    if (progress[key]) return false;
    progress[key] = true;
    write(progress);
    refresh();
    return true;
  }

  function recordQuizScore(quizId, score, total) {
    const progress = read();
    const history = Array.isArray(progress.quizHistory) ? progress.quizHistory : [];
    const entry = { quizId, score, total, timestamp: Date.now() };
    const existing = history.findIndex((h) => h && h.quizId === quizId);
    if (existing >= 0) {
      history[existing] = entry;
    } else {
      history.push(entry);
    }
    progress.quizHistory = history;
    write(progress);
    refresh();
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function refresh() {
    const s = summary();

    setText("statLessons", s.lessons);
    setText("statQuizzes", s.quizzes);
    setText("statCodeSections", s.files);
    setText("statChallenges", s.bugs);

    setText("overallProgressPercent", s.percent + "%");
    const fill = document.getElementById("overallProgressFill");
    if (fill) fill.style.width = s.percent + "%";
    const bar = document.getElementById("overallProgressBar");
    if (bar) bar.setAttribute("aria-valuenow", String(s.percent));

    const summaryEl = document.getElementById("progressSummary");
    if (summaryEl) {
      if (s.done === 0) {
        summaryEl.textContent = "Open a lesson or take a quiz to start tracking your progress.";
      } else if (s.percent >= 100) {
        summaryEl.textContent = "Everything is complete. You are ready for the demonstration.";
      } else {
        summaryEl.textContent =
          s.percent + "% complete · " + s.done + " of " + s.total + " activities done. Keep going.";
      }
    }
  }

  function quizTitle(quizId) {
    const quizzes = (window.DCIT50Content && window.DCIT50Content.quizzes) || {};
    return (quizzes[quizId] && quizzes[quizId].title) || quizId;
  }

  function renderOverlay() {
    const container = document.getElementById("progressOverlayContent");
    if (!container) return;
    const s = summary();

    const rows = [
      ["Lessons opened", s.lessons + " / " + s.totals.lessons],
      ["Source files studied", s.files + " / " + s.totals.files],
      ["Debugging exercises tried", s.bugs + " / " + s.totals.bugs],
      ["Quizzes taken", s.quizzes + " / " + s.totals.quizzes],
    ];

    let html =
      '<div class="progress-bar" style="margin-bottom:16px;"><div class="progress-fill" style="width:' +
      s.percent +
      '%"></div></div>' +
      '<p class="progress-summary" style="margin-top:0;">' +
      (s.done === 0
        ? "Nothing tracked yet. Start with any lesson."
        : s.percent + "% complete overall.") +
      "</p>" +
      '<ul class="overlay-list">';
    rows.forEach((row) => {
      html += "<li><span>" + row[0] + "</span><strong>" + row[1] + "</strong></li>";
    });
    html += "</ul>";

    if (s.history.length > 0) {
      html += '<h3 class="overlay-subtitle">Your latest quiz results</h3>';
      s.history
        .slice()
        .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
        .forEach((h) => {
          const pct = h.total ? Math.round((h.score / h.total) * 100) : 0;
          html +=
            '<div class="quiz-history-item"><div>' +
            quizTitle(h.quizId) +
            "</div><strong>" +
            h.score +
            " / " +
            h.total +
            " (" +
            pct +
            '%)</strong></div>';
        });
    } else {
      html += '<p class="progress-summary">No quiz results yet.</p>';
    }

    container.innerHTML = html;
  }

  window.DCIT50Progress = {
    read,
    mark,
    recordQuizScore,
    summary,
    refresh,
    renderOverlay,
    // Backwards-compatible helper names used by older scripts
    loadProgress: read,
    updateOverallProgress: refresh,
  };
})();
