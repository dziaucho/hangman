import BaseTag from "../elements/base";

const mainSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "main-section hide",
  document.body,
);

export default mainSection;
