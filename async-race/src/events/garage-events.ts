import { getCars } from "../api/garage-api";
import createCarArea from "../functions/garage-functions";
import { carPreview, colorPick } from "../pages/garage";

async function createCarAreas() {
  try {
    const cars = await getCars();
    cars.forEach((car, index) => {
      createCarArea(index);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function switchColorPreview(): void {
  carPreview.svgSwitchColor(colorPick.elem.value);
}

createCarAreas();
colorPick.elem.addEventListener("input", switchColorPreview);
