import { BaseTag } from "../../elements/base/base";

export const gameSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "game-section",
  document.body,
);
const gameHeading: BaseTag<HTMLHeadingElement> =
  new BaseTag<HTMLHeadingElement>("h2", "game-heading", gameSection);

gameSection.addClass("hide");

gameHeading.elem.innerText = "game section";
