import { getCars } from "../api/garage-api";
import createCarArea from "../functions/garage-functions";
import { carPreview, colorPick, buttonCreate } from "../pages/garage";
import API_BASE_URL from "../api/api-base";

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

async function putCar(color: string, name: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/cars`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color, name }),
    });

    if (!response.ok) {
      throw new Error("Failed to put car on the server");
    }

    console.log("Car successfully put on the server");
  } catch (error) {
    console.error("Error while putting car on the server:", error);
  }
}

createCarAreas();
colorPick.elem.addEventListener("input", switchColorPreview);
