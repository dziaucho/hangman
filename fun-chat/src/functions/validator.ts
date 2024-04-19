import {
  usernameInput,
  passwordInput,
  unvalidParagr,
} from "../pages/authentication";

export function checkValidUsername(): boolean {
  const regExp: RegExp = /^[A-Z][a-zA-Z0-9]*$/;
  const { value } = usernameInput.elem;
  const isValid = regExp.test(value);

  if (isValid) {
    return true;
  }

  const invalidCharacters = value
    .split("")
    .filter((char) => !char.match(/[A-Za-z0-9]/))
    .join("");
  if (!/[A-Z]/.test(value[0])) {
    unvalidParagr.elem.innerHTML += "first letter should be capitalized</br>";
  }
  if (invalidCharacters) {
    unvalidParagr.elem.innerHTML +=
      "invalid characters. only latin letters and arabic numerals are allowed</br>";
  }

  return false;
}

export function checkValidPassword(): boolean {
  const regExp: RegExp = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
  const { value } = passwordInput.elem;
  const isValid = regExp.test(value);

  if (isValid) {
    return true;
  }

  if (!/(?=.*[A-Z])/.test(value)) {
    unvalidParagr.elem.innerHTML +=
      "password should contain at least one uppercase letter</br>";
  }
  if (!/(?=.*\d)/.test(value)) {
    unvalidParagr.elem.innerHTML +=
      "password should contain at least one digit</br>";
  }
  if (value.length < 5) {
    unvalidParagr.elem.innerHTML +=
      "password should be at least 5 characters long</br>";
  }

  return false;
}
