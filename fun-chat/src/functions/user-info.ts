import { usernameInput, passwordInput } from "../pages/authentication";
import userLogRequest from "../api/elements";
import { saveUser } from "./local-storage";

function getUserInfo(): void {
  const usernameString = usernameInput.elem.value;
  const passwordString = passwordInput.elem.value;
  saveUser(usernameString, passwordString);
}

export default getUserInfo;
