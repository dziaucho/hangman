import Request from "../classes/request";
import RequestType from "../enums/request-type";

const userLogRequest = new Request(RequestType.userLogin, {
  user: {
    login: "",
    password: "",
  },
});

export default userLogRequest;
