/* import */

import { makeElement, makeTable, makeTipsTable, getTipsCols, getTipsRows, getLongestColTip, getLongestRowTip, pushColsTips } from "./functions.js";

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

let gameZoneWrapper = makeElement("div", "game-zone-wrapper");
let table = makeTable(task.length);

let gameZoneCol1 = makeElement("div", "game-zone-column");
let gameZoneCol2 = makeElement("div", "game-zone-column");

let tipsCols = getTipsCols(task);
let tipsRows = getTipsRows(task);
let lengthCols = getLongestColTip(tipsCols);
let lengthRows = getLongestRowTip(tipsRows);

console.log(tipsCols);
console.log(tipsRows);

let tableTipsCols = makeTipsTable(lengthCols, task.length);
let tableTipsRows = makeTipsTable(task.length, lengthRows);

/* append */
body.appendChild(gameZoneWrapper);
gameZoneWrapper.appendChild(gameZoneCol1);
gameZoneWrapper.appendChild(gameZoneCol2);

gameZoneCol1.appendChild(tableTipsRows);
gameZoneCol2.appendChild(tableTipsCols);
gameZoneCol2.appendChild(table);

console.log(tableTipsCols);

let row = tableTipsCols.querySelectorAll("tr");
let ceils = row[0].querySelectorAll("td");

pushColsTips(ceils, tipsCols, 1)
