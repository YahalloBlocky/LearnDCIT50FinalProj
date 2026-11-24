/**
 * DCIT 50 Library Management System - Learning Hub
 * Quizzes: pick a quiz, answer, get scored, and save the result.
 */
(() => {
  const DC = window.DCIT50Content || {};
  const quizzes = DC.quizzes || {};
  const $ = (id) => document.getElementById(id);

  let currentQuizId = null;

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

  function highlightMenu(quizId) {
    document.querySelectorAll(".quiz-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.quiz === quizId);
      btn.setAttribute("aria-pressed", btn.dataset.quiz === quizId ? "true" : "false");
    });
  }

  function renderQuiz(quizId) {
    const quiz = quizzes[quizId];
    const container = $("quizContainer");
    if (!container) return;

    if (!quiz) {
      container.innerHTML =
        '<div class="card"><p>This quiz could not be found.</p></div>';
      return;
    }

    currentQuizId = quizId;
    highlightMenu(quizId);

    const questions = quiz.questions || [];
    container.innerHTML =
      '<div class="quiz-header">' +
      "<div><h2 style=\"margin:0;\">" + escapeHtml(quiz.title) + "</h2>" +
      '<p class="progress-summary" style="margin:4px 0 0;">' +
      escapeHtml(quiz.description || "") + "</p></div>" +
      '<span class="pill">' + questions.length + " questions</span>" +
      "</div>" +
      questions
        .map((q, qi) => {
          const options = (q.options || [])
            .map(
              (opt, oi) =>
                '<label class="quiz-option">' +
                '<input type="radio" name="q-' + qi + '" value="' + oi + '">' +
                "<span>" + escapeHtml(opt) + "</span></label>"
            )
            .join("");
          return (
            '<div class="quiz-card" id="quiz-card-' + qi + '">' +
            '<div class="quiz-question">' + (qi + 1) + ". " + escapeHtml(q.q) + "</div>" +
            '<div class="quiz-options">' + options + "</div>" +
            '<div class="quiz-feedback" id="feedback-' + qi + '"></div>' +
            "</div>"
          );
        })
        .join("") +
      '<div class="quiz-actions"><button type="button" class="btn btn-primary btn-large" id="quiz-submit">Submit answers</button></div>' +
      '<div id="quiz-result"></div>';

    container.querySelector("#quiz-submit").addEventListener("click", () => {
      const questionsList = quiz.questions || [];
      let score = 0;
      let unanswered = 0;

      questionsList.forEach((q, qi) => {
        const card = container.querySelector("#quiz-card-" + qi);
        const feedback = container.querySelector("#feedback-" + qi);
        const selected = container.querySelector('input[name="q-' + qi + '"]:checked');

        card.querySelectorAll("input").forEach((input) => {
          input.disabled = true;
        });

        if (!selected) {
          unanswered += 1;
          feedback.textContent =
            "Not answered. The correct answer is: " + (q.options && q.options[q.correct]);
          feedback.className = "quiz-feedback na";
          return;
        }

        const choice = parseInt(selected.value, 10);
        if (choice === q.correct) {
          score += 1;
          feedback.textContent = "Correct.";
          feedback.className = "quiz-feedback correct";
        } else {
          feedback.textContent =
            "Incorrect. The correct answer is: " +
            (q.options && q.options[q.correct] ? q.options[q.correct] : "") +
            (q.explanation ? " — " + q.explanation : "");
          feedback.className = "quiz-feedback wrong";
        }
      });

      const total = questionsList.length || 1;
      const percent = Math.round((score / total) * 100);

      if (window.DCIT50Progress) {
        window.DCIT50Progress.recordQuizScore(quizId, score, total);
      }

      const submit = container.querySelector("#quiz-submit");
      if (submit) submit.remove();

      const result = container.querySelector("#quiz-result");
      result.innerHTML =
        '<div class="quiz-card result-card">' +
        "<h3>Your score</h3>" +
        '<p class="result-score">' + score + " / " + total + " · " + percent + "%</p>" +
        (unanswered > 0 ? '<p class="progress-summary">' + unanswered + " question(s) were left unanswered.</p>" : "") +
        '<p class="progress-summary">' +
        (percent === 100
          ? "Perfect score. You know this material well."
          : percent >= 70
          ? "Good work. Review the questions you missed, then try again."
          : "Keep going. Re-read the matching lessons and try again.") +
        "</p>" +
        '<div class="quiz-actions">' +
        '<button type="button" class="btn btn-primary" id="quiz-retry">Try again</button>' +
        '<button type="button" class="btn" id="quiz-next">Next quiz</button>' +
        "</div></div>";

      result.querySelector("#quiz-retry").addEventListener("click", () => renderQuiz(quizId));
      result.querySelector("#quiz-next").addEventListener("click", () => {
        const ids = Object.keys(quizzes);
        const next = ids[(ids.indexOf(quizId) + 1) % ids.length];
        renderQuiz(next);
      });

      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function bindMenu() {
    document.querySelectorAll(".quiz-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => renderQuiz(btn.dataset.quiz));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindMenu();
    const first = Object.keys(quizzes)[0];
    if (first) renderQuiz(first);
  });
})();
