import { BaseTag } from "../../elements/base/base";
import { deleteUserEvent } from "./start-page-event";

export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "start-section",
  document.body,
);
const appNameHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h2", "add-name-heading", startSection);
const descText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "desc-text", startSection);
export const deleteButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "delete-button", startSection);

startSection.addClass("hide");
appNameHeading.elem.innerText = "rss puzzle";
descText.elem.innerHTML =
  "assemble sentences from jumbled words.<br>the game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.";

deleteButton.elem.innerText = "delete user";

deleteButton.elem.addEventListener("click", deleteUserEvent);
