import {
  SU_EMAIL_TYPED,
  SU_EMAIL_VALID,
  SU_USER_TYPED,
  SU_PASSWORD_TYPED,
  SU_LOADING,
  SIGN_UP_FAIL,
  SU_RESET_ERROR,
  SIGN_UP_SUCCESS,
  VERIFY_EMAIL_CLICKED
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  error: false,
  valid: false,
  username: "",
  user: null,
  loading: false,
  errorMessage: "",
  signUpSuccessVar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SU_EMAIL_TYPED:
      return { ...state, email: action.payload };
    case SU_EMAIL_VALID:
      return { ...state, valid: action.payload };
    case SU_PASSWORD_TYPED:
      return { ...state, password: action.payload };
    case SU_USER_TYPED:
      return { ...state, username: action.payload };
    case SU_LOADING:
      return { ...state, loading: action.payload };
    case SIGN_UP_FAIL:
      return { ...state, errorMessage: action.payload, error: true };
    case SU_RESET_ERROR:
      return {
        ...state,
        error: false,
        email: "",
        password: "",
        confirmPassword: "",
        valid: false,
        username: "",
        user: null,
        loading: false,
        signUpSuccessVar: false
      };
    case SIGN_UP_SUCCESS:
      return { ...state, signUpSuccessVar: true, errorMessage: action.payload };
    case VERIFY_EMAIL_CLICKED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
