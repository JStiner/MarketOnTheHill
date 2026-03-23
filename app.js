const STORAGE_KEY = "market-on-the-hill-menu-v2";
const SETTINGS_HOLD_MS = 700;
const SECTION_TYPES = ["sandwiches", "drinks", "coffee", "soups", "sides"];

const state = {
  data: loadData(),
  rotationTimer: null,
  rotationDeadline: null,
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
  autoRotateInput: document.getElementById("autoRotateInput"),
  fontScaleInput: document.getElementById("fontScaleInput"),
  headerHours: document.getElementById("headerHours"),
  navLeft: document.getElementById("navLeft"),
  navRight: document.getElementById("navRight"),

  showSandwichesToggle: document.getElementById("showSandwichesToggle"),
  showDrinksToggle: document.getElementById("showDrinksToggle"),
  showCoffeeToggle: document.getElementById("showCoffeeToggle"),
  showSoupsToggle: document.getElementById("showSoupsToggle"),
  showSidesToggle: document.getElementById("showSidesToggle"),

  sandwichesItemsPerPageInput: document.getElementById("sandwichesItemsPerPageInput"),
  drinksItemsPerPageInput: document.getElementById("drinksItemsPerPageInput"),
  coffeeItemsPerPageInput: document.getElementById("coffeeItemsPerPageInput"),
  soupsItemsPerPageInput: document.getElementById("soupsItemsPerPageInput"),
  sidesItemsPerPageInput: document.getElementById("sidesItemsPerPageInput"),

  sandwichesOrderInput: document.getElementById("sandwichesOrderInput"),
  drinksOrderInput: document.getElementById("drinksOrderInput"),
  coffeeOrderInput: document.getElementById("coffeeOrderInput"),
  soupsOrderInput: document.getElementById("soupsOrderInput"),
  sidesOrderInput: document.getElementById("sidesOrderInput"),

  sandwichesColumnsInput: document.getElementById("sandwichesColumnsInput"),
  drinksColumnsInput: document.getElementById("drinksColumnsInput"),
  coffeeColumnsInput: document.getElementById("coffeeColumnsInput"),
  soupsColumnsInput: document.getElementById("soupsColumnsInput"),
  sidesColumnsInput: document.getElementById("sidesColumnsInput"),

  sandwichesSecondsInput: document.getElementById("sandwichesSecondsInput"),
  drinksSecondsInput: document.getElementById("drinksSecondsInput"),
  coffeeSecondsInput: document.getElementById("coffeeSecondsInput"),
  soupsSecondsInput: document.getElementById("soupsSecondsInput"),
  sidesSecondsInput: document.getElementById("sidesSecondsInput"),

  hoursMondayEnabled: document.getElementById("hoursMondayEnabled"),
  hoursMondayOpen: document.getElementById("hoursMondayOpen"),
  hoursMondayClose: document.getElementById("hoursMondayClose"),
  hoursTuesdayEnabled: document.getElementById("hoursTuesdayEnabled"),
  hoursTuesdayOpen: document.getElementById("hoursTuesdayOpen"),
  hoursTuesdayClose: document.getElementById("hoursTuesdayClose"),
  hoursWednesdayEnabled: document.getElementById("hoursWednesdayEnabled"),
  hoursWednesdayOpen: document.getElementById("hoursWednesdayOpen"),
  hoursWednesdayClose: document.getElementById("hoursWednesdayClose"),
  hoursThursdayEnabled: document.getElementById("hoursThursdayEnabled"),
  hoursThursdayOpen: document.getElementById("hoursThursdayOpen"),
  hoursThursdayClose: document.getElementById("hoursThursdayClose"),
  hoursFridayEnabled: document.getElementById("hoursFridayEnabled"),
  hoursFridayOpen: document.getElementById("hoursFridayOpen"),
  hoursFridayClose: document.getElementById("hoursFridayClose"),
  hoursSaturdayEnabled: document.getElementById("hoursSaturdayEnabled"),
  hoursSaturdayOpen: document.getElementById("hoursSaturdayOpen"),
  hoursSaturdayClose: document.getElementById("hoursSaturdayClose"),
  hoursSundayEnabled: document.getElementById("hoursSundayEnabled"),
  hoursSundayOpen: document.getElementById("hoursSundayOpen"),
  hoursSundayClose: document.getElementById("hoursSundayClose"),

  eyebrowText: document.getElementById("eyebrowText"),
  brandTitle: document.getElementById("brandTitle"),
  brandTagline: document.getElementById("brandTagline"),
  sectionKicker: document.getElementById("sectionKicker"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionSubtitle: document.getElementById("sectionSubtitle"),
  menuList: document.getElementById("menuList"),

  sandwichesList: document.getElementById("sandwichesList"),
  drinksList: document.getElementById("drinksList"),
  coffeeList: document.getElementById("coffeeList"),
  soupsList: document.getElementById("soupsList"),
  sidesList: document.getElementById("sidesList"),

  addSandwichBtn: document.getElementById("addSandwichBtn"),
  addDrinkBtn: document.getElementById("addDrinkBtn"),
  addCoffeeBtn: document.getElementById("addCoffeeBtn"),
  addSoupBtn: document.getElementById("addSoupBtn"),
  addSideBtn: document.getElementById("addSideBtn"),

  editorModal: document.getElementById("editorModal"),
  closeEditor: document.getElementById("closeEditor"),
  editorForm: document.getElementById("editorForm"),
  editorType: document.getElementById("editorType"),
  editorId: document.getElementById("editorId"),
  editorName: document.getElementById("editorName"),
  editorDescription: document.getElementById("editorDescription"),
  editorPrice: document.getElementById("editorPrice"),
  editorStyle: document.getElementById("editorStyle"),
  editorOptions: document.getElementById("editorOptions"),
  editorAvailable: document.getElementById("editorAvailable"),
  editorSoldOut: document.getElementById("editorSoldOut"),
  deleteItemBtn: document.getElementById("deleteItemBtn"),
  editorTitle: document.getElementById("editorTitle"),
  editorSubtitle: document.getElementById("editorSubtitle")
};

init();

function init() {
  bindEvents();
  renderAll();
  scheduleRotation();
}

function bindEvents() {
  const hotspotStart = (event) => {
    if (event.type === "touchstart") event.preventDefault();
    clearTimeout(state.hotspotTimer);
    state.hotspotTimer = setTimeout(openSettings, SETTINGS_HOLD_MS);
  };
  const hotspotEnd = () => clearTimeout(state.hotspotTimer);

  el.settingsHotspot.addEventListener("pointerdown", hotspotStart);
  el.settingsHotspot.addEventListener("pointerup", hotspotEnd);
  el.settingsHotspot.addEventListener("pointerleave", hotspotEnd);
  el.settingsHotspot.addEventListener("pointercancel", hotspotEnd);
  el.settingsHotspot.addEventListener("touchstart", hotspotStart, { passive: false });
  el.settingsHotspot.addEventListener("touchend", hotspotEnd);
  el.settingsHotspot.addEventListener("touchcancel", hotspotEnd);

  el.navLeft?.addEventListener("click", rotatePrev);
  el.navRight?.addEventListener("click", rotateNext);

  el.closeSettings.addEventListener("click", closeSettings);
  el.closeEditor.addEventListener("click", closeEditor);
  el.saveGeneral.addEventListener("click", saveGeneralSettings);
  el.resetDefaults.addEventListener("click", () => el.confirmModal.classList.remove("hidden"));
  el.cancelReset.addEventListener("click", () => el.confirmModal.classList.add("hidden"));
  el.confirmReset.addEventListener("click", resetToDefaults);
  el.editorForm.addEventListener("submit", saveEditorForm);
  el.deleteItemBtn.addEventListener("click", deleteCurrentItem);
  el.settingsTabs.addEventListener("click", handleTabClick);

  [
    [el.addSandwichBtn, "sandwiches"],
    [el.addDrinkBtn, "drinks"],
    [el.addCoffeeBtn, "coffee"],
    [el.addSoupBtn, "soups"],
    [el.addSideBtn, "sides"]
  ].forEach(([button, type]) => button.addEventListener("click", () => openEditor(type)));

  [
    [el.sandwichesList, "sandwiches"],
    [el.drinksList, "drinks"],
    [el.coffeeList, "coffee"],
    [el.soupsList, "soups"],
    [el.sidesList, "sides"]
  ].forEach(([mount, type]) => {
    mount.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const id = button.dataset.id;
      if (button.dataset.action === "toggle") toggleAvailability(type, id);
      if (button.dataset.action === "toggleSoldOut") toggleSoldOut(type, id);
      if (button.dataset.action === "edit") openEditor(type, id);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeEditor();
      closeSettings();
      el.confirmModal.classList.add("hidden");
    }
    if (event.key === "ArrowLeft") rotatePrev();
    if (event.key === "ArrowRight") rotateNext();
  });
}

