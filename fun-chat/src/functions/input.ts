import { usernameInput, passwordInput } from "../pages/authentication";

export default function clearAuthInputs(): void {
  usernameInput.elem.value = "";
  passwordInput.elem.value = "";
}
