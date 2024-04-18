import BaseTag from "../elements/base";

const mainSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "main-section",
  document.body,
);

const mainHeader: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "header",
  "main-header",
  mainSection,
);
const appNameParagr: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "app-name-paragr", mainHeader);
const userInfoParagr: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "user-info-paragr", mainHeader);
const logoutButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>(
  "button",
  "logout-button",
  mainHeader,
);

const mainTag: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "main",
  "main-tag",
  mainSection,
);

const mainFooter: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "footer",
  "main-footer",
  mainSection,
);
const schoolLink: BaseTag<HTMLLinkElement> = new BaseTag<HTMLLinkElement>(
  "a",
  "school-link",
  mainFooter,
);
const schoolImg: BaseTag<HTMLImageElement> = new BaseTag<HTMLImageElement>(
  "img",
  "school-img",
  mainFooter,
);
const authorLink: BaseTag<HTMLLinkElement> = new BaseTag<HTMLLinkElement>(
  "a",
  "author-link",
  mainFooter,
);

appNameParagr.elem.innerText = "fun chat";
userInfoParagr.elem.innerText = "here must be user name";
logoutButton.elem.innerText = "logout";

schoolLink.elem.href = "https://rs.school";
schoolImg.elem.src = "../components/img/rs-logo.png";
authorLink.elem.href = "https://github.com/dziauco";