function handleTabClick(event) {
  const tab = event.target.closest(".tab-btn");
  if (!tab) return;
  openTab(tab.dataset.tab);
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
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === name);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === name);
  });
}

function populateGeneralForm() {
  const g = normalizeGeneral(state.data.general || {});
  const sectionSettings = getSectionSettings();

  el.eyebrowInput.value = g.eyebrow || "";
  el.brandTitleInput.value = g.brandTitle || "";
  el.brandTaglineInput.value = g.brandTagline || "";
  el.rotationSpeedInput.value = g.rotationSpeedSeconds || 12;
  el.autoRotateInput.checked = g.autoRotate !== false;
  el.fontScaleInput.value = g.fontScale || "normal";

  el.showSandwichesToggle.checked = !!g.showPages.sandwiches;
  el.showDrinksToggle.checked = !!g.showPages.drinks;
  el.showCoffeeToggle.checked = !!g.showPages.coffee;
  el.showSoupsToggle.checked = !!g.showPages.soups;
  el.showSidesToggle.checked = !!g.showPages.sides;

  el.sandwichesItemsPerPageInput.value = sectionSettings.sandwiches.itemsPerPage;
  el.drinksItemsPerPageInput.value = sectionSettings.drinks.itemsPerPage;
  el.coffeeItemsPerPageInput.value = sectionSettings.coffee.itemsPerPage;
  el.soupsItemsPerPageInput.value = sectionSettings.soups.itemsPerPage;
  el.sidesItemsPerPageInput.value = sectionSettings.sides.itemsPerPage;

  el.sandwichesOrderInput.value = sectionSettings.sandwiches.order;
  el.drinksOrderInput.value = sectionSettings.drinks.order;
  el.coffeeOrderInput.value = sectionSettings.coffee.order;
  el.soupsOrderInput.value = sectionSettings.soups.order;
  el.sidesOrderInput.value = sectionSettings.sides.order;

  el.sandwichesColumnsInput.value = g.columns.sandwiches;
  el.drinksColumnsInput.value = g.columns.drinks;
  el.coffeeColumnsInput.value = g.columns.coffee;
  el.soupsColumnsInput.value = g.columns.soups;
  el.sidesColumnsInput.value = g.columns.sides;

  el.sandwichesSecondsInput.value = g.sectionSeconds.sandwiches;
  el.drinksSecondsInput.value = g.sectionSeconds.drinks;
  el.coffeeSecondsInput.value = g.sectionSeconds.coffee;
  el.soupsSecondsInput.value = g.sectionSeconds.soups;
  el.sidesSecondsInput.value = g.sectionSeconds.sides;

  setHoursFormValues(normalizeHours(g.hoursOpen));
}

