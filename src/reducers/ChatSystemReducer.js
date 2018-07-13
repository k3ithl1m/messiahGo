import { TIME_VALUE, DATE_VALUE } from "../actions/types";

const INITIAL_STATE = {
  time: null,
  date: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_VALUE:
      return { ...state, time: action.payload };
    case DATE_VALUE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
