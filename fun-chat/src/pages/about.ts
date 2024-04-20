import BaseTag from "../elements/base";

export const aboutSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "about-section hide",
  document.body,
);

const aboutText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "about-text", aboutSection);

export const aboutImg: BaseTag<HTMLImageElement> =
  new BaseTag<HTMLImageElement>("img", "about-img", aboutSection);

aboutText.elem.innerHTML =
  "here was supposed to be a rickroll<br>but i'm too dumb for any api";

aboutImg.elem.src = "../components/img/api-moment.png";
