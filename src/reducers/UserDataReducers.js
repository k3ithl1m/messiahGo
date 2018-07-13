import {
  USER_DATA,
  LOGOUT_SUCCESS,
  USERNAME_NAME_UPDATE,
  IS_ADMIN
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  username: "",
  password: "",
  uid: "",
  emailVerified: false,
  chatId: "",
  email: "",
  admin: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        name: action.payload.userName,
        username: action.payload.userUsername,
        password: action.payload.userPassword,
        uid: action.payload.userUid,
        emailVerified: action.payload.userEmailVerified,
        chatId: action.payload.chatId,
        email: action.payload.email
      };
    case IS_ADMIN:
      return { ...state, admin: action.payload };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      };
    case USERNAME_NAME_UPDATE:
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        chatId: action.payload.chatId
      };
    default:
      return state;
  }
};
