/* import */

import { makeElement, makeTable, makeTipsTable, getTipsCols, getTipsRows, getLongestColTip, getLongestRowTip, pushColsTips, pushRowsTips } from "./functions.js";

/* DOM */

let body = document.querySelector("body");

/* test task */

let task = [
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 1, 0, 0]
]

/* game zone */

let gameSection = makeElement("section", "game-section");

let gameZoneWrapper = makeElement("div", "game-zone-wrapper");
let table = makeTable(task.length);

let gameZoneCol1 = makeElement("div", "game-zone-column");
let gameZoneCol2 = makeElement("div", "game-zone-column");

let tipsCols = getTipsCols(task);
let tipsRows = getTipsRows(task);
let lengthCols = getLongestColTip(tipsCols);
let lengthRows = getLongestRowTip(tipsRows);

let tableTipsCols = makeTipsTable(lengthCols, task.length);
let tableTipsRows = makeTipsTable(task.length, lengthRows);

/* append */
body.appendChild(gameSection);
gameSection.appendChild(gameZoneWrapper);
gameZoneWrapper.appendChild(gameZoneCol1);
gameZoneWrapper.appendChild(gameZoneCol2);

gameZoneCol1.appendChild(tableTipsRows);
gameZoneCol2.appendChild(tableTipsCols);
gameZoneCol2.appendChild(table);

let rows = tableTipsCols.querySelectorAll("tr");
let start = rows.length - 1;

pushColsTips(rows, tipsCols, start)


let columns = tableTipsRows.querySelectorAll("tr");
for (let i = 0; i < columns.length; i += 1) {
  let ceils = Array.from(columns[i].querySelectorAll("td"));
  ceils.reverse();
  pushRowsTips(ceils, tipsRows[i]);
}