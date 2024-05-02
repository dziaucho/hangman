import {
  userInfoText,
  logoutButton,
  aboutButton,
  authButton,
  messagesButton,
} from "../pages/header";
import { aboutSection } from "../pages/about";
import clearAuthInputs from "./input";

import { authSection } from "../pages/authentication";

import mainSection from "../pages/main";

import userLogRequest from "../api/elements";
import RequestType from "../enums/request-type";

function putName(username: string): void {
  userInfoText.elem.innerText = `yo, ${username}`;
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

export function goMain(username: string, password: string): void {
  mainSection.elem.classList.remove("hide");
  aboutSection.elem.classList.add("hide");
  authSection.elem.classList.add("hide");

  aboutButton.elem.classList.remove("hide");
  messagesButton.elem.classList.add("hide");
  logoutButton.elem.classList.remove("hide");
  authButton.elem.classList.add("hide");
  userLogRequest.type = RequestType.userLogin;
  if (userLogRequest.payload !== null) {
    userLogRequest.payload.user.login = username;
    userLogRequest.payload.user.password = password;

    userLogRequest.sendRequest();
    userLogRequest.getRequest();
  }

  putName(username);
}

export function goAuth(): void {
  authSection.elem.classList.remove("hide");
  mainSection.elem.classList.add("hide");
  aboutSection.elem.classList.add("hide");

  aboutButton.elem.classList.remove("hide");
  messagesButton.elem.classList.add("hide");
  logoutButton.elem.classList.add("hide");
  authButton.elem.classList.add("hide");

  userLogRequest.type = RequestType.userLogout;
  userLogRequest.sendRequest();
  userLogRequest.getRequest();

  userInfoText.elem.innerText = "";
  clearAuthInputs();
}
