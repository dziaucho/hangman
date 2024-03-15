import { createUser } from "../../users/user-storage-functions";
import { entrySection, nameInput, surnameInput } from "./entry-page";
import { startSection } from "../start-page/start-page";

function goStart(): void {
  entrySection.addClass("hide");
  startSection.removeClass("hide");
}

export function clearInputs(): void {
  nameInput.elem.value = "";
  surnameInput.elem.value = "";
}

export function signIn(event: Event): void {
  event.preventDefault();
  createUser();
  goStart();
}
