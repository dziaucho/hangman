import { entryForm, nameInput, surnameInput } from "./entryPage";
import { createUser, showUser } from "../../users/userfunction";


/* function validInput(elements: HTMLInputElement[]) {
  return;
}

function showElements(formNode: HTMLFormElement) {
  console.log(formNode.elements);
  const elements: HTMLInputElement[] = Array.from(
    formNode.elements,
  ) as HTMLInputElement[];
  const elementsText: HTMLInputElement[] = [];

  elements.forEach((elem: HTMLInputElement) => {
    if (elem.type === "text") elementsText.push(elem);
  });

  validInput(elementsText);
} */

export function check(event: Event) {
  event.preventDefault();
  createUser();
  showUser();
}