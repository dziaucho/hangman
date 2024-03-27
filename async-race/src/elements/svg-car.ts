import BaseTag from "./base";

export default class SVGCar {
  private carSvgObject: HTMLObjectElement;

  constructor(tagClass: string, parentElement: HTMLElement | BaseTag) {
    this.carSvgObject = new BaseTag<HTMLObjectElement>(
      "object",
      tagClass,
      parentElement,
    ).elem as HTMLObjectElement;

    this.carSvgObject.setAttribute("data", "../components/svg/car.svg");
    this.carSvgObject.setAttribute("type", "image/svg+xml");
  }

  public svgSwitchColor(newColor: string): void {
    const pathElement =
      this.carSvgObject.contentDocument?.querySelector("path");
    if (pathElement) {
      pathElement.style.fill = newColor;
    }
  }
}
