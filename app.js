const STORAGE_KEY = "market-on-the-hill-menu-v1";

const state = {
  data: loadData(),
  rotationTimer: null,
  sectionIndex: 0,
  pageIndex: 0,
  sections: []
};

const el = {
  settingsHotspot: document.getElementById("settingsHotspot"),
  settingsModal: document.getElementById("settingsModal"),
  closeSettings: document.getElementById("closeSettings"),
  settingsTabs: document.getElementById("settingsTabs"),
  saveGeneral: document.getElementById("saveGeneral"),
  resetDefaults: document.getElementById("resetDefaults"),
  confirmModal: document.getElementById("confirmModal"),
  cancelReset: document.getElementById("cancelReset"),
  confirmReset: document.getElementById("confirmReset"),
  eyebrowInput: document.getElementById("eyebrowInput"),
  brandTitleInput: document.getElementById("brandTitleInput"),
  brandTaglineInput: document.getElementById("brandTaglineInput"),
  rotationSpeedInput: document.getElementById("rotationSpeedInput"),
  itemsPerPageInput: document.getElementById("itemsPerPageInput"),
  showSandwichesToggle: document.getElementById("showSandwichesToggle"),
  showDrinksToggle: document.getElementById("showDrinksToggle"),
  showSoupsToggle: document.getElementById("showSoupsToggle"),
  showSidesToggle: document.getElementById("showSidesToggle"),
  eyebrowText: document.getElementById("eyebrowText"),
  brandTitle: document.getElementById("brandTitle"),
  brandTagline: document.getElementById("brandTagline"),
  sectionKicker: document.getElementById("sectionKicker"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionSubtitle: document.getElementById("sectionSubtitle"),
  menuList: document.getElementById("menuList"),
  sandwichesList: document.getElementById("sandwichesList"),
  drinksList: document.getElementById("drinksList"),
  soupsList: document.getElementById("soupsList"),
  sidesList: document.getElementById("sidesList"),
  addSandwichBtn: document.getElementById("addSandwichBtn"),
  addDrinkBtn: document.getElementById("addDrinkBtn"),
  addSoupBtn: document.getElementById("addSoupBtn"),
  addSideBtn: document.getElementById("addSideBtn"),
  editorModal: document.getElementById("editorModal"),
  closeEditor: document.getElementById("closeEditor"),
  editorForm: document.getElementById("editorForm"),
  editorType: document.getElementById("editorType"),
  editorId: document.getElementById("editorId"),
  editorName: document.getElementById("editorName"),
  editorDescription: document.getElementById("editorDescription"),
  editorStyle: document.getElementById("editorStyle"),
  editorOptions: document.getElementById("editorOptions"),
  editorAvailable: document.getElementById("editorAvailable"),
  deleteItemBtn: document.getElementById("deleteItemBtn"),
  editorTitle: document.getElementById("editorTitle"),
  editorSubtitle: document.getElementById("editorSubtitle"),
  editorDescriptionWrap: document.getElementById("editorDescriptionWrap"),
  editorStyleWrap: document.getElementById("editorStyleWrap"),
  editorOptionsWrap: document.getElementById("editorOptionsWrap")
};

init();

function init() {
  bindEvents();
  renderAll();
  startRotation();
}

function bindEvents() {
  el.settingsHotspot.addEventListener("click", openSettings);

  el.closeSettings.addEventListener("click", closeSettings);
  el.closeEditor.addEventListener("click", closeEditor);
  el.saveGeneral.addEventListener("click", saveGeneralSettings);
  el.resetDefaults.addEventListener("click", () => el.confirmModal.classList.remove("hidden"));
  el.cancelReset.addEventListener("click", () => el.confirmModal.classList.add("hidden"));
  el.confirmReset.addEventListener("click", resetToDefaults);
  el.editorForm.addEventListener("submit", saveEditorForm);
  el.deleteItemBtn.addEventListener("click", deleteCurrentItem);

  el.settingsTabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab-btn");
    if (!tab) return;
    openTab(tab.dataset.tab);
  });

  [
    [el.addSandwichBtn, "sandwiches"],
    [el.addDrinkBtn, "drinks"],
    [el.addSoupBtn, "soups"],
    [el.addSideBtn, "sides"]
  ].forEach(([button, type]) => {
    button.addEventListener("click", () => openEditor(type));
  });

  [
    [el.sandwichesList, "sandwiches"],
    [el.drinksList, "drinks"],
    [el.soupsList, "soups"],
    [el.sidesList, "sides"]
  ].forEach(([mount, type]) => {
    mount.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const id = button.dataset.id;
      if (button.dataset.action === "toggle") toggleAvailability(type, id);
      if (button.dataset.action === "edit") openEditor(type, id);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeEditor();
      closeSettings();
      el.confirmModal.classList.add("hidden");
    }
  });
}

