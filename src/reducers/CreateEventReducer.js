import {
  CREATE_DATE_CHANGED,
  CREATE_TIME_CHANGED,
  CREATE_LOCATION_CHANGED,
  CREATE_DESCRIPTION_CHANGED,
  CREATE_NAME_CHANGED,
  CREATE_EVENT
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  date: "",
  time: "",
  location: "",
  description: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TIME_CHANGED:
      return { ...state, time: action.payload };
    case CREATE_LOCATION_CHANGED:
      return { ...state, location: action.payload };
    case CREATE_NAME_CHANGED:
      return { ...state, name: action.payload };
    case CREATE_DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    case CREATE_DATE_CHANGED:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
