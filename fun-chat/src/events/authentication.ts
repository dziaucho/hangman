import { authSection, loginForm, unvalidParagr } from "../pages/authentication";
import { checkValidPassword, checkValidUsername } from "../functions/validator";
import mainSection from "../pages/main";

function toggleAuthMain(): void {
  authSection.elem.classList.toggle("hide");
  mainSection.elem.classList.toggle("hide");
}

function handleSubmit(event: Event) {
  event.preventDefault();
  unvalidParagr.elem.innerText = "";
  const isUsername = checkValidUsername();
  const isPassword = checkValidPassword();
  if (isUsername && isPassword) toggleAuthMain();
}

loginForm.elem.addEventListener("submit", handleSubmit);
