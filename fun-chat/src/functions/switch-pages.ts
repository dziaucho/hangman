import {
  userInfoText,
  logoutButton,
  aboutButton,
  authButton,
  messagesButton,
} from "../pages/header";
import aboutSection from "../pages/about";
import clearAuthInputs from "./input";

import {
  usernameInput,
  passwordInput,
  authSection,
} from "../pages/authentication";

import mainSection from "../pages/main";

function putName(): void {
  userInfoText.elem.innerText = `yo, ${usernameInput.elem.value}`;
}

export function goAbout(): void {
  aboutSection.elem.classList.remove("hide");
  authSection.elem.classList.add("hide");
  mainSection.elem.classList.add("hide");

  aboutButton.elem.classList.add("hide");

  if (logoutButton.elem.classList.contains("hide")) {
    messagesButton.elem.classList.add("hide");
    authButton.elem.classList.remove("hide");
  } else {
    messagesButton.elem.classList.remove("hide");
    authButton.elem.classList.add("hide");
  }
}

export function goMain(): void {
  mainSection.elem.classList.remove("hide");
  aboutSection.elem.classList.add("hide");
  authSection.elem.classList.add("hide");

  aboutButton.elem.classList.remove("hide");
  messagesButton.elem.classList.add("hide");
  logoutButton.elem.classList.remove("hide");
  authButton.elem.classList.add("hide");

  putName();
}

export function goAuth(): void {
  authSection.elem.classList.remove("hide");
  mainSection.elem.classList.add("hide");
  aboutSection.elem.classList.add("hide");

  aboutButton.elem.classList.remove("hide");
  messagesButton.elem.classList.add("hide");
  logoutButton.elem.classList.add("hide");
  authButton.elem.classList.add("hide");

  userInfoText.elem.innerText = "";
  clearAuthInputs();
}
