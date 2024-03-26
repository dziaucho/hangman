import "../elements/base";
import "../elements/input";

const garageSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>("section", "garage-section", document.body);
const garageHeading: BaseTag<HTMLHeadElement> = new BaseTag<HTMLHeadElement>("h2", "garage-heading", garageSection);
const previewWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>("div", "preview-wrapper", garageSection);
const carArea: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>("div", "car-area", previewWrapper);