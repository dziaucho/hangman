import { BaseTag } from "../../elements/base/base";
import { InputTag } from "../../elements/input/input";
import { signIn } from "./entry-page-events";

export const entrySection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "entry-section",
  document.body,
);

const welcomeHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h1", "welcome-heading", entrySection);

export const entryForm: BaseTag<HTMLFormElement> = new BaseTag<HTMLFormElement>(
  "form",
  "entry-form",
  entrySection,
);

export const nameInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "input",
    "name-input",
    entryForm,
    "text",
    "your name",
    undefined,
    "^[A-Z]{1,}-?[a-zA-Z]{1,}-?[a-zA-Z]{1,}",
  );

export const surnameInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "input",
    "surname-input",
    entryForm,
    "text",
    "your surname",
    undefined,
    "^[A-Z]{1,}-?[a-zA-Z]{1,}-?[a-zA-Z]{2,}",
  );

const loginButton: InputTag<HTMLInputElement> = new InputTag<HTMLInputElement>(
  "input",
  "login-button-input",
  entryForm,
  "submit",
  undefined,
  "sign in",
);

welcomeHeading.elem.innerText = "welcome";

nameInput.elem.setAttribute("required", "");
surnameInput.elem.setAttribute("required", "");

entryForm.elem.addEventListener("submit", signIn);
