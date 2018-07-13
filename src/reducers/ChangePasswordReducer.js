import {
  OLD_PASSWORD_UPDATE,
  NEW_PASSWORD_UPDATE,
  CONF_NEW_PASSWORD_UPDATE,
  USER_NEW_PASSWORD_SAVE,
  CHANGE_PASS_FAIL,
  CHANGE_PASS_RESET_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  oldPassword: "",
  newPassword: "",
  confNewPassword: "",
  error: false,
  success: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OLD_PASSWORD_UPDATE:
      return { ...state, oldPassword: action.payload };

    case NEW_PASSWORD_UPDATE:
      return { ...state, newPassword: action.payload };

    case CONF_NEW_PASSWORD_UPDATE:
      return { ...state, confNewPassword: action.payload };

    case USER_NEW_PASSWORD_SAVE:
      return { ...state, success: true, errorMessage: action.payload };

    case CHANGE_PASS_FAIL:
      return { ...state, errorMessage: action.payload, error: true };

    case CHANGE_PASS_RESET_ERROR:
      return { ...state, error: false, success: false };

    default:
      return state;

  }
};
