/**
 * DCIT 50 Library Management System - Learning Hub
 * Code Explorer: one tab per project file, with explained sections.
 */
(() => {
  const DC = window.DCIT50Content || {};
  const data = DC.codeExplorer || {};
  const files = data.files || [];
  const $ = (id) => document.getElementById(id);

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

  function renderTabs() {
    const container = $("codeExplorerList");
    if (!container) return;
    container.innerHTML = "";

    files.forEach((file, index) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "tab-btn code-explorer-tab" + (index === 0 ? " active" : "");
      tab.dataset.file = file.id;
      tab.textContent = file.name;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
      container.appendChild(tab);
    });
  }

  function sectionBlock(title, bodyHtml, open) {
    return (
      '<div class="section-block">' +
      '<div class="section-head" role="button" tabindex="0">' +
      '<span class="section-title">' + title + "</span>" +
      '<span class="section-toggle" aria-hidden="true">▼</span>' +
      "</div>" +
      '<div class="section-body' + (open ? " open" : "") + '">' + bodyHtml + "</div>" +
      "</div>"
    );
  }

  function renderFile(file) {
    const container = $("codeExplorerContent");
    if (!container || !file) return;

    const sections = (file.sections || []).map((section, index) => {
      let body = section.content || "";
      if (section.keywordFocus) {
        body +=
          "<h4>Keywords and symbols</h4><pre><code>" +
          escapeHtml(section.keywordFocus) +
          "</code></pre>";
      }
      if (section.code) {
        body += "<h4>Code sample</h4><pre><code>" + escapeHtml(section.code) + "</code></pre>";
      }
      if (section.example) {
        body +=
          "<h4>Simple example</h4><pre><code>" + escapeHtml(section.example) + "</code></pre>";
      }
      return sectionBlock((index + 1) + ". " + escapeHtml(section.title), body, false);
    });

    let html =
      '<div class="card">' +
      "<h2>" + escapeHtml(file.name) + "</h2>" +
      '<div class="challenge-meta">' +
      (file.package ? '<span class="pill">package ' + escapeHtml(file.package) + "</span>" : "") +
      (file.path ? '<span class="pill">' + escapeHtml(file.path) + "</span>" : "") +
      "</div>" +
      (file.description ? "<p>" + escapeHtml(file.description) + "</p>" : "") +
      sectionBlock("File overview", file.overview || "", true) +
      "</div>";

    if (sections.length > 0) {
      html += '<div class="card">' + "<h3 style=\"margin-top:0;\">Section by section</h3>" + sections.join("") + "</div>";
    }

    const checks = file.knowledgeChecks || [];
    if (checks.length > 0) {
      html +=
        '<div class="card">' +
        "<h3>Knowledge check</h3>" +
        '<p class="subtitle" style="font-size:0.95rem;">Answer in your head, then reveal the expected answer.</p>' +
        '<div class="qa-list">' +
        checks
          .map(
            (check, index) =>
              '<div class="qa-item">' +
              '<button type="button" class="qa-question" data-check="' + index + '" aria-expanded="false">' +
              '<span class="badge badge-primary">Q' + (index + 1) + "</span>" +
              "<span>" + escapeHtml(check.q) + "</span></button>" +
              '<div class="qa-body"><div class="answer"><span>Expected answer</span>' +
              escapeHtml(check.a) + "</div></div></div>"
          )
          .join("") +
        "</div></div>";
    }

    html +=
      '<div class="card" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;">' +
      "<div><strong>Finished with this file?</strong>" +
      '<p class="progress-summary" style="margin:4px 0 0;">Marking it keeps your progress on this device.</p></div>' +
      '<button type="button" class="btn btn-success" id="mark-file">Mark as studied</button>' +
      "</div>";

    container.innerHTML = html;

    /* Accordions inside the file */
    container.querySelectorAll(".section-head").forEach((head) => {
      const toggle = () => head.parentElement.querySelector(".section-body").classList.toggle("open");
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      });
    });

    /* Knowledge-check reveals */
    container.querySelectorAll("[data-check]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const body = btn.parentElement.querySelector(".qa-body");
        const open = body.classList.toggle("open");
        btn.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    /* Mark as studied */
    const markBtn = container.querySelector("#mark-file");
    if (markBtn) {
      const progress = window.DCIT50Progress;
      const key = "file:" + file.id;
      const already = progress ? !!progress.read()[key] : false;
      if (already) {
        markBtn.textContent = "✓ Studied";
        markBtn.classList.remove("btn-success");
      }
      markBtn.addEventListener("click", () => {
        if (progress) progress.mark(key);
        markBtn.textContent = "✓ Studied";
        markBtn.classList.remove("btn-success");
      });
    }
  }

  function bindTabs() {
    const container = $("codeExplorerList");
    if (!container) return;
    container.addEventListener("click", (event) => {
      const tab = event.target.closest(".code-explorer-tab");
      if (!tab) return;
      container.querySelectorAll(".code-explorer-tab").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const file = files.find((f) => f.id === tab.dataset.file);
      renderFile(file);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTabs();
    if (files.length > 0) renderFile(files[0]);
    bindTabs();
  });
})();
