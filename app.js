const STORAGE_KEY = "market-on-the-hill-menu-demo-v2";

const state = {
  data: loadData(),
  rotationTimer: null,
  hotspotTimer: null,
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
  showDrinksToggle: document.getElementById("showDrinksToggle"),
  showSandwichesToggle: document.getElementById("showSandwichesToggle"),
  showOtherToggle: document.getElementById("showOtherToggle"),
  eyebrowText: document.getElementById("eyebrowText"),
  brandTitle: document.getElementById("brandTitle"),
  brandTagline: document.getElementById("brandTagline"),
  sectionKicker: document.getElementById("sectionKicker"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionSubtitle: document.getElementById("sectionSubtitle"),
  displayColumns: document.getElementById("displayColumns"),
  sandwichesList: document.getElementById("sandwichesList"),
  drinksList: document.getElementById("drinksList"),
  syrupsList: document.getElementById("syrupsList"),
  otherList: document.getElementById("otherList"),
  addSandwichBtn: document.getElementById("addSandwichBtn"),
  addDrinkBtn: document.getElementById("addDrinkBtn"),
  addSyrupBtn: document.getElementById("addSyrupBtn"),
  addOtherBtn: document.getElementById("addOtherBtn"),
  editorModal: document.getElementById("editorModal"),
  closeEditor: document.getElementById("closeEditor"),
  editorForm: document.getElementById("editorForm"),
  editorType: document.getElementById("editorType"),
  editorId: document.getElementById("editorId"),
  editorName: document.getElementById("editorName"),
  editorDescription: document.getElementById("editorDescription"),
  editorBase: document.getElementById("editorBase"),
  editorSyrups: document.getElementById("editorSyrups"),
  editorAvailable: document.getElementById("editorAvailable"),
  deleteItemBtn: document.getElementById("deleteItemBtn"),
  editorTitle: document.getElementById("editorTitle"),
  editorSubtitle: document.getElementById("editorSubtitle"),
  editorBaseWrap: document.getElementById("editorBaseWrap"),
  editorSyrupsWrap: document.getElementById("editorSyrupsWrap")
};

init();

function init() {
  bindEvents();
  renderAll();
  startRotation();
}

function bindEvents() {
  el.settingsHotspot.addEventListener("pointerdown", beginHotspotHold);
  el.settingsHotspot.addEventListener("pointerup", cancelHotspotHold);
  el.settingsHotspot.addEventListener("pointerleave", cancelHotspotHold);

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
    [el.addSyrupBtn, "syrups"],
    [el.addOtherBtn, "other"]
  ].forEach(([button, type]) => {
    button.addEventListener("click", () => openEditor(type));
  });

  [
    [el.sandwichesList, "sandwiches"],
    [el.drinksList, "drinks"],
    [el.syrupsList, "syrups"],
    [el.otherList, "other"]
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

function beginHotspotHold() {
  cancelHotspotHold();
  state.hotspotTimer = setTimeout(() => openSettings(), 1800);
}

function cancelHotspotHold() {
  if (state.hotspotTimer) clearTimeout(state.hotspotTimer);
  state.hotspotTimer = null;
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
  el.itemsPerPageInput.value = g.itemsPerPage || 8;
  el.showDrinksToggle.checked = !!g.showPages.drinks;
  el.showSandwichesToggle.checked = !!g.showPages.sandwiches;
  el.showOtherToggle.checked = !!g.showPages.other;
}

function saveGeneralSettings() {
  state.data.general.eyebrow = el.eyebrowInput.value.trim() || "Lincoln, Illinois";
  state.data.general.brandTitle = el.brandTitleInput.value.trim() || "Market on the Hill";
  state.data.general.brandTagline = el.brandTaglineInput.value.trim() || "Community-owned grocery • deli sandwiches • quick grab-and-go favorites";
  state.data.general.rotationSpeedSeconds = clampNumber(el.rotationSpeedInput.value, 5, 120, 12);
  state.data.general.itemsPerPage = clampNumber(el.itemsPerPageInput.value, 3, 18, 8);
  state.data.general.showPages = {
    drinks: el.showDrinksToggle.checked,
    sandwiches: el.showSandwichesToggle.checked,
    other: el.showOtherToggle.checked
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

  if (show.drinks) {
    const items = state.data.drinks.filter((item) => item.available);
    if (items.length) {
      sections.push({
        key: "drinks",
        title: "Drinks",
        kicker: "— DELI DRINKS —",
        subtitle: "Quick, cold, and easy drink pairings for the deli case.",
        pages: chunk(items, itemsPerPage)
      });
    }
  }

  if (show.sandwiches) {
    const items = state.data.sandwiches.filter((item) => item.available);
    if (items.length) {
      sections.push({
        key: "sandwiches",
        title: "Deli Sandwiches",
        kicker: "— SANDWICHES —",
        subtitle: "Classic deli-style sandwiches built for lunch and grab-and-go orders.",
        pages: chunk(items, itemsPerPage)
      });
    }
  }

  if (show.other) {
    const items = state.data.other.filter((item) => item.available);
    if (items.length) {
      sections.push({
        key: "other",
        title: "Deli Sides",
        kicker: "— SIDES & EXTRAS —",
        subtitle: "Simple sides, bakery picks, and cooler-case add-ons.",
        pages: chunk(items, itemsPerPage)
      });
    }
  }

  return sections;
}

function renderDisplay() {
  const g = state.data.general;
  el.eyebrowText.textContent = g.eyebrow || "Lincoln, Illinois";
  el.brandTitle.textContent = g.brandTitle || "Market on the Hill";
  el.brandTagline.textContent = g.brandTagline || "";

  const columns = [];
  if (g.showPages?.sandwiches) {
    const items = state.data.sandwiches.filter((item) => item.available);
    if (items.length) {
      columns.push(renderSectionPanel("sandwiches", "Sandwiches", "Deli favorites made fresh", items));
    }
  }
  if (g.showPages?.drinks) {
    const items = state.data.drinks.filter((item) => item.available);
    if (items.length) {
      columns.push(renderSectionPanel("drinks", "Drinks", "Cold and quick pairings", items));
    }
  }
  if (g.showPages?.other) {
    const items = state.data.other.filter((item) => item.available);
    if (items.length) {
      columns.push(renderSectionPanel("other", "Sides & Extras", "Add-ons from the deli case", items));
    }
  }

  if (!columns.length) {
    el.displayColumns.innerHTML = `<section class="menu-panel"><div class="empty-card"><div>Use the hidden top-right corner press-and-hold to open settings.</div></div></section>`;
    return;
  }

  el.displayColumns.innerHTML = columns.join("");
}

function renderSectionPanel(type, title, subtitle, items) {
  const cards = items.map((item) => renderMenuCard(type, item)).join("");
  return `
    <section class="menu-panel menu-panel-${type}">
      <div class="panel-title-wrap">
        <div class="panel-kicker">Market on the Hill</div>
        <h2 class="panel-title">${escapeHtml(title)}</h2>
        <p class="panel-subtitle">${escapeHtml(subtitle)}</p>
      </div>
      <div class="menu-list menu-list-${type}">${cards}</div>
    </section>`;
}


function renderMenuCard(type, item) {
  const meta = buildMeta(type, item);
  return `
    <article class="menu-item ${type === "sandwiches" ? "menu-item-sandwich" : ""}">
      <div>
        <h3 class="menu-item-title">${escapeHtml(item.name)}</h3>
        <div class="menu-item-copy">${escapeHtml(item.description || "")}</div>
      </div>
      ${meta ? `<div class="menu-item-meta">${meta}</div>` : ""}
    </article>`;
}

function buildMeta(type, item) {
  const parts = [];
  if (type === "drinks") {
    if (item.base) parts.push(`Base: ${escapeHtml(item.base)}`);
    if (item.syrups?.length) parts.push(`Extras: ${escapeHtml(item.syrups.join(", "))}`);
  }
  if (type === "sandwiches") {
    if (item.category) parts.push(`Style: ${escapeHtml(item.category)}`);
    if (item.extras?.length) parts.push(`Bread / options: ${escapeHtml(item.extras.join(", "))}`);
  }
  return parts.join(" • ");
}

function startRotation() {
  stopRotation();
}

function rotateNext() {
  return;
}

function stopRotation() {
  if (state.rotationTimer) clearInterval(state.rotationTimer);
  state.rotationTimer = null;
}


function renderAdminLists() {
  renderAdminList("sandwiches", el.sandwichesList, state.data.sandwiches);
  renderAdminList("drinks", el.drinksList, state.data.drinks);
  renderAdminList("syrups", el.syrupsList, state.data.syrups);
  renderAdminList("other", el.otherList, state.data.other);
}

function renderAdminList(type, mount, items) {
  mount.innerHTML = items.map((item) => `
    <article class="admin-row">
      <div class="admin-row-head">
        <div>
          <h4>${escapeHtml(item.name)}</h4>
          <p>${escapeHtml(item.description || "")}</p>
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
    ? { id: "", name: "", description: "", base: "", syrups: [], category: "", extras: [], available: true }
    : source.find((entry) => entry.id === id);

  el.editorType.value = type;
  el.editorId.value = item?.id || "";
  el.editorName.value = item?.name || "";
  el.editorDescription.value = item?.description || "";
  el.editorBase.value = type === "sandwiches" ? (item?.category || "") : (item?.base || "");
  el.editorSyrups.value = type === "sandwiches" ? ((item?.extras || []).join(", ")) : ((item?.syrups || []).join(", "));
  el.editorAvailable.checked = item?.available ?? true;
  el.editorTitle.textContent = isNew ? "Add item" : "Edit item";
  el.editorSubtitle.textContent = `${labelForType(type)} management`;
  el.editorBaseWrap.classList.toggle("hidden", !(type === "drinks" || type === "sandwiches"));
  el.editorSyrupsWrap.classList.toggle("hidden", !(type === "drinks" || type === "sandwiches"));
  el.editorBaseWrap.querySelector("span").textContent = type === "sandwiches" ? "Category / style" : "Base / category";
  el.editorSyrupsWrap.querySelector("span").textContent = type === "sandwiches" ? "Bread / extras (comma separated)" : "Flavor notes / extras (comma separated)";
  el.deleteItemBtn.classList.toggle("hidden", isNew);
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
    available: el.editorAvailable.checked
  };

  if (!payload.name) return;

  if (type === "drinks") {
    payload.base = el.editorBase.value.trim();
    payload.syrups = el.editorSyrups.value.split(",").map((value) => value.trim()).filter(Boolean);
  }

  if (type === "sandwiches") {
    payload.category = el.editorBase.value.trim();
    payload.extras = el.editorSyrups.value.split(",").map((value) => value.trim()).filter(Boolean);
  }

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
  localStorage.removeItem("market-on-the-hill-menu-demo-v1");
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
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("market-on-the-hill-menu-demo-v1");
    if (!raw) return clone(window.DEFAULT_MENU_DATA);
    return mergeDefaults(JSON.parse(raw), window.DEFAULT_MENU_DATA);
  } catch {
    return clone(window.DEFAULT_MENU_DATA);
  }
}

function mergeDefaults(data, defaults) {
  return {
    general: {
      ...defaults.general,
      ...(data.general || {}),
      showPages: {
        ...defaults.general.showPages,
        drinks: data.general?.showPages?.drinks ?? defaults.general.showPages.drinks,
        sandwiches: data.general?.showPages?.sandwiches ?? data.general?.showPages?.iceCream ?? defaults.general.showPages.sandwiches,
        other: data.general?.showPages?.other ?? defaults.general.showPages.other
      }
    },
    drinks: Array.isArray(data.drinks) ? data.drinks : clone(defaults.drinks),
    sandwiches: Array.isArray(data.sandwiches)
      ? data.sandwiches
      : Array.isArray(data.iceCream)
        ? data.iceCream.map((item) => ({ ...item, category: item.category || "", extras: item.extras || [] }))
        : clone(defaults.sandwiches),
    syrups: Array.isArray(data.syrups) ? data.syrups : clone(defaults.syrups),
    other: Array.isArray(data.other) ? data.other : clone(defaults.other)
  };
}

function labelForType(type) {
  return ({ sandwiches: "Sandwiches", drinks: "Drinks", syrups: "Condiments", other: "Deli Sides" })[type] || type;
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
