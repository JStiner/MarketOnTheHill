
const STORAGE_KEY = "moth-display-settings-v1";

const SECTION_CONFIG = [
  {
    key: "drinks",
    columnId: "drinksColumn",
    kicker: "Drinks",
    title: "Grab & Go Drinks",
    subtitle: "Cold and hot drink picks for a quick stop.",
    accent: "#bcc1ca",
    renderCard: (item) => `
      <article class="menu-card" style="--accent:#bcc1ca">
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description || "")}</p>
        <div class="meta">Base: ${escapeHtml(item.base || "House")}${item.syrups?.length ? `<br>Options: ${escapeHtml(item.syrups.join(", "))}` : ""}</div>
      </article>`
  },
  {
    key: "sandwiches",
    columnId: "sandwichesColumn",
    kicker: "Sandwiches",
    title: "Deli Sandwiches",
    subtitle: "Classic deli-style sandwiches built for lunch and grab-and-go orders.",
    accent: "#c79a52",
    renderCard: (item) => `
      <article class="menu-card" style="--accent:#c79a52">
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description || "")}</p>
        <div class="meta">Style: ${escapeHtml(item.category || "House Favorite")}${item.extras?.length ? `<br>Bread / options: ${escapeHtml(item.extras.join(", "))}` : ""}</div>
      </article>`
  },
  {
    key: "other",
    columnId: "otherColumn",
    kicker: "Sides & Extras",
    title: "Deli Sides",
    subtitle: "Simple sides, bakery picks, and cooler-case add-ons.",
    accent: "#39328e",
    renderCard: (item) => `
      <article class="menu-card" style="--accent:#39328e">
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description || "")}</p>
      </article>`
  }
];

const defaultSettings = {
  rotationSpeedSeconds: window.DEFAULT_MENU_DATA?.general?.rotationSpeedSeconds || 12,
  itemsPerPage: window.DEFAULT_MENU_DATA?.general?.itemsPerPage || 8
};

let settings = loadSettings();
let state = {};
let rotationHandle = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function loadSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!raw) return { ...defaultSettings };
    return {
      rotationSpeedSeconds: clampNumber(raw.rotationSpeedSeconds, 3, 60, defaultSettings.rotationSpeedSeconds),
      itemsPerPage: clampNumber(raw.itemsPerPage, 1, 12, defaultSettings.itemsPerPage)
    };
  } catch {
    return { ...defaultSettings };
  }
}

function saveSettings(nextSettings) {
  settings = nextSettings;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function clampNumber(value, min, max, fallback) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.min(max, Math.max(min, Math.round(num)));
}

function paginate(items, perPage) {
  const active = items.filter(item => item.available !== false);
  if (!active.length) return [[]];
  const pages = [];
  for (let i = 0; i < active.length; i += perPage) pages.push(active.slice(i, i + perPage));
  return pages;
}

function buildState() {
  state = {};
  for (const section of SECTION_CONFIG) {
    const items = window.DEFAULT_MENU_DATA?.[section.key] || [];
    state[section.key] = {
      pages: paginate(items, settings.itemsPerPage),
      pageIndex: 0
    };
  }
}

function renderBrand() {
  const general = window.DEFAULT_MENU_DATA?.general || {};
  document.getElementById("eyebrow").textContent = general.eyebrow || "";
  document.getElementById("brandTitle").textContent = general.brandTitle || "Market on the Hill";
  document.getElementById("brandTagline").textContent = general.brandTagline || "";
}

function renderSection(section) {
  const column = document.getElementById(section.columnId);
  const { pages, pageIndex } = state[section.key];
  const currentPage = pages[pageIndex] || [];
  const totalPages = pages.length;

  column.innerHTML = `
    <div class="panel">
      <header class="panel-header">
        <span class="panel-kicker">${escapeHtml(section.kicker)}</span>
        <h2 class="panel-title">${escapeHtml(section.title)}</h2>
        <p class="panel-subtitle">${escapeHtml(section.subtitle)}</p>
      </header>
      <div class="cards">
        ${currentPage.map(section.renderCard).join("")}
      </div>
      <footer class="panel-footer">
        <span>${totalPages > 1 ? `Page ${pageIndex + 1} of ${totalPages}` : ""}</span>
        <span class="page-dots">
          ${pages.map((_, idx) => `<span class="page-dot${idx === pageIndex ? " is-active" : ""}"></span>`).join("")}
        </span>
      </footer>
    </div>`;
}

function renderAll() {
  renderBrand();
  SECTION_CONFIG.forEach(renderSection);
}

function advancePages() {
  SECTION_CONFIG.forEach(section => {
    const sectionState = state[section.key];
    if (sectionState.pages.length > 1) {
      sectionState.pageIndex = (sectionState.pageIndex + 1) % sectionState.pages.length;
    }
  });
  renderAll();
}

function restartRotation() {
  if (rotationHandle) clearInterval(rotationHandle);
  rotationHandle = setInterval(advancePages, settings.rotationSpeedSeconds * 1000);
}

function wireSettings() {
  const toggle = document.getElementById("settingsToggle");
  const panel = document.getElementById("settingsPanel");
  const rotationInput = document.getElementById("rotationSpeedInput");
  const itemsInput = document.getElementById("itemsPerPageInput");
  const saveBtn = document.getElementById("saveSettingsBtn");
  const resetBtn = document.getElementById("resetSettingsBtn");

  function syncInputs() {
    rotationInput.value = settings.rotationSpeedSeconds;
    itemsInput.value = settings.itemsPerPage;
  }

  toggle.addEventListener("click", () => {
    const isHidden = panel.hasAttribute("hidden");
    if (isHidden) {
      panel.removeAttribute("hidden");
      toggle.setAttribute("aria-expanded", "true");
      syncInputs();
    } else {
      panel.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  saveBtn.addEventListener("click", () => {
    saveSettings({
      rotationSpeedSeconds: clampNumber(rotationInput.value, 3, 60, defaultSettings.rotationSpeedSeconds),
      itemsPerPage: clampNumber(itemsInput.value, 1, 12, defaultSettings.itemsPerPage)
    });
    buildState();
    renderAll();
    restartRotation();
    panel.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
  });

  resetBtn.addEventListener("click", () => {
    saveSettings({ ...defaultSettings });
    syncInputs();
    buildState();
    renderAll();
    restartRotation();
  });

  syncInputs();
}

buildState();
renderAll();
restartRotation();
wireSettings();
