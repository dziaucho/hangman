import { BaseTag } from "../../elements/base/base";

export const gameSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "game-section",
  document.body,
);

const formingWrapHeading: BaseTag<HTMLHeadElement> =
  new BaseTag<HTMLHeadElement>("h2", "forming-wrap-heading", gameSection);

export const formingWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "forming-wrapper",
  gameSection,
);

const mixedWrapHeading: BaseTag<HTMLHeadElement> = new BaseTag<HTMLHeadElement>(
  "h2",
  "mixed-wrap-heading",
  gameSection,
);

export const mixedWrapper: BaseTag<HTMLDivElement> =
  new BaseTag<HTMLDivElement>("div", "mixed-wrapper", gameSection);

formingWrapHeading.elem.innerText = "put the words here in the correct order";
mixedWrapHeading.elem.innerText = "these ones. they are mixed :)";

gameSection.addClass("hide");