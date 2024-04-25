import { v4 as uuidv4 } from "uuid";
import RequestType from "../enums/request-type";
import socket from "../api/socket";
import { showErrorMessage } from "../functions/show-hide-error";

class Request<T> {
  id: string | null;

  type: RequestType;

  payload: T | null;

  static socket = socket;

  constructor(type: RequestType, payload: T | null) {
    this.id = uuidv4();
    this.type = type;
    this.payload = payload;
  }

  async sendRequest() {
    if (Request.socket.readyState !== WebSocket.OPEN) {
      await new Promise((resolve) => {
        Request.socket.addEventListener("open", resolve);
      });
    }
    const requestBody = JSON.stringify(this);
    Request.socket.send(requestBody);
  }

  getRequest() {
    Request.socket.onmessage = (event) => {
      console.log(event.data);
      const message = JSON.parse(event.data);
      if (message.type === RequestType.error)
        this.showError(message.payload.error);
    };
  }

  showError(error: string) {
    showErrorMessage(error);
  }

  /*
  onError() {
    socket.onerror = (error) => {
      console.error(error);
      this.showError(error.toString());
    };
  }
  */
}

export default Request;
