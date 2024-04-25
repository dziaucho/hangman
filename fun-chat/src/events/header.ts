import { goAbout, goAuth, goMain } from "../functions/switch-pages";
import { usernameInput } from "../pages/authentication";
import {
  logoutButton,
  aboutButton,
  authButton,
  messagesButton,
  userInfoText,
} from "../pages/header";
import { removeUser } from "../functions/local-storage";

logoutButton.elem.addEventListener("click", () => {
  goAuth();
  removeUser();
});
aboutButton.elem.addEventListener("click", goAbout);
authButton.elem.addEventListener("click", goAuth);
messagesButton.elem.addEventListener("click", () => {
  goMain(usernameInput.elem.value);
});
