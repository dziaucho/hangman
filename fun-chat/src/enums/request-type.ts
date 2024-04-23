enum RequestType {
  userLogin = "USER_LOGIN",
  userLogout = "USER_LOGOUT",
  userActive = "USER_ACTIVE",
  userInactive = "USER_INACTIVE",
  messageSend = "MSG_SEND",
  messageFromUser = "MSG_FROM_USER",
  messageDelivery = "MSG_DELIVER",
  messageRead = "MSG_READ",
  messageDelete = "MSG_DELETE",
  messageEdit = "MSG_EDIT",
  userExternalLogout = "USER_EXTERNAL_LOGOUT",
  userExternalLogin = "USER_EXTERNAL_LOGIN",
  error = "ERROR",
}

export default RequestType;
