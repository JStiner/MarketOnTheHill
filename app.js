
const state = {
  data: {
    settings: {
      rotationSpeed: 4,
      itemsPerPage: 2,
      showSandwiches: true,
      showDrinks: true,
      showOther: true
    },
    sandwiches: [
      { name: "Turkey & Swiss", description: "Turkey, swiss, lettuce, tomato" },
      { name: "Ham & Cheddar", description: "Ham, cheddar, mayo" },
      { name: "BLT", description: "Bacon, lettuce, tomato" },
      { name: "Club", description: "Turkey, bacon, lettuce" }
    ],
    drinks: [
      { name: "Soda", description: "Fountain drinks" },
      { name: "Tea", description: "Fresh brewed" }
    ],
    other: [
      { name: "Chips", description: "Kettle chips" },
      { name: "Cookie", description: "Fresh baked" }
    ]
  },
  rotationTimer: null
};

const columnState = {
  sandwiches: 0,
  drinks: 0,
  other: 0
};

function getPagedItems(items, page, perPage) {
  const start = page * perPage;
  return items.slice(start, start + perPage);
}

function getTotalPages(items, perPage) {
  return Math.ceil(items.length / perPage);
}

function renderItem(item) {
  return `
    <div class="menu-item">
      <h3>${item.name}</h3>
      <div>${item.description}</div>
    </div>
  `;
}

function renderDisplay() {
  const container = document.getElementById("displayColumns");
  container.innerHTML = "";

  const perPage = state.data.settings.itemsPerPage;

  const sections = [
    { key: "sandwiches", title: "Deli Sandwiches", items: state.data.sandwiches },
    { key: "drinks", title: "Drinks", items: state.data.drinks },
    { key: "other", title: "Deli Sides", items: state.data.other }
  ];

  sections.forEach(section => {
    const pageIndex = columnState[section.key];
    const totalPages = getTotalPages(section.items, perPage);
    const items = getPagedItems(section.items, pageIndex, perPage);

    const panel = document.createElement("div");
    panel.className = "menu-panel";

    panel.innerHTML = `
      <h2 class="panel-title">${section.title} (${pageIndex+1}/${totalPages})</h2>
      ${items.map(renderItem).join("")}
    `;

    container.appendChild(panel);
  });
}

function startRotation() {
  clearInterval(state.rotationTimer);

  const speed = state.data.settings.rotationSpeed * 1000;
  const perPage = state.data.settings.itemsPerPage;

  state.rotationTimer = setInterval(() => {
    ["sandwiches", "drinks", "other"].forEach(key => {
      const items = state.data[key];
      const totalPages = getTotalPages(items, perPage);

      if (totalPages > 1) {
        columnState[key] = (columnState[key] + 1) % totalPages;
      }
    });

    renderDisplay();
  }, speed);
}

renderDisplay();
startRotation();
