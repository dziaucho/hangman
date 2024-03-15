import { BaseTag } from "../../elements/base/base";
import { deleteUserEvent } from "./start-page-event";

export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "start-section",
  document.body,
);
export const deleteButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "delete-button", startSection);

startSection.addClass("hide");
deleteButton.elem.innerText = "delete user";

deleteButton.elem.addEventListener("click", deleteUserEvent);
