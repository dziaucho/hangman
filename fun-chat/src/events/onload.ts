import { isLogged, getUserName } from "../functions/local-storage";
import { goMain } from "../functions/switch-pages";

function onload(): void {
  if (isLogged()) {
    const userName = getUserName();
    if (userName !== null && typeof userName === "string") {
      goMain(userName);
    }
  }
}

window.addEventListener("load", onload);
