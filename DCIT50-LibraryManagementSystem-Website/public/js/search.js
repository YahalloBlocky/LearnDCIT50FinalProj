/**
 * DCIT 50 Library Management System - Learning Hub
 * Search: filters the content blocks of the page you are currently reading.
 */
(() => {
  const SELECTOR =
    ".chapter-card, .section-block, .qa-item, .walkthrough-card, .challenge-card, .quiz-card, .lesson-row";

  function blocks() {
    const page = document.querySelector(".page.active");
    if (!page) return [];
    return Array.from(page.querySelectorAll(SELECTOR));
  }

  function clear() {
    document.querySelectorAll(".is-filtered").forEach((el) => {
      el.classList.remove("is-filtered");
      el.style.display = "";
    });
    const note = document.getElementById("searchNote");
    if (note) note.remove();
  }

  function apply(query) {
    const page = document.querySelector(".page.active");
    if (!page) return;
    const q = query.trim().toLowerCase();

    if (!q) {
      clear();
      return;
    }

    let matches = 0;
    blocks().forEach((el) => {
      const hit = el.textContent.toLowerCase().indexOf(q) !== -1;
      el.classList.toggle("is-filtered", !hit);
      el.style.display = hit ? "" : "none";
      if (hit) matches += 1;
    });

    let note = document.getElementById("searchNote");
    if (!note) {
      note = document.createElement("p");
      note.id = "searchNote";
      note.className = "search-note";
      page.insertBefore(note, page.firstChild);
    }
    note.textContent =
      matches === 0
        ? 'No match for "' + query.trim() + '" on this page.'
        : matches + ' result' + (matches === 1 ? "" : "s") + ' for "' + query.trim() + '".';
  }

  function bind() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    input.addEventListener("input", (event) => apply(event.target.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        input.value = "";
        clear();
      }
    });
  }

  window.DCIT50Search = { bind, clear };
})();
