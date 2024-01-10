window.addEventListener("load", createApplication);

function createApplication() {
  // find body
  const body = document.querySelector("body");
  body.className = "page";

  // create app-section and wrappers
  const app = document.createElement("section");
  const leftColumn = document.createElement("div");
  const rightColumn = document.createElement("div");
  const hangman = document.createElement("div");
  const questionWrapper = document.createElement("div");
  const keyboard = document.createElement("div");

  app.className = "app";
  rightColumn.className = "right-column";
  hangman.className = "hangman-wrapper";
  questionWrapper.className = "question-wrapper";
  keyboard.className = "keyboard-wrapper";

  // append elements
  body.appendChild(app);
  app.appendChild(leftColumn);
  app.appendChild(rightColumn);
  leftColumn.appendChild(hangman);
  rightColumn.appendChild(questionWrapper);
  rightColumn.appendChild(keyboard);

  // create hangman's images
  // gallows
  const gallows = document.createElement("img");
  gallows.className = "gallows";
  gallows.src = "./img/gallows.png";
  gallows.alt = "gallows";

  // poor man
  const head = document.createElement("div");
  const bodyMan = document.createElement("div");
  const leftHand = document.createElement("div");
  const rightHand = document.createElement("div");
  const leftLeg = document.createElement("div");
  const rightLeg = document.createElement("div");

  head.className = "head";
  bodyMan.className = "body-man";
  leftHand.className = "left-hand";
  rightHand.className = "right-hand";
  leftLeg.className = "left-leg";
  rightLeg.className = "right-leg";

  // append elements
  hangman.appendChild(gallows);
  hangman.appendChild(head);
  hangman.appendChild(bodyMan);
  hangman.appendChild(leftHand);
  hangman.appendChild(rightHand);
  hangman.appendChild(leftLeg);
  hangman.appendChild(rightLeg);

  // quesion section
  // questions
  questions = {
    1: {
      "hint": "similar to loot box, but japanese",
      "answer": "gacha"
    },
    2: {
      "hint": "human head, lion body, eagle wings",
      "answer": "sphinx",
    },
    3: {
      "hint": "nice shape of sound",
      "answer": "asmr",
    },
    4: {
      "hint": "her majesty",
      "answer": "queen"
    },
    5: {
      "hint": "bam-boom alcohol!",
      "answer": "krambambula"
    }
  }

  // create elements
  const hint = document.createElement("h1");
  const attemptsWarning = document.createElement("p");
  const attemptsRow = document.createElement("div");
  let attempts = 0;
  let currentQuestion = 1;

  hint.className = "hint";
  attemptsWarning.className = "attempts-warning";
  attemptsRow.className = "attempts-row";

  // add text
  attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
  hint.innerHTML = questions[currentQuestion]["hint"];

  // create row underlines
  for (let i = 0; i < questions[currentQuestion]["answer"].length; i += 1) {
    let underline = document.createElement("div");
    underline.className = "underline";
    attemptsRow.appendChild(underline);
  }

  // add to section
  questionWrapper.appendChild(hint);
  questionWrapper.appendChild(attemptsWarning);
  questionWrapper.appendChild(attemptsRow);

  // create keyboard
  // letters
  const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I",
    "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];
  const keys = [];

  // keyboard rows
  const keyFirstRow = document.createElement("div");
  const keySecondRow = document.createElement("div");
  const keyThirdRow = document.createElement("div");

  keyFirstRow.className = "keyboard-row";
  keySecondRow.className = "keyboard-row";
  keyThirdRow.className = "keyboard-row";

  // keys and letters
  for (let i = 0; i < letters.length; i += 1) {
    let key = document.createElement("div");
    key.className = "key";
    let keyLetter = document.createElement("p");
    keyLetter.className = "key-letter";
    keyLetter.innerHTML = letters[i];
    key.appendChild(keyLetter);
    keys.push(key);
  }

  // key-rows append keys
  for (let i = 0; i < keys.length; i += 1) {
    if (i < 9) {
      keyFirstRow.appendChild(keys[i]);
    } else if (i < 18) {
      keySecondRow.appendChild(keys[i]);
    } else {
      keyThirdRow.appendChild(keys[i]);
    }
  }

  // add to keyboard
  keyboard.appendChild(keyFirstRow);
  keyboard.appendChild(keySecondRow);
  keyboard.appendChild(keyThirdRow);
}