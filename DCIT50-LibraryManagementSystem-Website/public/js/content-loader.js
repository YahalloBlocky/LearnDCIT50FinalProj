/**
 * DCIT 50 Library Management System - Learning Hub
 * Renders Java lessons, the system walkthrough and the practice Q&A.
 */
(() => {
  const DC = window.DCIT50Content || {};

  /* ---------- Java Fundamentals ---------- */

  function renderChapters() {
    const container = document.getElementById("chaptersList");
    const data = DC.javaFundamentals;
    if (!container || !data || !data.chapters) return;
    container.innerHTML = "";

    data.chapters.forEach((chapter, chapterIndex) => {
      const lessons = chapter.lessons || [];
      const number = chapter.number || chapterIndex + 1;

      const card = document.createElement("article");
      card.className = "chapter-card";
      card.innerHTML =
        '<header class="chapter-head">' +
        '<span class="chapter-num" aria-hidden="true">' +
        (chapter.icon ? chapter.icon : number) +
        "</span>" +
        '<div class="chapter-meta">' +
        "<h3>Chapter " +
        number +
        ": " +
        chapter.title +
        "</h3>" +
        "<p>" +
        lessons.length +
        " short lessons</p>" +
        "</div>" +
        '<span class="badge badge-primary">' +
        lessons.length +
        " lessons</span>" +
        "</header>";

      const list = document.createElement("ol");
      list.className = "lesson-list";

      lessons.forEach((lesson, lessonIndex) => {
        const row = document.createElement("li");
        row.className = "lesson-row";

        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "lesson-toggle";
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML =
          '<span class="lesson-index">' +
          (lessonIndex + 1) +
          "</span>" +
          '<span class="lesson-title">' +
          lesson.title +
          "</span>" +
          '<span class="lesson-chevron" aria-hidden="true">▼</span>';

        const body = document.createElement("div");
        body.className = "lesson-body";

        let filled = false;
        toggle.addEventListener("click", () => {
          const open = body.classList.toggle("open");
          toggle.setAttribute("aria-expanded", open ? "true" : "false");
          if (open && !filled) {
            body.innerHTML = lesson.content || "";
            filled = true;
          }
          if (open && window.DCIT50Progress) {
            window.DCIT50Progress.mark("lesson:" + lesson.id);
          }
        });

        row.appendChild(toggle);
        row.appendChild(body);
        list.appendChild(row);
      });

      card.appendChild(list);
      container.appendChild(card);
    });
  }

  /* ---------- System walkthrough ---------- */

  function renderWalkthrough() {
    const container = document.querySelector(".walkthrough-cards");
    const data = DC.systemWalkthrough;
    if (!container || !data || !data.sections) return;
    container.innerHTML = "";

    data.sections.forEach((section, index) => {
      const card = document.createElement("article");
      card.className = "walkthrough-card";
      card.innerHTML =
        "<h3><span class=\"num\" aria-hidden=\"true\">" +
        (index + 1) +
        "</span>" +
        section.title +
        "</h3>" +
        '<div class="walkthrough-body">' +
        (section.content || "") +
        "</div>";
      container.appendChild(card);
    });
  }

  /* ---------- Practice Q&A ---------- */

  function renderPracticeQa() {
    const container = document.getElementById("practiceQaList");
    const data = DC.practiceQa;
    if (!container || !data) return;
    container.innerHTML = "";

    data.forEach((qa, index) => {
      const item = document.createElement("div");
      item.className = "qa-item";

      const question = document.createElement("button");
      question.type = "button";
      question.className = "qa-question";
      question.setAttribute("aria-expanded", "false");
      question.innerHTML =
        '<span class="badge badge-primary">Q' + (index + 1) + "</span>" +
        "<span>" + qa.question + "</span>";

      const body = document.createElement("div");
      body.className = "qa-body";
      body.innerHTML =
        '<div class="answer"><span>Answer</span>' + (qa.answer || "") +
        (qa.detail ? '<div class="detail">' + qa.detail + "</div>" : "") +
        "</div>" +
        (qa.source ? '<div class="answer"><span>Source</span>' + qa.source + "</div>" : "") +
        (qa.followUp ? '<div class="answer"><span>Likely follow-up</span>' + qa.followUp + "</div>" : "");

      question.addEventListener("click", () => {
        const open = body.classList.toggle("open");
        question.classList.toggle("open", open);
        question.setAttribute("aria-expanded", open ? "true" : "false");
      });

      item.appendChild(question);
      item.appendChild(body);
      container.appendChild(item);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderChapters();
    renderWalkthrough();
    renderPracticeQa();
  });
})();
