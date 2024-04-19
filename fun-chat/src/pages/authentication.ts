import BaseTag from "../elements/base";
import InputTag from "../elements/input";

export const authSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "auth-section",
  document.body,
);

const authWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "auth-wrapper",
  authSection,
);

export const loginForm: BaseTag<HTMLFormElement> = new BaseTag<HTMLFormElement>(
  "form",
  "login-form",
  authWrapper,
);

export const usernameInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "username-input",
    loginForm,
    "text",
    "username",
    false,
    "username",
  );

export const passwordInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "password-input",
    loginForm,
    "password",
    "password",
    false,
    "password",
  );

const submitButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>(
  "button",
  "submit-button",
  loginForm,
);

export const unvalidParagr: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "unvalid-text", authWrapper);

submitButton.elem.innerText = "submit";
