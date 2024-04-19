import BaseTag from "../elements/base";

const footer: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "footer",
  "footer",
  document.body,
);
const schoolLink: BaseTag<HTMLLinkElement> = new BaseTag<HTMLLinkElement>(
  "a",
  "school-link",
  footer,
);
const schoolImg: BaseTag<HTMLImageElement> = new BaseTag<HTMLImageElement>(
  "img",
  "school-img",
  footer,
);
const authorLink: BaseTag<HTMLLinkElement> = new BaseTag<HTMLLinkElement>(
  "a",
  "author-link",
  footer,
);

schoolLink.elem.href = "https://rs.school";
schoolImg.elem.src = "../components/img/rs-logo.png";
authorLink.elem.innerText = "dziauco";
authorLink.elem.href = "https://github.com/dziauco";