function openSettings() {
  populateGeneralForm();
  renderAdminLists();
  el.settingsModal.classList.remove("hidden");
}

function closeSettings() {
  el.settingsModal.classList.add("hidden");
}

function openTab(name) {
  document.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === name));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === name));
}

function populateGeneralForm() {
  const g = state.data.general;
  el.eyebrowInput.value = g.eyebrow || "";
  el.brandTitleInput.value = g.brandTitle || "";
  el.brandTaglineInput.value = g.brandTagline || "";
  el.rotationSpeedInput.value = g.rotationSpeedSeconds || 12;
  el.itemsPerPageInput.value = g.itemsPerPage || 4;
  el.showSandwichesToggle.checked = !!g.showPages.sandwiches;
  el.showDrinksToggle.checked = !!g.showPages.drinks;
  el.showSoupsToggle.checked = !!g.showPages.soups;
  el.showSidesToggle.checked = !!g.showPages.sides;
}

function saveGeneralSettings() {
  state.data.general.eyebrow = el.eyebrowInput.value.trim() || "Lincoln, Illinois";
  state.data.general.brandTitle = el.brandTitleInput.value.trim() || "Market on the Hill";
  state.data.general.brandTagline = el.brandTaglineInput.value.trim() || "Sandwiches, soups, drinks, and deli favorites";
  state.data.general.rotationSpeedSeconds = clampNumber(el.rotationSpeedInput.value, 5, 120, 12);
  state.data.general.itemsPerPage = clampNumber(el.itemsPerPageInput.value, 3, 18, 4);
  state.data.general.showPages = {
    sandwiches: el.showSandwichesToggle.checked,
    drinks: el.showDrinksToggle.checked,
    soups: el.showSoupsToggle.checked,
    sides: el.showSidesToggle.checked
  };
  saveData();
  state.sectionIndex = 0;
  state.pageIndex = 0;
  renderAll();
  startRotation();
}

function renderAll() {
  renderDisplay();
  renderAdminLists();
}

function getDisplaySections() {
  const show = state.data.general.showPages || {};
  const itemsPerPage = state.data.general.itemsPerPage || 8;
  const sections = [];

  if (show.sandwiches) pushSection(sections, "sandwiches", "Sandwiches", "— SANDWICHES —", "Fresh deli sandwiches and house favorites.", state.data.sandwiches, itemsPerPage);
  if (show.drinks) pushSection(sections, "drinks", "Drinks", "— DRINKS —", "Cold and hot beverages for the deli counter.", state.data.drinks, itemsPerPage);
  if (show.soups) pushSection(sections, "soups", "Soups", "— SOUPS —", "Hot soup options rotating with the rest of the menu.", state.data.soups, itemsPerPage);
  if (show.sides) pushSection(sections, "sides", "Sides", "— SIDES & EXTRAS —", "Quick add-ons, packaged sides, and bakery extras.", state.data.sides, itemsPerPage);

  return sections;
}

