import { entrySection } from "../entry-page/entry-page";
import { startSection } from "./start-page";
import { removeUser } from "../../users/user-storage-functions";
import { clearInputs } from "../../pages/entry-page/entry-page-events";

export function goEntry(): void {
  entrySection.removeClass("hide");
  startSection.addClass("hide");
}

export function deleteUserEvent(): void {
  removeUser();
  clearInputs();
  goEntry();
}
