import {
  NAME_UPDATE,
  USERNAME_UPDATE,
  PASSWORD_UPDATE,
  USER_SETTINGS_SAVE,
  EP_RESET_ERROR,
  EP_SET_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  username: "",
  password: "",
  error: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return { ...state, name: action.payload };

    case USERNAME_UPDATE:
      return { ...state, username: action.payload };

    case PASSWORD_UPDATE:
      return { ...state, password: action.payload };

    case USER_SETTINGS_SAVE:
      return { ...state, password: "", error: false, errorMessage: "" };

    case EP_RESET_ERROR:
      return { ...state, error: false };

    case EP_SET_FAIL:
      return { ...state, errorMessage: action.payload, error: true };

    default:
      return state;
  }
};
