import BaseTag from "../elements/base";

const aboutSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "about-section hide",
  document.body,
);

export default aboutSection;

const video: BaseTag<HTMLIFrameElement> = new BaseTag<HTMLIFrameElement>(
  "iframe",
  "video",
  aboutSection,
);

const aboutText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "about-text", aboutSection);

video.elem.src =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Gkk_AiiQuwcvAhK5";

aboutText.elem.innerHTML =
  "sorry.<br>my students pranked me with it like billion times, i wanted to fool around";
