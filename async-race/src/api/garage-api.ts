import API_BASE_URL from "./api-base";
import Car from "../elements/car";

const endpointGarage: string = "/garage";

function getCars(): Promise<Car[]> {
  return fetch(API_BASE_URL + endpointGarage)
    .then((response) => {
      if (!response.ok) {
        throw new Error("get failed :(");
      }
      return response.json();
    })
    .then((data) => {
      return data as Car[];
    })
    .catch((error) => {
      throw error;
    });
}

function sendData(car: Car): Promise<void> {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };

  return fetch(`${API_BASE_URL}${endpointGarage}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("send failed :(");
      }
    })
    .catch((error) => {
      throw error;
    });
}

function updateData(car: Car): Promise<void> {
  const requestOptions: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };

  return fetch(`${API_BASE_URL}${endpointGarage}/${car.id}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("update failed :(");
      }
    })
    .catch((error) => {
      throw error;
    });
}

function deleteData(id: number): Promise<void> {
  const requestOptions: RequestInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${API_BASE_URL}${endpointGarage}/${id}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("delete failed :(");
      }
    })
    .catch((error) => {
      throw error;
    });
}
