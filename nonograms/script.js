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

function tipsCols(task) {
  let tips = [];
  let rows = task.length;
  let cols = task[0].length;

  for (let i = 0; i < cols; i += 1) {
    let amount = 0;
    let triks = [];

    for (let j = 0; j < rows; j += 1) {
      if (task[j][i] === 1) {
        amount += 1;
      } else {
        triks.push(amount);
        amount = 0;
      }
    }
    triks.push(amount);
    tips.push(triks.filter((trik) => trik !== 0));
  }
  return tips;
}

function tipsRows(task) {
  let tips = [];
  let rows = task.length;
  let cols = task[0].length;

  for (let i = 0; i < cols; i += 1) {
    let amount = 0;
    let triks = [];

    for (let j = 0; j < rows; j += 1) {
      if (task[i][j] === 1) {
        amount += 1;
      } else {
        triks.push(amount);
        amount = 0;
      }
    }
    triks.push(amount);
    tips.push(triks.filter((trik) => trik !== 0));
  }
  return tips;
}

/* task */

let task = [
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 1, 0, 0]
]

/* game zone */

let gameZoneWrapper = makeElement("div", "game-zone-wrapper");
let table = makeTable();
body.appendChild(gameZoneWrapper);
gameZoneWrapper.appendChild(table);