function pushSection(sections, key, title, kicker, subtitle, items, itemsPerPage) {
  const availableItems = items.filter((item) => item.available);
  if (!availableItems.length) return;
  sections.push({ key, title, kicker, subtitle, pages: chunk(availableItems, itemsPerPage) });
}

function renderDisplay() {
  state.sections = getDisplaySections();
  const g = state.data.general;
  el.eyebrowText.textContent = g.eyebrow || "Lincoln, Illinois";
  el.brandTitle.textContent = g.brandTitle || "Market on the Hill";
  el.brandTagline.textContent = g.brandTagline || "";

  if (!state.sections.length) {
    el.sectionKicker.textContent = "— DISPLAY —";
    el.sectionTitle.textContent = "Nothing to display";
    el.sectionSubtitle.textContent = "Enable a section and mark items available in settings.";
    el.menuList.className = "menu-list layout-cards";
    el.menuList.innerHTML = `<article class="menu-item empty-card"><div>Use the small settings button in the top-right corner to open admin controls.</div></article>`;
    return;
  }

  if (state.sectionIndex >= state.sections.length) state.sectionIndex = 0;
  const section = state.sections[state.sectionIndex];
  if (state.pageIndex >= section.pages.length) state.pageIndex = 0;
  const page = section.pages[state.pageIndex];

  el.sectionKicker.textContent = section.kicker;
  el.sectionTitle.textContent = section.title;
  el.sectionSubtitle.textContent = section.subtitle;
  el.menuList.className = "menu-list layout-cards";
  el.menuList.innerHTML = page.map(renderMenuCard).join("");
}

function renderMenuCard(item) {
  const meta = buildMenuMeta(item);
  return `
    <article class="menu-item">
      <div>
        <h3 class="menu-item-title">${escapeHtml(item.name)}</h3>
        <div class="menu-item-copy">${escapeHtml(item.description || "")}</div>
      </div>
      ${meta ? `<div class="menu-item-meta">${meta}</div>` : ""}
    </article>`;
}

function buildMenuMeta(item) {
  const parts = [];
  if (item.style) parts.push(`<strong>${escapeHtml(item.style)}</strong>`);
  if (item.options) parts.push(escapeHtml(item.options));
  return parts.join(" • ");
}

function startRotation() {
  stopRotation();
  if (state.sections.length <= 1 && (state.sections[0]?.pages.length || 0) <= 1) return;
  const ms = (state.data.general.rotationSpeedSeconds || 12) * 1000;
  state.rotationTimer = setInterval(() => rotateNext(), ms);
}

function rotateNext() {
  state.sections = getDisplaySections();
  if (!state.sections.length) return;

  const currentSection = state.sections[state.sectionIndex] || state.sections[0];
  const pageCount = currentSection.pages.length;

  if (state.pageIndex + 1 < pageCount) {
    state.pageIndex += 1;
  } else {
    state.pageIndex = 0;
    state.sectionIndex = (state.sectionIndex + 1) % state.sections.length;
  }
  renderDisplay();
}

function stopRotation() {
  if (state.rotationTimer) clearInterval(state.rotationTimer);
  state.rotationTimer = null;
}

function renderAdminLists() {
  renderAdminList("sandwiches", el.sandwichesList, state.data.sandwiches);
  renderAdminList("drinks", el.drinksList, state.data.drinks);
  renderAdminList("soups", el.soupsList, state.data.soups);
  renderAdminList("sides", el.sidesList, state.data.sides);
}

function renderAdminList(type, mount, items) {
  mount.innerHTML = items.map((item) => `
    <article class="admin-row">
      <div class="admin-row-head">
        <div>
          <h4>${escapeHtml(item.name)}</h4>
          <p>${escapeHtml(item.description || "")}</p>
          <p class="admin-meta">${escapeHtml([item.style, item.options].filter(Boolean).join(" • "))}</p>
        </div>
        <span class="badge ${item.available ? "available" : "unavailable"}">${item.available ? "Available" : "Unavailable"}</span>
      </div>
      <div class="action-row">
        <button class="btn btn-ghost" type="button" data-action="toggle" data-id="${item.id}">${item.available ? "Mark unavailable" : "Mark available"}</button>
        <button class="btn btn-primary" type="button" data-action="edit" data-id="${item.id}">Edit</button>
      </div>
    </article>
  `).join("") || `<article class="admin-row"><p>No items yet.</p></article>`;
}

