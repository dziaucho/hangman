import uuidv4 from "../api/uuid-generator";
import RequestType from "../enums/request-type";

class Request<T> {
  id: string | null;
  type: RequestType;
  payload: T | null;

  constructor(type: RequestType, payload: T | null) {
    this.id = uuidv4();
    this.type = type;
    this.payload = payload;
  }
}
