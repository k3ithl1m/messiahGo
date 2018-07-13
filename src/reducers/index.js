//reducer has to be function
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SignUpReducers from "./SignUpReducers";
import SettingsReducers from "./SettingsReducers";
import UserDataReducers from "./UserDataReducers";
import ChangePasswordReducer from "./ChangePasswordReducer";
import ChatSystemData from "./ChatSystemReducer";
import EventsDetails from "./EventsReducer";
import CreateEvent from "./CreateEventReducer";

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducers,
  settings: SettingsReducers,
  userData: UserDataReducers,
  changePassword: ChangePasswordReducer,
  chatData: ChatSystemData,
  eventDetail: EventsDetails,
  createEvent: CreateEvent
});
