import { usernameInput, passwordInput } from "../pages/authentication";
import userLogRequest from "../api/elements";
import { saveUser } from "./local-storage";

function getUserInfo(): void {
  console.log("check");
  const usernameString = usernameInput.elem.value;
  const passwordString = usernameInput.elem.value;
  saveUser(usernameString);
  if (userLogRequest.payload) {
    userLogRequest.payload.user.login = usernameString;
    userLogRequest.payload.user.password = passwordString;
    userLogRequest.sendRequest();
    userLogRequest.getRequest();
  }
}

export default getUserInfo;
