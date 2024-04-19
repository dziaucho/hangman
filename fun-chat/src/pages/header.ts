import BaseTag from "../elements/base";

const header: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "header",
  "header",
  document.body,
);
const appNameText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "app-name-text", header);
export const userInfoText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "user-info-text", header);
export const logoutButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "logout-button hide", header);
export const aboutButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "about-button", header);
export const authButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "auth-button hide", header);
export const messagesButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "messages-button hide", header);

appNameText.elem.innerText = "fun chat";
logoutButton.elem.innerText = "sign out";
aboutButton.elem.innerText = "about";
authButton.elem.innerText = "sign in";
messagesButton.elem.innerText = "messages";
