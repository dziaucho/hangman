import { BaseTag } from "../base/base";
import { signIn } from "./entry-page-events";

export const entrySection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>("section", "entry-section");
const welcomeHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h1", "welcome-heading");
export const entryForm: BaseTag<HTMLFormElement> = new BaseTag<HTMLFormElement>(
  "form",
  "entry-form",
  "entry-form",
);
export const nameInput: BaseTag<HTMLInputElement> = new BaseTag<HTMLInputElement>(
  "input",
  "name-input",
  "name-input",
);
export const surnameInput: BaseTag<HTMLInputElement> = new BaseTag<HTMLInputElement>(
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

entryForm.elem.addEventListener("submit", signIn);