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
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");

  app.className = "app";
  rightColumn.className = "right-column";
  hangman.className = "hangman-wrapper";
  questionWrapper.className = "question-wrapper";
  keyboard.className = "keyboard-wrapper";
  modalWrapper.className = "modal-wrapper hide";
  modal.className = "modal";

  // append elements
  body.appendChild(modalWrapper);
  modalWrapper.appendChild(modal);
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
  const bodyParts = [head, bodyMan, leftHand, rightHand, leftLeg, rightLeg];

  head.className = "head";
  bodyMan.className = "body-man";
  leftHand.className = "left-hand";
  rightHand.className = "right-hand";
  leftLeg.className = "left-leg";
  rightLeg.className = "right-leg";

  // hide by default

  for (let i = 0; i < bodyParts.length; i += 1) {
    bodyParts[i].classList.add("hide");
  }

  // append elements
  hangman.appendChild(gallows);
  hangman.appendChild(head);
  hangman.appendChild(bodyMan);
  hangman.appendChild(leftHand);
  hangman.appendChild(rightHand);
  hangman.appendChild(leftLeg);
  hangman.appendChild(rightLeg);

  // quesion section
  // randomize question number
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // questions
  questions = {
    0: {
      "hint": "similar to loot box, but japanese",
      "answer": "gacha"
    },
    1: {
      "hint": "human head, lion body, eagle wings",
      "answer": "sphinx",
    },
    2: {
      "hint": "nice shape of sound",
      "answer": "asmr",
    },
    3: {
      "hint": "her majesty",
      "answer": "queen"
    },
    4: {
      "hint": "bam-boom alcohol!",
      "answer": "krambambula"
    }
  }

  // create elements
  const hint = document.createElement("h1");
  const attemptsWarning = document.createElement("p");
  const attemptsRow = document.createElement("div");
  const attemptLetters = [];
  const underlines = [];
  let attempts = 0;
  let currentQuestionNum = getRandomInt(5);
  let currentQuestion = questions[currentQuestionNum]["hint"];
  let currentAnswer = questions[currentQuestionNum]["answer"];

  hint.className = "hint";
  attemptsWarning.className = "attempts-warning";
  attemptsRow.className = "attempts-row";

  // add text
  attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
  hint.innerHTML = currentQuestion;

  // create row underlines
  for (let i = 0; i < currentAnswer.length; i += 1) {
    let pad = document.createElement("div");
    let attemptLetter = document.createElement("p");
    let underline = document.createElement("div");

    pad.className = "pad";
    attemptLetter.className = "attempt-letter";
    underline.className = "underline";

    attemptLetters.push(attemptLetter);
    underlines.push(underline);

    pad.appendChild(attemptLetter);
    pad.appendChild(underline);
    attemptsRow.appendChild(pad);
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

  // typing event
  // by click

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener("click", typingByClick(i))
  }

  // by keyboard

  document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toUpperCase();

    for (let i = 0; i < currentAnswer.length; i += 1) {
      if (pressedKey === currentAnswer[i].toUpperCase()) {
        attemptLetters[i].innerHTML = pressedKey;
        underlines[i].classList.add("hide");
      }
    }

    if (currentAnswer.toUpperCase().indexOf(pressedKey, 0) === -1) {
      attempts += 1;
      bodyParts[attempts - 1].classList.remove("hide");
      attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
    }

    for (let i = 0; i < letters.length; i += 1) {
      if (letters[i] === pressedKey) {
        keys[i].classList.add("disable");
      }
    }
  });

  function typingByClick(item) {
    return function () {
      keys[item].classList.add("disable");
      const pressedLetter = keys[item].querySelector("p").innerHTML;

      for (let i = 0; i < currentAnswer.length; i += 1) {
        if (pressedLetter === currentAnswer[i].toUpperCase()) {
          attemptLetters[i].innerHTML = pressedLetter;
          underlines[i].classList.add("hide");
        }
      }

      if (currentAnswer.toUpperCase().indexOf(pressedLetter, 0) === -1) {
        attempts += 1;
        bodyParts[attempts - 1].classList.remove("hide");
        attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
      }
    };
  }
}