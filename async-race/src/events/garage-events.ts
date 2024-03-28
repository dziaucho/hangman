import { getCars } from "../api/garage-api";
import createCarArea from "../functions/garage-functions";

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

createCarAreas();
