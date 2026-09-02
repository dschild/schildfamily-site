/*
  Schild Family History — shared interaction layer for /history/*.
  Requires history-data.js (window.HistoryData) to be loaded first.
  Handles: research-status badges, related-entity strips, the
  source drawer, and the document viewer. All progressive
  enhancement — every page works and reads correctly with this
  file absent; this only adds the interactive layer on top.
*/
(function () {
  var D = window.HistoryData || { people: {}, places: {}, stories: {}, events: [], archive: {}, sources: {}, eventSources: {} };

  /* ---------- Research status badges ---------- */
  var STATUS_ICON = {
    confirmed: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    probable: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M8 5v3.4M8 10.6h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    researching: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M9.4 9.4L13 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };
  var STATUS_LABEL = { confirmed: "Confirmed", probable: "Probable", researching: "Researching" };

  function statusBadgeHTML(status) {
    var s = STATUS_LABEL[status] ? status : "researching";
    return '<span class="h-status ' + s + '">' + STATUS_ICON[s] + STATUS_LABEL[s] + "</span>";
  }

  document.querySelectorAll("[data-status-mount]").forEach(function (el) {
    el.innerHTML = statusBadgeHTML(el.getAttribute("data-status-mount"));
  });

  /* ---------- Related-entity strips (data-driven, so a new story/person
     automatically shows up everywhere it's referenced, without hand
     editing every page that links to it) ---------- */
  function personCardHTML(id) {
    var p = D.people[id];
    if (!p) return "";
    var initials = p.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
    return (
      '<a class="h-entity-card" href="/history/people/' + id + '/">' +
      '<span class="h-entity-portrait" aria-hidden="true">' + initials + "</span>" +
      '<span class="h-entity-text"><span class="h-entity-name">' + p.name + "</span>" +
      '<span class="h-entity-sub">' + p.years + " &middot; " + p.role + "</span></span>" +
      "</a>"
    );
  }

  function personProfileCardHTML(id) {
    var p = D.people[id];
    if (!p) return "";
    var initials = p.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
    return (
      '<a class="h-entity-card" href="/history/people/' + id + '/" style="align-items:flex-start;">' +
      '<span class="h-entity-portrait" aria-hidden="true">' + initials + "</span>" +
      '<span class="h-entity-text"><span class="h-entity-name">' + p.name + "</span>" +
      '<span class="h-entity-sub">' + p.years + " &middot; " + p.role + "</span>" +
      '<span class="h-entity-context">' + p.summary + "</span></span>" +
      "</a>"
    );
  }

  function storyCardHTML(id) {
    var s = D.stories[id];
    if (!s) return "";
    return (
      '<a class="h-story-card" href="/history/stories/' + id + '/">' +
      '<span class="h-story-card-visual" aria-hidden="true">' + docFrameSVG() + "</span>" +
      '<span class="h-story-card-body">' +
      '<span class="h-story-card-eyebrow">' + s.dateRange + "</span>" +
      '<span class="h-story-card-title">' + s.title + "</span>" +
      '<span class="h-story-card-meta">' + s.location + "</span>" +
      '<span class="h-story-card-teaser">' + s.teaser + "</span>" +
      "</span></a>"
    );
  }

  function placeCardHTML(id) {
    var p = D.places[id];
    if (!p) return "";
    return (
      '<a class="h-entity-card" href="/history/places/' + id + '/">' +
      '<span class="h-entity-portrait" aria-hidden="true">' + placePinSVGSmall() + "</span>" +
      '<span class="h-entity-text"><span class="h-entity-name">' + p.name + "</span>" +
      '<span class="h-entity-sub">' + p.region + "</span></span>" +
      "</a>"
    );
  }

  function renderMount(el) {
    var kind = el.getAttribute("data-related");
    var id = el.getAttribute("data-id");
    var html = "";
    if (kind === "stories-for-person" && D.people[id]) {
      html = D.people[id].stories.map(storyCardHTML).join("");
    } else if (kind === "stories-for-place" && D.places[id]) {
      html = D.places[id].stories.map(storyCardHTML).join("");
    } else if (kind === "people-for-story" && D.stories[id]) {
      html = D.stories[id].people.map(personCardHTML).join("");
    } else if (kind === "places-for-story" && D.stories[id]) {
      html = D.stories[id].places.map(placeCardHTML).join("");
    } else if (kind === "people-for-place" && D.places[id]) {
      html = D.places[id].people.map(personCardHTML).join("");
    } else if (kind === "all-stories") {
      html = Object.keys(D.stories).map(storyCardHTML).join("");
    } else if (kind === "all-people") {
      html = Object.keys(D.people).map(function (pid) { return personProfileCardHTML(pid); }).join("");
    } else if (kind === "all-places") {
      html = Object.keys(D.places).map(placeCardHTML).join("");
    }
    if (html) {
      el.innerHTML = html;
    } else if (el.hasAttribute("data-empty-text")) {
      el.innerHTML = '<p class="h-empty-note">' + el.getAttribute("data-empty-text") + "</p>";
    }
  }

  document.querySelectorAll("[data-related]").forEach(renderMount);

  /* ---------- Small reusable SVGs (document frame / place pin) ---------- */
  function docFrameSVG() {
    return (
      '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="presentation">' +
      '<rect width="320" height="180" fill="#1b1712"/>' +
      '<rect x="24" y="24" width="120" height="132" fill="none" stroke="#a9812f" stroke-width="1.5" opacity="0.55"/>' +
      '<line x1="40" y1="52" x2="128" y2="52" stroke="#d8b466" stroke-width="1.5" opacity="0.7"/>' +
      '<line x1="40" y1="68" x2="128" y2="68" stroke="#8c8272" stroke-width="1" opacity="0.55"/>' +
      '<line x1="40" y1="82" x2="112" y2="82" stroke="#8c8272" stroke-width="1" opacity="0.55"/>' +
      '<line x1="40" y1="96" x2="120" y2="96" stroke="#8c8272" stroke-width="1" opacity="0.55"/>' +
      '<circle cx="230" cy="90" r="46" fill="none" stroke="#a9812f" stroke-width="1.5" opacity="0.5"/>' +
      '<path d="M230 66v48M206 90h48" stroke="#d8b466" stroke-width="1.5" opacity="0.6"/>' +
      "</svg>"
    );
  }

  function placePinSVGSmall() {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M12 2C8 2 5 5 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.5"/></svg>';
  }

  /* ---------- Source drawer ---------- */
  var scrim, drawer, lastFocused;

  function ensureDrawer() {
    if (drawer) return;
    scrim = document.createElement("div");
    scrim.className = "h-drawer-scrim";
    drawer = document.createElement("div");
    drawer.className = "h-drawer";
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    drawer.setAttribute("aria-label", "Sources");
    drawer.innerHTML =
      '<div class="h-drawer-head"><h3>Sources</h3><button type="button" class="h-drawer-close" aria-label="Close sources">&times;</button></div>' +
      '<div class="h-drawer-body"></div>';
    document.body.appendChild(scrim);
    document.body.appendChild(drawer);
    scrim.addEventListener("click", closeDrawer);
    drawer.querySelector(".h-drawer-close").addEventListener("click", closeDrawer);
  }

  function openDrawer(sourceIds, triggerEl) {
    ensureDrawer();
    lastFocused = triggerEl || document.activeElement;
    var body = drawer.querySelector(".h-drawer-body");
    body.innerHTML = sourceIds
      .map(function (id) {
        var s = D.sources[id];
        if (!s) return "";
        return (
          '<div class="h-source-item">' +
          '<p class="h-source-item-title">' + s.title + "</p>" +
          '<p class="h-source-item-note">' + s.note + "</p>" +
          statusBadgeHTML(s.status) +
          "</div>"
        );
      })
      .join("") || '<p class="h-source-item-note">No sources on file yet for this item.</p>';
    scrim.classList.add("open");
    drawer.classList.add("open");
    document.body.classList.add("h-lock");
    drawer.querySelector(".h-drawer-close").focus();
    document.addEventListener("keydown", onDrawerKeydown);
  }

  function closeDrawer() {
    if (!drawer) return;
    scrim.classList.remove("open");
    drawer.classList.remove("open");
    document.body.classList.remove("h-lock");
    document.removeEventListener("keydown", onDrawerKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function onDrawerKeydown(e) {
    if (e.key === "Escape") closeDrawer();
  }

  document.querySelectorAll("[data-sources]").forEach(function (btn) {
    var ids = btn.getAttribute("data-sources").split(",").map(function (s) { return s.trim(); });
    btn.addEventListener("click", function () { openDrawer(ids, btn); });
  });

  /* ---------- Document viewer ---------- */
  var viewerEl, viewerLastFocused;

  function ensureViewer() {
    if (viewerEl) return;
    viewerEl = document.createElement("div");
    viewerEl.className = "h-viewer";
    viewerEl.setAttribute("role", "dialog");
    viewerEl.setAttribute("aria-modal", "true");
    viewerEl.innerHTML =
      '<div class="h-viewer-bar"><h3></h3><button type="button" class="h-viewer-close" aria-label="Close record">&times;</button></div>' +
      '<div class="h-viewer-body"><div class="h-viewer-inner"></div></div>';
    document.body.appendChild(viewerEl);
    viewerEl.querySelector(".h-viewer-close").addEventListener("click", closeViewer);
    viewerEl.addEventListener("keydown", function (e) { if (e.key === "Escape") closeViewer(); });
  }

  function openViewer(recordId, triggerEl) {
    var rec = D.archive[recordId];
    if (!rec) return;
    ensureViewer();
    viewerLastFocused = triggerEl || document.activeElement;
    viewerEl.querySelector(".h-viewer-bar h3").textContent = rec.title;

    var peopleHTML = rec.people.map(function (pid) {
      var p = D.people[pid];
      return p ? '<a href="/history/people/' + pid + '/" class="h-link" style="display:inline-block;margin-right:1rem;">' + p.name + "</a>" : "";
    }).join("");

    var sourceIds = D.eventSources[recordId] || [];
    var sourcesHTML = sourceIds.map(function (id) {
      var s = D.sources[id];
      return s ? '<p style="margin:0 0 0.6rem;">' + s.title + "</p>" : "";
    }).join("") || "<p>Source citation still being completed.</p>";

    viewerEl.querySelector(".h-viewer-inner").innerHTML =
      '<div class="h-viewer-noimage">' +
      '<svg viewBox="0 0 40 40" fill="none"><rect x="5" y="4" width="30" height="32" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M11 13h18M11 20h18M11 27h11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
      "<p>No digital scan on file yet &mdash; the details below are drawn from family research notes.</p>" +
      "</div>" +
      '<div class="h-viewer-tabs" role="tablist">' +
      '<button type="button" class="h-viewer-tab" role="tab" aria-selected="true" data-tab="transcript">Transcription</button>' +
      '<button type="button" class="h-viewer-tab" role="tab" aria-selected="false" data-tab="sources">Sources</button>' +
      "</div>" +
      '<div class="h-viewer-panel active" data-panel="transcript">' +
      "<h4>What this record shows</h4><p>" + rec.transcription + "</p>" +
      "<h4>Associated people</h4><p>" + (peopleHTML || "None on file.") + "</p>" +
      "</div>" +
      '<div class="h-viewer-panel" data-panel="sources">' +
      "<h4>Sources</h4>" + sourcesHTML +
      "</div>";

    viewerEl.querySelectorAll(".h-viewer-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        viewerEl.querySelectorAll(".h-viewer-tab").forEach(function (t) { t.setAttribute("aria-selected", "false"); });
        viewerEl.querySelectorAll(".h-viewer-panel").forEach(function (p) { p.classList.remove("active"); });
        tab.setAttribute("aria-selected", "true");
        viewerEl.querySelector('.h-viewer-panel[data-panel="' + tab.getAttribute("data-tab") + '"]').classList.add("active");
      });
    });

    viewerEl.classList.add("open");
    document.body.classList.add("h-lock");
    viewerEl.querySelector(".h-viewer-close").focus();
  }

  function closeViewer() {
    if (!viewerEl) return;
    viewerEl.classList.remove("open");
    document.body.classList.remove("h-lock");
    if (viewerLastFocused && typeof viewerLastFocused.focus === "function") viewerLastFocused.focus();
  }

  document.querySelectorAll("[data-viewer]").forEach(function (btn) {
    btn.addEventListener("click", function () { openViewer(btn.getAttribute("data-viewer"), btn); });
  });

  window.HistoryUI = { statusBadgeHTML: statusBadgeHTML, docFrameSVG: docFrameSVG, openDrawer: openDrawer, openViewer: openViewer };
})();
