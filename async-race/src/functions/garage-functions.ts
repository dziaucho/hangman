import BaseTag from "../elements/base";
import SVGCar from "../elements/svg-car";
import { rightGarageWrapper } from "../pages/garage";
import { getCars } from "../api/garage-api";

async function getName(index: number) {
  try {
    const cars = await getCars();
    return cars[index].name;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getColor(index: number) {
  try {
    const cars = await getCars();
    return cars[index].color;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function createCarArea(index: number) {
  const carGarageWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
    "div",
    "car-garage-wrapper",
    rightGarageWrapper,
  );

  const carImage: SVGCar = new SVGCar("car-garage-image", carGarageWrapper);

  const carName: BaseTag<HTMLParagraphElement> =
    new BaseTag<HTMLParagraphElement>("p", "car-name", carGarageWrapper);

  const carButtonsWrapper: BaseTag<HTMLDivElement> =
    new BaseTag<HTMLDivElement>("div", "car-buttons-wrapper", carGarageWrapper);

  const carDeleteButton: BaseTag<HTMLButtonElement> =
    new BaseTag<HTMLButtonElement>(
      "button",
      "delete-car-button",
      carButtonsWrapper,
    );

  const carChangeButton: BaseTag<HTMLButtonElement> =
    new BaseTag<HTMLButtonElement>(
      "button",
      "car-change-button",
      carButtonsWrapper,
    );

  carDeleteButton.elem.innerText = "delete";
  carChangeButton.elem.innerText = "change";

  try {
    const name = await getName(index);
    carName.elem.innerText = name;
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    const color = await getColor(index);
    carImage.svgSwitchColor(color);
  } catch (error) {
    console.error("Error:", error);
  }
}

createCarArea(3);
