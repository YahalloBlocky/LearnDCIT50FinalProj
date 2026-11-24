/**
 * DCIT 50 Library Management System - Learning Hub
 * Shell: theme, page navigation, dashboard outline, progress overlay, search.
 */
(() => {
  const PAGES = [
    "dashboard",
    "java-fundamentals",
    "code-explorer",
    "system-walkthrough",
    "debugging-lab",
    "practice-questions",
    "quizzes",
  ];

  const OUTLINE = [
    { id: "dashboard", label: "Dashboard" },
    { id: "java-fundamentals", label: "Java Fundamentals" },
    { id: "code-explorer", label: "Code Explorer" },
    { id: "system-walkthrough", label: "System Walkthrough" },
    { id: "debugging-lab", label: "Debugging Lab" },
    { id: "practice-questions", label: "Practice Q&A" },
    { id: "quizzes", label: "Quizzes & Review" },
  ];

  const state = {
    theme: localStorage.getItem("theme") || "light",
    currentPage: "dashboard",
  };

  /* ---------- Theme ---------- */

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.getElementById("toggleTheme");
    if (!btn) return;
    const dark = state.theme === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", state.theme);
    applyTheme();
  }

  /* ---------- Pages ---------- */

  function showPage(pageId, options) {
    const id = PAGES.indexOf(pageId) >= 0 ? pageId : "dashboard";
    state.currentPage = id;

    document.querySelectorAll(".page").forEach((page) => {
      page.classList.toggle("active", page.id === id);
    });

    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-nav") === id);
    });

    document.querySelectorAll("#outlineList li").forEach((li) => {
      li.classList.toggle("active", li.dataset.page === id);
    });

    if (!options || options.scroll !== false) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    try {
      history.replaceState(null, "", "#" + id);
    } catch (e) {
      /* file:// or sandboxed contexts may refuse - navigation still works */
    }

    if (window.DCIT50Search && window.DCIT50Search.clear) {
      window.DCIT50Search.clear();
    }
  }

  function bindNavigation() {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showPage(link.getAttribute("data-nav"));
      });
    });
  }

  function initialPage() {
    const hash = (location.hash || "").replace("#", "");
    if (hash === "progressOverlay") return "dashboard";
    return PAGES.indexOf(hash) >= 0 ? hash : "dashboard";
  }

  /* ---------- Dashboard outline ---------- */

  function renderOutline() {
    const list = document.getElementById("outlineList");
    if (!list) return;
    list.innerHTML = "";
    OUTLINE.forEach((item) => {
      const li = document.createElement("li");
      li.dataset.page = item.id;
      li.innerHTML =
        '<a href="#' +
        item.id +
        '" data-nav="' +
        item.id +
        '"><span class="dot" aria-hidden="true">●</span><span class="label">' +
        item.label +
        "</span></a>";
      list.appendChild(li);
    });
  }

  /* ---------- Progress overlay ---------- */

  function openProgress() {
    if (window.DCIT50Progress) {
      window.DCIT50Progress.renderOverlay();
      window.DCIT50Progress.refresh();
    }
    const overlay = document.getElementById("progressOverlay");
    if (overlay) overlay.classList.add("open");
    const close = document.getElementById("closeProgress");
    if (close) close.focus();
  }

  function bindOverlay() {
    const overlay = document.getElementById("progressOverlay");
    const btn = document.getElementById("progressBtn");
    const close = document.getElementById("closeProgress");

    if (btn) btn.addEventListener("click", openProgress);
    if (close) close.addEventListener("click", () => overlay.classList.remove("open"));
    if (overlay) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) overlay.classList.remove("open");
      });
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay && overlay.classList.contains("open")) {
        overlay.classList.remove("open");
      }
    });
  }

  /* ---------- Start ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    const themeBtn = document.getElementById("toggleTheme");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    renderOutline();
    bindNavigation();
    showPage(initialPage(), { scroll: false });

    bindOverlay();
    if (window.DCIT50Progress) window.DCIT50Progress.refresh();
    if (window.DCIT50Search) window.DCIT50Search.bind();
  });
})();
