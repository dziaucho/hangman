import { BaseTag } from "../../elements/base/base";
import { checkCorrect } from "./game-page-events";

export const gameSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "game-section",
  document.body,
);

export const statPar: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "stat-wrapper", gameSection);

const formingWrapHeading: BaseTag<HTMLHeadElement> =
  new BaseTag<HTMLHeadElement>("h2", "forming-wrap-heading", gameSection);

export const formingWrapper: BaseTag<HTMLDivElement> =
  new BaseTag<HTMLDivElement>("div", "forming-wrapper", gameSection);

const mixedWrapHeading: BaseTag<HTMLHeadElement> = new BaseTag<HTMLHeadElement>(
  "h2",
  "mixed-wrap-heading",
  gameSection,
);

export const mixedWrapper: BaseTag<HTMLDivElement> =
  new BaseTag<HTMLDivElement>("div", "mixed-wrapper", gameSection);

const checkButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>(
  "button",
  "check-button",
  gameSection,
);

formingWrapHeading.elem.innerText = "put the words here in the correct order";
mixedWrapHeading.elem.innerText = "these ones. they are mixed :)";
checkButton.elem.innerText = "check";

checkButton.elem.addEventListener("click", checkCorrect);

gameSection.addClass("hide");
