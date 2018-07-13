import firebase from "../../DataStorage/firebaseServices";
import { Actions } from "react-native-router-flux";
import { LOGOUT_SUCCESS } from "../types";

var errorCode, errorMessage;

export const signOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sign Out is a success");
        signOutSuccess(dispatch);
      })
      .catch(error => {
        errorCode = error.code;
        errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
      });
  };
};

const signOutSuccess = dispatch => {
  Actions.auth();
  dispatch({ type: LOGOUT_SUCCESS });
};
