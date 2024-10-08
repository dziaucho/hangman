window.addEventListener("load", createApplication);

function createApplication() {
  // find body
  const body = document.querySelector("body");
  body.className = "page";

  // some variables
  let currentQuestion;
  let currentQuestionNum;
  let currentAnswer;
  let attempts = 0;
  let inputWordRight = "";
  let inputWordWrong = "";

  // create app-section and wrappers
  const app = document.createElement("section");
  const leftColumn = document.createElement("div");
  const rightColumn = document.createElement("div");
  const questionWrapper = document.createElement("div");
  const keyboard = document.createElement("div");
  const modalWrapper = document.createElement("div");

  app.className = "app";
  leftColumn.className = "left-column";
  rightColumn.className = "right-column";
  questionWrapper.className = "question-wrapper";
  keyboard.className = "keyboard-wrapper";
  modalWrapper.className = "modal-wrapper hide";

  // append elements
  body.appendChild(modalWrapper);
  body.appendChild(app);
  app.appendChild(leftColumn);
  app.appendChild(rightColumn);
  rightColumn.appendChild(questionWrapper);
  rightColumn.appendChild(keyboard);

  // modal
  const modal = document.createElement("div");
  modal.className = "modal";
  modalWrapper.appendChild(modal);

  modalHeading = document.createElement("h2");
  modalMessage = document.createElement("p");
  modalButton = document.createElement("div");
  modalButtonText = document.createElement("p");

  modalHeading.className = "modal-heading";
  modalMessage.className = "modal-message";
  modalButton.className = "modal-button";
  modalButtonText.className = "modal-button-text";

  modalButtonText.innerHTML = "play again";

  modal.appendChild(modalHeading);
  modal.appendChild(modalMessage);
  modal.appendChild(modalButton);
  modalButton.appendChild(modalButtonText);

  // create hangman's images
  // gallows
  const gallows = document.createElement("img");
  gallows.className = "gallows";
  gallows.src = "./img/gallows.png";
  gallows.alt = "gallows";

  // head
  const head = document.createElement("img");
  head.className = "head";
  head.src = "./img/head.png";
  head.alt = "head";

  // body
  const bodyMan = document.createElement("img");
  bodyMan.className = "body-man";
  bodyMan.src = "./img/body.png";
  bodyMan.alt = "body";

  //leftHand
  const leftHand = document.createElement("img");
  leftHand.className = "left-hand";
  leftHand.src = "./img/left-hand.png";
  leftHand.alt = "left hand";

  //right hand
  const rightHand = document.createElement("img");
  rightHand.className = "right-hand";
  rightHand.src = "./img/right-hand.png";
  rightHand.alt = "right hand";

  // left leg
  const leftLeg = document.createElement("img");
  leftLeg.className = "left-leg";
  leftLeg.src = "./img/left-leg.png";
  leftLeg.alt = "left leg";

  // right leg
  const rightLeg = document.createElement("img");
  rightLeg.className = "right-leg";
  rightLeg.src = "./img/right-leg.png";
  rightLeg.alt = "right leg";

  const bodyParts = [head, bodyMan, leftHand, rightHand, leftLeg, rightLeg];

  // append elements
  leftColumn.appendChild(gallows);
  leftColumn.appendChild(head);
  leftColumn.appendChild(bodyMan);
  leftColumn.appendChild(leftHand);
  leftColumn.appendChild(rightHand);
  leftColumn.appendChild(leftLeg);
  leftColumn.appendChild(rightLeg);

  // quesion section
  // questions
  let questions =
    [
      {
        "hint": "similar to loot box, but japanese",
        "answer": "gacha"
      },
      {
        "hint": "human head, lion body, eagle wings",
        "answer": "sphinx",
      },
      {
        "hint": "nice shape of sound",
        "answer": "asmr",
      },
      {
        "hint": "her majesty",
        "answer": "queen"
      },
      {
        "hint": "bam-boom alcohol!",
        "answer": "krambambula"
      },
      {
        "hint": "best time to submit the work",
        "answer": "deadline"
      },
      {
        "hint": "hmmm, smells like teenage spirit",
        "answer": "nirvana",
      },
      {
        "hint": "orange head with candles",
        "answer": "pumpkin",
      },
      {
        "hint": "they believe that cringe is dead (singular)",
        "answer": "zoomer"
      },
      {
        "hint": "does this truth live in africa?",
        "answer": "penguin"
      }
    ];

  let questionsMirror = Array.from(questions);

  // create elements
  const hint = document.createElement("h1");
  const attemptsWarning = document.createElement("p");
  const attemptsRow = document.createElement("div");
  const attemptLetters = [];
  const underlines = [];

  hint.className = "hint";
  attemptsWarning.className = "attempts-warning";
  attemptsRow.className = "attempts-row";

  // add to section
  questionWrapper.appendChild(hint);
  questionWrapper.appendChild(attemptsWarning);
  questionWrapper.appendChild(attemptsRow);

  refreshQuestion();

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
    if (inputWordRight.indexOf(pressedKey, 0) === -1) {

      for (let i = 0; i < currentAnswer.length; i += 1) {
        if (pressedKey === currentAnswer[i].toUpperCase()) {
          attemptLetters[i].innerHTML = pressedKey;
          underlines[i].classList.add("hide");
          inputWordRight += pressedKey;
        }
      }

    }

    if (currentAnswer.toUpperCase().indexOf(pressedKey, 0) === -1) {
      if (inputWordWrong.indexOf(pressedKey, 0) === -1) {
        attempts += 1;
        if (attempts >= 2 && attempts < 6) {
          bodyParts[attempts - 2].classList.add("hide");
        } else {
          gallows.classList.add("hide");
          bodyParts[0].classList.add("hide");
        }
        if (attempts < 6) {
          bodyParts[attempts - 1].classList.remove("hide");
        }
        attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
        inputWordWrong += pressedKey;
      }
    }

    for (let i = 0; i < letters.length; i += 1) {
      if (letters[i] === pressedKey) {
        keys[i].classList.add("disable");
      }
    }

    if (inputWordRight.length === currentAnswer.length) {
      showModal("you win!");
    }

    if (attempts === 6) {
      showModal("you lose :(");
    }
  });

  function typingByClick(item) {
    return function () {
      keys[item].classList.add("disable");
      const pressedLetter = keys[item].querySelector("p").innerHTML;

      if (inputWordRight.indexOf(pressedLetter, 0) === -1) {
        for (let i = 0; i < currentAnswer.length; i += 1) {
          if (pressedLetter === currentAnswer[i].toUpperCase()) {
            attemptLetters[i].innerHTML = pressedLetter;
            underlines[i].classList.add("hide");
            inputWordRight += pressedLetter;
          }
        }
      }

      if (currentAnswer.toUpperCase().indexOf(pressedLetter, 0) === -1) {
        if (inputWordWrong.indexOf(pressedLetter, 0) === -1) {
          attempts += 1;
          if (attempts >= 2 && attempts < 6) {
            bodyParts[attempts - 2].classList.add("hide");
          } else {
            gallows.classList.add("hide");
            bodyParts[0].classList.add("hide");
          }
          if (attempts < 6) {
            bodyParts[attempts - 1].classList.remove("hide");
          }
          attemptsWarning.innerHTML = `incorrect guesses: ${attempts} / 6`;
          inputWordWrong += pressedLetter;
        }
      }

      if (inputWordRight.length === currentAnswer.length) {
        showModal("you win!");
      }

      if (attempts === 6) {
        showModal("you lose :(");
      }
    };
  }

  // play again

  modalButton.addEventListener("click", playAgain);

  function playAgain() {
    modalWrapper.classList.add("hide");
    questions.splice(currentQuestionNum, 1);

    for (let i = 0; i < keys.length; i += 1) {
      keys[i].classList.remove("disable");
    }

    refreshQuestion();
  }

  // win or lose

  function showModal(result) {
    modalHeading.innerHTML = result;
    modalMessage.innerHTML = `the right word is ${currentAnswer}`;
    modalWrapper.classList.remove("hide");
  }

  // refresh question

  function refreshQuestion() {
    if (questions.length === 0) {
      questions = Array.from(questionsMirror);
    }

    gallows.classList.remove("hide");

    // delete old elements
    let oldPad = document.querySelectorAll(".pad");
    let oldAttemtLetter = document.querySelectorAll(".attempt-letter");
    let oldUnderline = document.querySelectorAll(".underline");

    for (let i = 0; i < oldPad.length; i += 1) {
      oldPad[i].remove();
      oldAttemtLetter[i].remove();
      oldUnderline[i].remove();
    }

    // hide body parts of poor man
    for (let i = 0; i < bodyParts.length; i += 1) {
      bodyParts[i].classList.add("hide");
    }

    // refresh question
    attempts = 0;
    currentQuestionNum = getRandomInt(questions.length);
    currentQuestion = questions[currentQuestionNum]["hint"];
    currentAnswer = questions[currentQuestionNum]["answer"];

    console.log(currentAnswer);

    inputWordRight = "";
    inputWordWrong = "";

    underlines.length = 0;
    attemptLetters.length = 0;

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
  }

  // randomize question number
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}