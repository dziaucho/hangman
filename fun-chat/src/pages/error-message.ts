import BaseTag from "../elements/base";

export const errorWrapper: BaseTag<HTMLDivElement> =
  new BaseTag<HTMLDivElement>("div", "error-wrapper hide", document.body);

function closeErrorMessage(): void {
  errorWrapper.elem.classList.add("hide");
}

const errorInner: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "error-inner",
  errorWrapper,
);
export const errorMessage: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "error-message", errorInner);
export const closeErrorButton: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "close-error", errorInner);

closeErrorButton.elem.innerText = "ok";
closeErrorButton.elem.addEventListener("click", closeErrorMessage);
