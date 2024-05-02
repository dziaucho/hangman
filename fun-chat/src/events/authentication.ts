import {
  loginForm,
  unvalidParagr,
  usernameInput,
  passwordInput,
} from "../pages/authentication";
import { checkValidPassword, checkValidUsername } from "../functions/validator";
import { goMain } from "../functions/switch-pages";
import getUserInfo from "../functions/user-info";

function handleSubmit(event: Event) {
  event.preventDefault();
  unvalidParagr.elem.innerText = "";
  const isUsername = checkValidUsername();
  const isPassword = checkValidPassword();
  if (isUsername && isPassword) {
    getUserInfo();
    goMain(usernameInput.elem.value, passwordInput.elem.value);
  }
}

loginForm.elem.addEventListener("submit", handleSubmit);
