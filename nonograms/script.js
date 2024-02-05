/* import */

import { makeElement, makeTable, makeTipsTable, getTipsCols, getTipsRows, getLongestColTip, getLongestRowTip, pushColsTips, pushRowsTips } from "./functions.js";

/* DOM */

let body = document.querySelector("body");

/* tasks */

let tasks = [
  [
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 0, 0]
  ],
  [
    [1, 1, 1, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 1, 1]
  ],
  [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0]
  ],
  [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1]
  ],
  [
    [0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 0]
  ]

]

let emptyNonogram = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

let ceilsMatrix = [
  [],
  [],
  [],
  [],
  []
];

let currentGame = tasks[getRandomInt(tasks.length)];

/* game zone */

let gameSection = makeElement("section", "game-section");

let winnerHeading = makeElement("h1", "winner-heading");

let gameZoneWrapper = makeElement("div", "game-zone-wrapper");
let table = makeTable(currentGame.length);

let gameZoneCol1 = makeElement("div", "game-zone-column");
let gameZoneCol2 = makeElement("div", "game-zone-column");

let buttonsWrapper = makeElement("div", "buttons-wrapper");
let buttonRestart = makeElement("button", "button-restart");
let buttonRandom = makeElement("button", "button-random");
let buttonSwitchTheme = makeElement("button", "button-switch-theme");

let tipsCols = getTipsCols(currentGame);
let tipsRows = getTipsRows(currentGame);
let lengthCols = getLongestColTip(tipsCols);
let lengthRows = getLongestRowTip(tipsRows);

let tableTipsCols = makeTipsTable(lengthCols, currentGame.length);
let tableTipsRows = makeTipsTable(currentGame.length, lengthRows);

// time counter
let timerCounter = 0;
let timeMinutes = 0;

/* append */
body.appendChild(gameSection);

gameSection.appendChild(winnerHeading);

winnerHeading.innerHTML = `${timeMinutes} : ${timerCounter}`;

gameSection.appendChild(gameZoneWrapper);

gameZoneWrapper.appendChild(gameZoneCol1);
gameZoneWrapper.appendChild(gameZoneCol2);

gameZoneCol1.appendChild(tableTipsRows);
gameZoneCol2.appendChild(tableTipsCols);
gameZoneCol2.appendChild(table);

gameSection.appendChild(buttonsWrapper);
buttonsWrapper.appendChild(buttonRestart);
buttonsWrapper.appendChild(buttonRandom);
buttonsWrapper.appendChild(buttonSwitchTheme);

buttonRestart.innerHTML = "restart";
buttonRandom.innerHTML = "random";
buttonSwitchTheme.innerHTML = "switch theme";

// timer

let timerInterval = setInterval(timerChange, 1000);
function timerChange() {
  if (timerCounter === 59) {
    timeMinutes += 1;
    timerCounter = 0;
  }
  timerCounter += 1;
  winnerHeading.innerHTML = `${timeMinutes} : ${timerCounter}`;
}

// randomizer

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let rows = tableTipsCols.querySelectorAll("tr");
let start = rows.length - 1;

pushColsTips(rows, tipsCols, start)

let columns = tableTipsRows.querySelectorAll("tr");
for (let i = 0; i < columns.length; i += 1) {
  let ceils = Array.from(columns[i].querySelectorAll("td"));
  ceils.reverse();
  pushRowsTips(ceils, tipsRows[i]);
}

let ceilsClick = table.querySelectorAll("td");

let counter = 0;

for (let i = 0; i < ceilsClick.length; i += 5) {
  for (let j = i; j < i + 5; j += 1) {
    ceilsMatrix[counter].push(ceilsClick[j]);
  }
  counter += 1;
}

for (let i = 0; i < ceilsClick.length; i += 1) {
  ceilsClick[i].addEventListener("click", checkChosen(i));
  ceilsClick[i].addEventListener("contextmenu", checkOffcast(i));
  ceilsClick[i].addEventListener("click", checkCorrect);
}

function checkChosen(item) {
  return function () {
    if (ceilsClick[item].classList.contains("offcast")) {
      ceilsClick[item].classList.remove("offcast");
    }
    ceilsClick[item].classList.toggle("chosen");
  }
}

function checkOffcast(item) {
  return function (event) {
    event.preventDefault();
    if (ceilsClick[item].classList.contains("chosen")) {
      ceilsClick[item].classList.remove("chosen");
    }
    ceilsClick[item].classList.toggle("offcast");
  }
}

function checkCorrect() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (ceilsMatrix[i][j].classList.contains("chosen")) {
        emptyNonogram[i][j] = 1;
      } else {
        emptyNonogram[i][j] = 0;
      }
    }
  }

  if (emptyNonogram.toString() === currentGame.toString()) {
    clearInterval(timerInterval);
    winnerHeading.innerHTML = `Congrats! Your result: ${timeMinutes} : ${timerCounter}`
  }
}

// restart game

buttonRestart.addEventListener("click", restartGame)

function restartGame() {
  for (let i = 0; i < ceilsClick.length; i += 1) {
    ceilsClick[i].classList.remove("chosen");
    ceilsClick[i].classList.remove("offcast");
    timeMinutes = 0;
    timerCounter = 0;
    checkCorrect();
  }
}