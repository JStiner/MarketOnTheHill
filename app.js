
const panels = [
  ["Turkey & Swiss", "Ham & Cheddar"],
  ["BLT", "Italian"],
  ["Chicken Salad", "Roast Beef"],
  ["Veggie", "Club"]
];

let index = 0;

function render() {
  const cols = ["col1","col2","col3"];

  cols.forEach((c,i)=>{
    const col = document.getElementById(c);
    col.innerHTML = "";

    const group = panels[(index + i) % panels.length];

    const panel = document.createElement("div");
    panel.className = "panel";

    group.forEach(item=>{
      const card = document.createElement("div");
      card.className = "card";
      card.innerText = item;
      panel.appendChild(card);
    });

    col.appendChild(panel);
  });
}

setInterval(()=>{
  index = (index + 1) % panels.length;
  render();
}, 4000);

render();
