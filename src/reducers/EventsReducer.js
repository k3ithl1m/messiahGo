import { EVENT_PAGE_DETAILS_UPDATE } from "../actions/types";

const INITIAL_STATE = {
  events: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_PAGE_DETAILS_UPDATE:
      return { ...state, events: action.payload };

    default:
      return state;
  }
};
