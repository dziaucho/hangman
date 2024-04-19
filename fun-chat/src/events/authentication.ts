import { authSection, loginForm, unvalidParagr } from "../pages/authentication";
import { checkValidPassword, checkValidUsername } from "../functions/validator";
import { goMain } from "../functions/switch-pages";

function handleSubmit(event: Event) {
  event.preventDefault();
  unvalidParagr.elem.innerText = "";
  const isUsername = checkValidUsername();
  const isPassword = checkValidPassword();
  if (isUsername && isPassword) goMain();
}

loginForm.elem.addEventListener("submit", handleSubmit);