function toggleAvailability(type, id) {
  const item = state.data[type].find((entry) => entry.id === id);
  if (!item) return;
  item.available = !item.available;
  saveData();
  state.pageIndex = 0;
  renderAll();
  startRotation();
}

function openEditor(type, id = "") {
  const isNew = !id;
  const source = state.data[type];
  const item = isNew
    ? { id: "", name: "", description: "", style: "", options: "", available: true }
    : source.find((entry) => entry.id === id);

  el.editorType.value = type;
  el.editorId.value = item?.id || "";
  el.editorName.value = item?.name || "";
  el.editorDescription.value = item?.description || "";
  el.editorStyle.value = item?.style || "";
  el.editorOptions.value = item?.options || "";
  el.editorAvailable.checked = item?.available ?? true;
  el.editorTitle.textContent = isNew ? "Add item" : "Edit item";
  el.editorSubtitle.textContent = `${labelForType(type)} management`;
  el.editorModal.classList.remove("hidden");
}

function closeEditor() {
  el.editorModal.classList.add("hidden");
}

function saveEditorForm(event) {
  event.preventDefault();
  const type = el.editorType.value;
  const id = el.editorId.value;
  const payload = {
    id: id || uid(type),
    name: el.editorName.value.trim(),
    description: el.editorDescription.value.trim(),
    style: el.editorStyle.value.trim(),
    options: el.editorOptions.value.trim(),
    available: el.editorAvailable.checked
  };

  if (!payload.name) return;

  const list = state.data[type];
  const index = list.findIndex((item) => item.id === payload.id);
  if (index >= 0) {
    list[index] = payload;
  } else {
    list.push(payload);
  }

  saveData();
  closeEditor();
  state.pageIndex = 0;
  renderAll();
  startRotation();
}

function deleteCurrentItem() {
  const type = el.editorType.value;
  const id = el.editorId.value;
  if (!type || !id) return;
  state.data[type] = state.data[type].filter((item) => item.id !== id);
  saveData();
  closeEditor();
  state.pageIndex = 0;
  renderAll();
  startRotation();
}

function resetToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  state.data = clone(window.DEFAULT_MENU_DATA);
  state.sectionIndex = 0;
  state.pageIndex = 0;
  el.confirmModal.classList.add("hidden");
  closeEditor();
  closeSettings();
  renderAll();
  startRotation();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(window.DEFAULT_MENU_DATA);
    return mergeDefaults(JSON.parse(raw), window.DEFAULT_MENU_DATA);
  } catch {
    return clone(window.DEFAULT_MENU_DATA);
  }
}

function mergeDefaults(data, defaults) {
  return {
    general: { ...defaults.general, ...(data.general || {}), showPages: { ...defaults.general.showPages, ...(data.general?.showPages || {}) } },
    sandwiches: Array.isArray(data.sandwiches) ? data.sandwiches : clone(defaults.sandwiches),
    drinks: Array.isArray(data.drinks) ? data.drinks : clone(defaults.drinks),
    soups: Array.isArray(data.soups) ? data.soups : clone(defaults.soups),
    sides: Array.isArray(data.sides) ? data.sides : clone(defaults.sides)
  };
}

function labelForType(type) {
  return ({ sandwiches: "Sandwiches", drinks: "Drinks", soups: "Soups", sides: "Sides" })[type] || type;
}

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function clampNumber(value, min, max, fallback) {
  const num = Number(value);
  if (Number.isNaN(num)) return fallback;
  return Math.min(max, Math.max(min, num));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