function saveGeneralSettings() {
  const current = normalizeGeneral(state.data.general || {});
  state.data.general = {
    ...current,
    eyebrow: el.eyebrowInput.value.trim() || "Mt Pulaski, Illinois",
    brandTitle: el.brandTitleInput.value.trim() || "Market on the Hill",
    brandTagline: el.brandTaglineInput.value.trim() || "Sandwiches, coffee, soups, drinks, and deli favorites",
    rotationSpeedSeconds: clampNumber(el.rotationSpeedInput.value, 5, 120, 12),
    autoRotate: !!el.autoRotateInput.checked,
    fontScale: ["small", "normal", "large"].includes(el.fontScaleInput.value) ? el.fontScaleInput.value : "normal",
    showPages: {
      sandwiches: !!el.showSandwichesToggle.checked,
      drinks: !!el.showDrinksToggle.checked,
      coffee: !!el.showCoffeeToggle.checked,
      soups: !!el.showSoupsToggle.checked,
      sides: !!el.showSidesToggle.checked
    },
    sectionSettings: normalizeSectionSettings({
      sandwiches: {
        itemsPerPage: clampNumber(el.sandwichesItemsPerPageInput.value, 1, 18, 12),
        order: clampNumber(el.sandwichesOrderInput.value, 1, 5, 1)
      },
      drinks: {
        itemsPerPage: clampNumber(el.drinksItemsPerPageInput.value, 1, 18, 12),
        order: clampNumber(el.drinksOrderInput.value, 1, 5, 2)
      },
      coffee: {
        itemsPerPage: clampNumber(el.coffeeItemsPerPageInput.value, 1, 18, 12),
        order: clampNumber(el.coffeeOrderInput.value, 1, 5, 3)
      },
      soups: {
        itemsPerPage: clampNumber(el.soupsItemsPerPageInput.value, 1, 18, 12),
        order: clampNumber(el.soupsOrderInput.value, 1, 5, 4)
      },
      sides: {
        itemsPerPage: clampNumber(el.sidesItemsPerPageInput.value, 1, 18, 12),
        order: clampNumber(el.sidesOrderInput.value, 1, 5, 5)
      }
    }),
    columns: {
      sandwiches: clampColumnCount(el.sandwichesColumnsInput.value, current.columns.sandwiches),
      drinks: clampColumnCount(el.drinksColumnsInput.value, current.columns.drinks),
      coffee: clampColumnCount(el.coffeeColumnsInput.value, current.columns.coffee),
      soups: clampColumnCount(el.soupsColumnsInput.value, current.columns.soups),
      sides: clampColumnCount(el.sidesColumnsInput.value, current.columns.sides)
    },
    sectionSeconds: {
      sandwiches: clampNumber(el.sandwichesSecondsInput.value, 5, 120, current.rotationSpeedSeconds),
      drinks: clampNumber(el.drinksSecondsInput.value, 5, 120, current.rotationSpeedSeconds),
      coffee: clampNumber(el.coffeeSecondsInput.value, 5, 120, current.rotationSpeedSeconds),
      soups: clampNumber(el.soupsSecondsInput.value, 5, 120, current.rotationSpeedSeconds),
      sides: clampNumber(el.sidesSecondsInput.value, 5, 120, current.rotationSpeedSeconds)
    },
    hoursOpen: readHoursFormValues()
  };

  saveData();
  closeSettings();
  state.sectionIndex = 0;
  state.pageIndex = 0;
  renderAll();
  scheduleRotation();
}

