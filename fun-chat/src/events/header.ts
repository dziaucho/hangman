import { goAbout, goAuth, goMain } from "../functions/switch-pages";
import {
  logoutButton,
  aboutButton,
  authButton,
  messagesButton,
} from "../pages/header";

logoutButton.elem.addEventListener("click", goAuth);
aboutButton.elem.addEventListener("click", goAbout);
authButton.elem.addEventListener("click", goAuth);
messagesButton.elem.addEventListener("click", goMain);
