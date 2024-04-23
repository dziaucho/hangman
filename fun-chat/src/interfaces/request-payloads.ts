interface UserLogin {
  user: {
    login: string;
    password: string;
  };
}

interface UserLogout {
  user: {
    login: string;
    password: string;
  };
}

interface SendMessage {
  message: {
    to: string;
    text: string;
  };
}

interface FetchMessageHistory {
  user: {
    login: string;
  };
}

interface MessageDelivery {
  message: {
    id: string;
    status: {
      isDelivered: boolean;
    };
  };
}

interface ReadMessage {
  message: {
    id: string;
  };
}

interface DeleteMessage {
  message: {
    id: string;
  };
}

interface MessageEdit {
  message: {
    id: string;
    text: string;
  };
}