function renderAll() {
  applyBranding();
  renderHeaderHours();
  renderDisplay();
  renderAdminLists();
}

function applyBranding() {
  const g = normalizeGeneral(state.data.general || {});
  el.eyebrowText.textContent = g.eyebrow || "";
  el.brandTitle.textContent = g.brandTitle || "";
  el.brandTagline.textContent = g.brandTagline || "";
  document.body.classList.remove("font-small", "font-normal", "font-large");
  document.body.classList.add(`font-${g.fontScale || "normal"}`);
}

function getSectionSettings() {
  return normalizeSectionSettings(state.data.general?.sectionSettings || {});
}

function getDisplaySections() {
  const g = normalizeGeneral(state.data.general || {});
  const sectionSettings = getSectionSettings();

  return [
    {
      type: "sandwiches",
      kicker: "— SANDWICHES —",
      title: "Sandwiches",
      subtitle: "Fresh deli sandwiches and house favorites.",
      items: state.data.sandwiches.filter((item) => item.available !== false),
      itemsPerPage: sectionSettings.sandwiches.itemsPerPage,
      order: sectionSettings.sandwiches.order,
      columns: g.columns.sandwiches,
      seconds: g.sectionSeconds.sandwiches,
      visible: g.showPages.sandwiches
    },
    {
      type: "drinks",
      kicker: "— DRINKS —",
      title: "Drinks",
      subtitle: "Cold drinks and grab-and-go cooler favorites.",
      items: state.data.drinks.filter((item) => item.available !== false),
      itemsPerPage: sectionSettings.drinks.itemsPerPage,
      order: sectionSettings.drinks.order,
      columns: g.columns.drinks,
      seconds: g.sectionSeconds.drinks,
      visible: g.showPages.drinks
    },
    {
      type: "coffee",
      kicker: "— COFFEE —",
      title: "Coffee",
      subtitle: "Fresh brewed coffee and café favorites.",
      items: state.data.coffee.filter((item) => item.available !== false),
      itemsPerPage: sectionSettings.coffee.itemsPerPage,
      order: sectionSettings.coffee.order,
      columns: g.columns.coffee,
      seconds: g.sectionSeconds.coffee,
      visible: g.showPages.coffee
    },
    {
      type: "soups",
      kicker: "— SOUPS —",
      title: "Soups",
      subtitle: "Daily soup selections and hot comfort favorites.",
      items: state.data.soups.filter((item) => item.available !== false),
      itemsPerPage: sectionSettings.soups.itemsPerPage,
      order: sectionSettings.soups.order,
      columns: g.columns.soups,
      seconds: g.sectionSeconds.soups,
      visible: g.showPages.soups
    },
    {
      type: "sides",
      kicker: "— SIDES —",
      title: "Sides",
      subtitle: "Chips, deli extras, and quick add-ons.",
      items: state.data.sides.filter((item) => item.available !== false),
      itemsPerPage: sectionSettings.sides.itemsPerPage,
      order: sectionSettings.sides.order,
      columns: g.columns.sides,
      seconds: g.sectionSeconds.sides,
      visible: g.showPages.sides
    }
  ]
    .filter((section) => section.visible)
    .map((section) => ({
      ...section,
      pages: chunk(section.items, section.itemsPerPage || 12)
    }))
    .filter((section) => section.pages.length)
    .sort((a, b) => a.order - b.order);
}

