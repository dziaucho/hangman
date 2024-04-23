const socket = new WebSocket("ws://127.0.0.1:4000");

export default socket;

// test

const userLoginMessage = {
  id: "some_unique_id",
  type: "USER_LOGIN",
  payload: {
    user: {
      login: "example_login",
      password: "example_password",
    },
  },
};

socket.onopen = function onOpen(event) {
  console.log("WebSocket connection established");

  socket.send(JSON.stringify(userLoginMessage));
};

socket.onmessage = function onMessage(event) {
  console.log("Message received from server:", event.data);
};

socket.onclose = function onClose(event) {
  console.log("WebSocket connection closed");
};

socket.onerror = function onError(error) {
  console.error("WebSocket error:", error);
};
