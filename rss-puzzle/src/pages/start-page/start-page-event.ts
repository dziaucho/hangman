import { entrySection } from "../entry-page/entry-page";
import { startSection } from "./start-page";
import { gameSection } from "../game-page/game-page";
import { removeUser } from "../../users/user-storage-functions";
import { clearInputs } from "../entry-page/entry-page-events";
import { pushMixedWord } from "../game-page/game-page-events";

export function goEntry(): void {
  entrySection.removeClass("hide");
  startSection.addClass("hide");
}

export function goGame(): void {
  gameSection.removeClass("hide");
  startSection.addClass("hide");
  pushMixedWord();
}

export function deleteUserEvent(): void {
  removeUser();
  clearInputs();
  goEntry();
}