function renderDisplay() {
  state.sections = getDisplaySections();
  if (!state.sections.length) {
    el.sectionKicker.textContent = "— MENU —";
    el.sectionTitle.textContent = "Nothing is currently showing";
    el.sectionSubtitle.textContent = "Press and hold the hidden top-right corner to open settings.";
    el.menuList.className = "menu-list layout-cards layout-3";
    el.menuList.innerHTML = '<article class="menu-item empty-card"><div>Enable a section and mark at least one item available.</div></article>';
    return;
  }

  if (state.sectionIndex >= state.sections.length) state.sectionIndex = 0;
  const section = state.sections[state.sectionIndex];
  if (state.pageIndex >= section.pages.length) state.pageIndex = 0;
  const page = section.pages[state.pageIndex] || [];

  el.sectionKicker.textContent = section.kicker;
  el.sectionTitle.textContent = section.title;
  el.sectionSubtitle.textContent = section.subtitle;
  el.menuList.className = `menu-list layout-cards layout-${section.columns || 3}`;
  el.menuList.innerHTML = page.map(renderMenuCard).join("");
}

function renderMenuCard(item) {
  const meta = buildMenuMeta(item);
  const price = formatPrice(item.price);
  return `
    <article class="menu-item ${item.soldOut ? "sold-out" : ""}">
      ${item.soldOut ? '<div class="sold-out-badge">Sold Out</div>' : ""}
      <div>
        <div class="menu-item-heading">
          <h3 class="menu-item-title">${escapeHtml(item.name)}</h3>
          ${price ? `<div class="menu-item-price">${escapeHtml(price)}</div>` : ""}
        </div>
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

function currentSectionDurationMs() {
  state.sections = getDisplaySections();
  const fallback = (normalizeGeneral(state.data.general || {}).rotationSpeedSeconds || 12) * 1000;
  const section = state.sections[state.sectionIndex];
  return Math.max(5000, (section?.seconds || fallback / 1000) * 1000);
}

function scheduleRotation() {
  stopRotation();
  const g = normalizeGeneral(state.data.general || {});
  if (g.autoRotate === false) return;

  state.sections = getDisplaySections();
  if (!state.sections.length) return;
  if (state.sections.length <= 1 && (state.sections[0]?.pages.length || 0) <= 1) return;

  const ms = currentSectionDurationMs();
  state.rotationDeadline = Date.now() + ms;
  state.rotationTimer = setTimeout(() => {
    rotateNext();
    scheduleRotation();
  }, ms);
}

function stopRotation() {
  if (state.rotationTimer) clearTimeout(state.rotationTimer);
  state.rotationTimer = null;
  state.rotationDeadline = null;
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
  scheduleRotation();
}

function rotatePrev() {
  state.sections = getDisplaySections();
  if (!state.sections.length) return;

  const currentSection = state.sections[state.sectionIndex] || state.sections[0];
  if (state.pageIndex > 0) {
    state.pageIndex -= 1;
  } else {
    state.sectionIndex = (state.sectionIndex - 1 + state.sections.length) % state.sections.length;
    const previousSection = state.sections[state.sectionIndex];
    state.pageIndex = Math.max(0, previousSection.pages.length - 1);
  }

  renderDisplay();
  scheduleRotation();
}

function renderAdminLists() {
  renderAdminList("sandwiches", el.sandwichesList, state.data.sandwiches);
  renderAdminList("drinks", el.drinksList, state.data.drinks);
  renderAdminList("coffee", el.coffeeList, state.data.coffee);
  renderAdminList("soups", el.soupsList, state.data.soups);
  renderAdminList("sides", el.sidesList, state.data.sides);
}

function renderAdminList(type, mount, items) {
  mount.innerHTML = items.map((item) => {
    const statusClass = item.available === false ? "unavailable" : item.soldOut ? "soldout-badge" : "available";
    const statusText = item.available === false ? "Hidden" : item.soldOut ? "Sold out" : "Available";
    return `
      <article class="admin-row">
        <div class="admin-row-head">
          <div>
            <div class="admin-item-title-row">
              <h4>${escapeHtml(item.name)}</h4>
              ${item.price ? `<span class="admin-item-price">${escapeHtml(formatPrice(item.price))}</span>` : ""}
            </div>
            <p>${escapeHtml(item.description || "")}</p>
            <p class="admin-meta">${escapeHtml([item.style, item.options].filter(Boolean).join(" • "))}</p>
          </div>
          <span class="badge ${statusClass}">${statusText}</span>
        </div>
        <div class="action-row">
          <button class="btn btn-ghost" type="button" data-action="toggle" data-id="${item.id}">${item.available === false ? "Show on menu" : "Hide from menu"}</button>
          <button class="btn btn-ghost" type="button" data-action="toggleSoldOut" data-id="${item.id}">${item.soldOut ? "Mark in stock" : "Mark sold out"}</button>
          <button class="btn btn-primary" type="button" data-action="edit" data-id="${item.id}">Edit</button>
        </div>
      </article>`;
  }).join("") || `<article class="admin-row"><p>No items yet.</p></article>`;
}

function toggleAvailability(type, id) {
  const item = state.data[type].find((entry) => entry.id === id);
  if (!item) return;
  item.available = item.available === false ? true : false;
  saveData();
  state.pageIndex = 0;
  renderAll();
  scheduleRotation();
}

function toggleSoldOut(type, id) {
  const item = state.data[type].find((entry) => entry.id === id);
  if (!item) return;
  item.available = true;
  item.soldOut = !item.soldOut;
  saveData();
  renderAll();
  scheduleRotation();
}

function openEditor(type, id = "") {
  const source = state.data[type];
  const isNew = !id;
  const item = isNew
    ? { id: "", name: "", price: "", description: "", style: "", options: "", available: true, soldOut: false }
    : source.find((entry) => entry.id === id);

  el.editorType.value = type;
  el.editorId.value = item?.id || "";
  el.editorName.value = item?.name || "";
  el.editorDescription.value = item?.description || "";
  el.editorPrice.value = item?.price || "";
  el.editorStyle.value = item?.style || "";
  el.editorOptions.value = item?.options || "";
  el.editorAvailable.checked = item?.available !== false;
  el.editorSoldOut.checked = !!item?.soldOut;
  el.editorTitle.textContent = isNew ? "Add item" : "Edit item";
  el.editorSubtitle.textContent = `${labelForType(type)} management`;
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
    price: el.editorPrice.value.trim(),
    style: el.editorStyle.value.trim(),
    options: el.editorOptions.value.trim(),
    available: !!el.editorAvailable.checked,
    soldOut: !!el.editorSoldOut.checked
  };
  if (!payload.name) return;

  const list = state.data[type];
  const index = list.findIndex((item) => item.id === payload.id);
  if (index >= 0) list[index] = payload;
  else list.push(payload);

  saveData();
  closeEditor();
  state.pageIndex = 0;
  renderAll();
  scheduleRotation();
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
  scheduleRotation();
}

function resetToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("market-on-the-hill-menu-v1");
  state.data = clone(window.DEFAULT_MENU_DATA);
  state.sectionIndex = 0;
  state.pageIndex = 0;
  el.confirmModal.classList.add("hidden");
  closeEditor();
  closeSettings();
  renderAll();
  scheduleRotation();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("market-on-the-hill-menu-v1");
    if (!raw) return clone(window.DEFAULT_MENU_DATA);
    return mergeDefaults(JSON.parse(raw), window.DEFAULT_MENU_DATA);
  } catch {
    return clone(window.DEFAULT_MENU_DATA);
  }
}

function mergeDefaults(data, defaults) {
  return {
    general: normalizeGeneral({
      ...defaults.general,
      ...(data.general || {})
    }),
    sandwiches: normalizeItemsArray(data.sandwiches, defaults.sandwiches),
    drinks: normalizeItemsArray(data.drinks, defaults.drinks),
    coffee: normalizeItemsArray(data.coffee, defaults.coffee),
    soups: normalizeItemsArray(data.soups, defaults.soups),
    sides: normalizeItemsArray(data.sides, defaults.sides)
  };
}

function normalizeGeneral(general) {
  const defaults = window.DEFAULT_MENU_DATA.general;
  return {
    eyebrow: general.eyebrow || defaults.eyebrow,
    brandTitle: general.brandTitle || defaults.brandTitle,
    brandTagline: general.brandTagline || defaults.brandTagline,
    rotationSpeedSeconds: clampNumber(general.rotationSpeedSeconds, 5, 120, defaults.rotationSpeedSeconds),
    autoRotate: general.autoRotate !== false,
    fontScale: ["small", "normal", "large"].includes(general.fontScale) ? general.fontScale : defaults.fontScale,
    showPages: {
      ...defaults.showPages,
      ...(general.showPages || {})
    },
    hoursOpen: normalizeHours({
      ...(defaults.hoursOpen || {}),
      ...(general.hoursOpen || {})
    }),
    sectionSettings: normalizeSectionSettings({
      ...(defaults.sectionSettings || {}),
      ...(general.sectionSettings || {})
    }),
    columns: {
      ...defaults.columns,
      ...(general.columns || {})
    },
    sectionSeconds: {
      ...defaults.sectionSeconds,
      ...(general.sectionSeconds || {})
    }
  };
}

function normalizeItemsArray(items, fallback) {
  const source = Array.isArray(items) ? items : clone(fallback);
  return source.map((item) => ({
    ...item,
    price: item?.price ? String(item.price).trim() : "",
    available: item.available !== false,
    soldOut: !!item.soldOut
  }));
}

function normalizeSectionSettings(sectionSettings) {
  const defaults = window.DEFAULT_MENU_DATA.general.sectionSettings;
  const normalized = {};
  SECTION_TYPES.forEach((type, index) => {
    const incoming = sectionSettings?.[type] || {};
    const fallback = defaults[type] || { itemsPerPage: 12, order: index + 1 };
    normalized[type] = {
      itemsPerPage: clampNumber(incoming.itemsPerPage, 1, 18, fallback.itemsPerPage),
      order: clampNumber(incoming.order, 1, 5, fallback.order)
    };
  });
  return normalized;
}

function normalizeHours(hours) {
  const defaults = {
    monday: { enabled: true, open: "10:00", close: "18:00" },
    tuesday: { enabled: true, open: "10:00", close: "18:00" },
    wednesday: { enabled: true, open: "10:00", close: "18:00" },
    thursday: { enabled: true, open: "10:00", close: "18:00" },
    friday: { enabled: true, open: "10:00", close: "18:00" },
    saturday: { enabled: true, open: "10:00", close: "18:00" },
    sunday: { enabled: true, open: "10:00", close: "14:00" }
  };
  const normalized = {};
  Object.entries(defaults).forEach(([day, value]) => {
    const incoming = hours?.[day] || {};
    normalized[day] = {
      enabled: typeof incoming.enabled === "boolean" ? incoming.enabled : value.enabled,
      open: normalizeTimeValue(incoming.open || value.open, value.open),
      close: normalizeTimeValue(incoming.close || value.close, value.close)
    };
  });
  return normalized;
}

function normalizeTimeValue(value, fallback) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value || "")) ? String(value) : fallback;
}

function setHoursFormValues(hours) {
  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].forEach((day) => {
    const proper = capitalize(day);
    el[`hours${proper}Enabled`].checked = !!hours[day].enabled;
    el[`hours${proper}Open`].value = hours[day].open;
    el[`hours${proper}Close`].value = hours[day].close;
  });
}

function readHoursFormValues() {
  const hours = {};
  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].forEach((day) => {
    const proper = capitalize(day);
    hours[day] = {
      enabled: !!el[`hours${proper}Enabled`].checked,
      open: normalizeTimeValue(el[`hours${proper}Open`].value, day === "sunday" ? "10:00" : "10:00"),
      close: normalizeTimeValue(el[`hours${proper}Close`].value, day === "sunday" ? "14:00" : "18:00")
    };
  });
  return normalizeHours(hours);
}

function renderHeaderHours() {
  const hours = normalizeHours(state.data.general.hoursOpen || {});
  const columnOne = ["monday", "tuesday", "wednesday", "thursday"].filter((day) => hours[day].enabled);
  const columnTwo = ["friday", "saturday", "sunday"].filter((day) => hours[day].enabled);

  const renderColumn = (title, days, showTitle = true) => {
    if (!days.length) return "";
    return `
      <div class="hours-display-column">
        <div class="hours-display-title ${showTitle ? "" : "hours-display-title-empty"}">${showTitle ? title : ""}</div>
        ${days.map((day) => `
          <div class="hours-display-row">
            <span class="hours-display-day">${capitalize(day)}</span>
            <span class="hours-display-time">${formatDisplayTime(hours[day].open)} - ${formatDisplayTime(hours[day].close)}</span>
          </div>
        `).join("")}
      </div>`;
  };

  el.headerHours.innerHTML = [renderColumn("Hours Open", columnOne, true), renderColumn("", columnTwo, false)].join(" ") || '<div class="hours-display-empty">Set hours in settings</div>';
}

function formatDisplayTime(value) {
  const [hourText, minuteText] = String(value).split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return value;
  const suffix = hour >= 12 ? "pm" : "am";
  const displayHour = hour % 12 || 12;
  return minute === 0 ? `${displayHour}${suffix}` : `${displayHour}:${String(minute).padStart(2, "0")}${suffix}`;
}

function capitalize(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function labelForType(type) {
  return ({ sandwiches: "Sandwiches", drinks: "Drinks", coffee: "Coffee", soups: "Soups", sides: "Sides" })[type] || type;
}

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function chunk(items, size) {
  const out = [];
  for (let index = 0; index < items.length; index += size) out.push(items.slice(index, index + size));
  return out;
}

function clampNumber(value, min, max, fallback) {
  const num = Number(value);
  if (Number.isNaN(num)) return fallback;
  return Math.min(max, Math.max(min, num));
}

function clampColumnCount(value, fallback) {
  const num = Number(value);
  return num === 4 ? 4 : num === 3 ? 3 : fallback || 3;
}

function formatPrice(value) {
  return String(value ?? "").trim();
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
