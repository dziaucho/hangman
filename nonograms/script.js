/* DOM */

let body = document.querySelector("body");

/* functions */

function makeElement(tag, selector) {
  let resultElement = document.createElement(`${tag}`);
  resultElement.className = `${selector}`;
  return resultElement;
}

function makeTable() {
  let table = document.createElement("table");
  table.className = "game-table";
  for (let i = 0; i < 5; i += 1) {
    let row = document.createElement("tr");
    for (let i = 0; i < 5; i += 1) {
      let ceil = document.createElement("td");
      row.appendChild(ceil);
    }
    table.appendChild(row);
  }
  return table;
}

/* game zone */

let gameZoneWrapper = makeElement("div", "game-zone-wrapper");
let table = makeTable();
body.appendChild(gameZoneWrapper);
gameZoneWrapper.appendChild(table);