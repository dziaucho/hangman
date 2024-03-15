import { BaseTag } from "../../elements/base/base";
import { deleteUserEvent, goGame } from "./start-page-event";
import { getLastUser } from "../../users/user-storage-functions";

export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "start-section",
  document.body,
);

const greetUserText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "greet-user-text", startSection);

const startInfoWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "start-info-wrapper",
  startSection,
);

const appNameHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h2", "app-name-heading", startInfoWrapper);

const descText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "desc-text", startInfoWrapper);

const buttonsWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "buttons-wrapper",
  startInfoWrapper,
);

export const deleteButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "delete-button", buttonsWrapper);

const startButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>(
  "button",
  "start-button",
  buttonsWrapper,
);

startSection.addClass("hide");
appNameHeading.elem.innerText = "rss puzzle";

greetUserText.elem.innerText = `yo, ${getLastUser()}`;

descText.elem.innerHTML = `assemble sentences from jumbled words.<br>
  the game integrates various levels of difficulty, hint options,
  and a unique puzzle - like experience with artwork.`;

deleteButton.elem.innerText = "delete user";
startButton.elem.innerText = "start game";

deleteButton.elem.addEventListener("click", deleteUserEvent);
startButton.elem.addEventListener("click", goGame);
