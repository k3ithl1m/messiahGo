import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  RESET_ERROR,
  EMAIL_ISVERIFIED,
  LOGOUT_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASS_EMAIL
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  username: "",
  password: "",
  errorMessage: "",
  user: null,
  loading: false,
  emailVerified: false,
  error: false,
  isLoggedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        isLoggedIn: true
      };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errorMessage: "The email and password does not match.",
        password: "",
        loading: false,
        error: true
      };
    case LOGIN_USER:
      return { ...state, loading: true };
    case RESET_ERROR:
      return { ...state, error: false };
    case EMAIL_ISVERIFIED:
      return {
        ...state,
        error: action.payload.error,
        emailVerified: action.payload.emailVerified,
        errorMessage: action.payload.errorMessage,
        loading: false
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      };
    case FORGOT_PASS_EMAIL:
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
};
