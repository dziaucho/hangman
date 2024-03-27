import BaseTag from "../elements/base";
import "../elements/input";

const garageSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "garage-section",
  document.body,
);

const garageHeading: BaseTag<HTMLHeadElement> = new BaseTag<HTMLHeadElement>(
  "h2",
  "garage-heading",
  garageSection,
);

const previewWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "preview-wrapper",
  garageSection,
);

const carModel: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "car-model", previewWrapper);

const carModelValue: BaseTag<HTMLSpanElement> =
  new BaseTag<HTMLParagraphElement>("span", "car-model-value", previewWrapper);

const carArea: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "car-area",
  previewWrapper,
);

garageHeading.elem.innerText = "garage";
carModel.elem.innerText = "model";
carModelValue.elem.innerText = "test";
