import { BaseTag } from "../base/base";
/* import { check } from "./entryPageEvents"; */

const entrySection: BaseTag = new BaseTag("section", "entry-section");
const welcomeHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h1", "welcome-heading");
export const entryForm: BaseTag<HTMLFormElement> = new BaseTag<HTMLFormElement>(
  "form",
  "entry-form",
  "entry-form",
);
const nameInput: BaseTag<HTMLInputElement> = new BaseTag<HTMLInputElement>(
  "input",
  "name-input",
  "name-input",
);
const surnameInput: BaseTag<HTMLInputElement> = new BaseTag<HTMLInputElement>(
  "input",
  "surname-input",
  "surname-input",
);
const loginButton: BaseTag<HTMLInputElement> = new BaseTag<HTMLInputElement>(
  "input",
  "login-button-input",
  "login-button-input",
);

welcomeHeading.elem.innerText = "welcome";
nameInput.elem.type = "text";
surnameInput.elem.type = "text";
loginButton.elem.type = "submit";
nameInput.elem.placeholder = "your name";
surnameInput.elem.placeholder = "your surname";
loginButton.elem.value = "sign in";

nameInput.elem.setAttribute("required", "");
surnameInput.elem.setAttribute("required", "");

nameInput.elem.pattern = '^[A-Z]{1,}-?[a-zA-Z]{1,}-?[a-zA-Z]{1,}';
surnameInput.elem.pattern = '^[A-Z]{1,}-?[a-zA-Z]{1,}-?[a-zA-Z]{2,}'

entrySection.addElemToDoc(document.body);
welcomeHeading.addElemToDoc(entrySection);
entryForm.addElemToDoc(entrySection);
nameInput.addElemToDoc(entryForm);
surnameInput.addElemToDoc(entryForm);
loginButton.addElemToDoc(entryForm);

/* entryForm.elem.addEventListener("submit", check); */
