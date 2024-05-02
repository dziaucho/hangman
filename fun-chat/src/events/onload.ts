import {
  isLogged,
  getUserName,
  getUserPassword,
} from "../functions/local-storage";
import { goMain } from "../functions/switch-pages";

function onload(): void {
  if (isLogged()) {
    const userName = getUserName();
    const userPassword = getUserPassword();
    if (
      typeof userName === "string" &&
      userName != null &&
      typeof userPassword === "string" &&
      userPassword != null
    ) {
      goMain(userName, userPassword);
    }
  }
}

window.addEventListener("load", onload);
