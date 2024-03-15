import { BaseTag } from "../../elements/base/base";
import { deleteUserEvent } from "./start-page-event";
import { getLastUser } from "../../users/user-storage-functions";

export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "start-section",
  document.body,
);

const greetUserText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "greet-user-text", startSection);

const startInfoWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>('div', 'start-info-wrapper', startSection)

const appNameHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h2", "add-name-heading", startInfoWrapper);

const descText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "desc-text", startInfoWrapper);

export const deleteButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "delete-button", startInfoWrapper);

startSection.addClass("hide");
appNameHeading.elem.innerText = "rss puzzle";

greetUserText.elem.innerText = `yo, ${getLastUser()}`;

let key = localStorage.key(localStorage.length - 1);

descText.elem.innerHTML = `assemble sentences from jumbled words.<br>
  the game integrates various levels of difficulty, hint options,
  and a unique puzzle - like experience with artwork.`;

deleteButton.elem.innerText = "delete user";

deleteButton.elem.addEventListener("click", deleteUserEvent);