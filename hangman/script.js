window.addEventListener("load", createApplication);

function createApplication() {
  // find body
  const body = document.querySelector("body");

  // create app and wrappers
  const app = document.createElement("section");
  const hangman = document.createElement("div");
  const keyboard = document.createElement("div");
  app.className = "app";
  hangman.className = "hangman-wrapper";
  keyboard.className = "keyboard-wrapper";

  // create image
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
  body.appendChild(app);
  app.appendChild(hangman);
  app.appendChild(keyboard);
  hangman.appendChild(gallows);
  hangman.appendChild(head);
  hangman.appendChild(bodyMan);
  hangman.appendChild(leftHand);
  hangman.appendChild(rightHand);
  hangman.appendChild(leftLeg);
  hangman.appendChild(rightLeg);
}