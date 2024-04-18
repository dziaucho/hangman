import { loginForm, unvalidParagr } from "../pages/authentication";
import { checkValidPassword, checkValidUsername } from "../functions/validator";

function handleSubmit(event: Event) {
  event.preventDefault();
  unvalidParagr.elem.innerText = "";
  checkValidUsername();
  checkValidPassword();
}

loginForm.elem.addEventListener("submit", handleSubmit);
