/* import { entryForm } from "./entryPage";

function validInput(elements: HTMLInputElement[]) {
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
}

export function check(event: Event) {
  event.preventDefault();
  console.log("check");
  showElements(entryForm.elem);
}
*/