import {
  errorWrapper,
  errorMessage,
  closeErrorButton,
} from "../pages/error-message";

export function showErrorMessage(error: string): void {
  errorWrapper.elem.classList.remove("hide");
  errorMessage.elem.innerText = error;
}

export function closeErrorMessage(): void {
  errorWrapper.elem.classList.add("hide");
}
