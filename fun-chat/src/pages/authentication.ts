import BaseTag from "../elements/base";
import InputTag from "../elements/input";

const authSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "auth-section",
  document.body,
);
const loginForm: BaseTag<HTMLFormElement> = new BaseTag<HTMLFormElement>(
  "form",
  "login-form",
  authSection,
);
const usernameInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "username-input",
    loginForm,
    "text",
    "username",
    true,
    "^[A-Z][a-zA-Z0-9]*",
  );
const passwordInput: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "password-input",
    loginForm,
    "password",
    "password",
    true,
    "^(?=.*[A-Z])(?=.*d)[A-Zd]{5,}",
  );
const submitButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>(
  "button",
  "submit-button",
  loginForm,
  "submit",
);
