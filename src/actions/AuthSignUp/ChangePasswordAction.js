import firebase from "../../DataStorage/firebaseServices";
import { Actions } from "react-native-router-flux";
import {
  OLD_PASSWORD_UPDATE,
  NEW_PASSWORD_UPDATE,
  CONF_NEW_PASSWORD_UPDATE,
  USER_NEW_PASSWORD_SAVE,
  CHANGE_PASS_FAIL,
  CHANGE_PASS_RESET_ERROR
} from "../types";

function hasWhiteSpace(string) {
  return /\s/g.test(string);
}

function isPasswordValid(password) {
  if (password.length < 8 || hasWhiteSpace(password)) {
    return false;
  } else {
    return true;
  }
}

export const oldPasswordUpdate = old_password => {
  console.log(old_password);

  return {
    type: OLD_PASSWORD_UPDATE,
    payload: old_password
  };
};

export const newPasswordUpdate = new_password => {
  console.log(new_password);

  return {
    type: NEW_PASSWORD_UPDATE,
    payload: new_password
  };
};

export const confirmNewPasswordUpdate = conf_new_password => {
  console.log(conf_new_password);

  return {
    type: CONF_NEW_PASSWORD_UPDATE,
    payload: conf_new_password
  };
};

export const userPasswordSave = ({ oldPassword, newPassword }) => {
  const logUser = firebase.auth().currentUser;
  const email = logUser.email;
  console.log("USER:", logUser);
  console.log("EMAIL:", email);
  console.log("PASS:", newPassword);

  var newPassStr = newPassword;

  // firebase.database().ref(`users/${currentUser.uid}/`)
  // 	.on('value', (snapshot) => {
  // 		console.log(snapshot.val().name, snapshot.val());

  // 		const email = snapshot.val().email;
  // 	});

  // };
  // re-authenticate with old password. change password to new
  return dispatch => {
    if (!isPasswordValid(newPassword)) {
      console.log("password invalid");
      errorMessage =
        "Password must be more than 8 characters and not have any white space ";

      changePassFail(dispatch, errorMessage);
    } else {
      logUser
        .updatePassword(newPassStr)
        .then(() => {
          console.log("SUCCESS");
          console.log({ newPassStr });
          changePasswordSuccess(dispatch);
          Actions.pop();
        })
        .catch(error => {
          console.log(error);
          changePassFail(dispatch, error.message);
        });
    }
  };
};

const changePassFail = (dispatch, errorMessage) => {
  dispatch({ type: CHANGE_PASS_FAIL, payload: errorMessage });
};

const changePasswordSuccess = dispatch => {
  console.log("password changed");
  var cpSuccess = "You have successfully changed your password.";
  dispatch({ type: USER_NEW_PASSWORD_SAVE, payload: cpSuccess });
};

export const resetCPError = () => {
  return { type: CHANGE_PASS_RESET_ERROR };
};
