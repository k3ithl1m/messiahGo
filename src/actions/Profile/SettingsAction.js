import firebase from "../../DataStorage/firebaseServices";
import { Actions, ActionConst } from "react-native-router-flux";
import {
  NAME_UPDATE,
  USERNAME_UPDATE,
  USER_SETTINGS_SAVE,
  EP_RESET_ERROR,
  EP_SET_FAIL,
  USERNAME_NAME_UPDATE,
  IS_ADMIN
} from "../types";
import {
  isUsernameValid,
  inputUsernameToDatabase,
  usernameToLower
} from "../../components/Functions";

export const selectLibrary = libraryID => {
  return {
    type: "select_library",
    payload: libraryID
  };
};

export const isAdmin = admin => {
  return {
    type: IS_ADMIN,
    payload: admin
  };
};

export const nameUpdate = ({ name }) => {
  return {
    type: NAME_UPDATE,
    payload: name
  };
};

export const usernameUpdate = ({ username }) => {
  return {
    type: USERNAME_UPDATE,
    payload: username
  };
};

export const userSettingsSave = ({ name, username, initialUsername }) => {
  const { currentUser } = firebase.auth();

  username = usernameToLower(username);

  var userData = {
    username: "",
    name: "",
    chatId: ""
  };
  var email;
  firebase
    .database()
    .ref(`users/${currentUser.uid}/`)
    .on("value", snapshot => {
      email = snapshot.val().email;
    });

  var splitEmail = email.split("@");

  var errorMessage;
  return dispatch => {
    if (!isUsernameValid(username)) {
      errorMessage =
        "Username must be less than 18 characters and not have any special characters or white spaces";
      SetSettingsFail(dispatch, errorMessage);
    } else if (username === initialUsername.username) {
      // Only name is changing
      if (name.length < 2) {
        errorMessage =
          "Username must be less than 18 characters and not have any special characters or white spaces";
        SetSettingsFail(dispatch, errorMessage);
      } else {
        firebase
          .database()
          .ref(`/users/${currentUser.uid}/`)
          .update({
            name: name
          })
          .then(() => {
            dispatch({ type: USER_SETTINGS_SAVE });
            Actions.pop();
          })
          .catch(error => {
            errorMessage = error.message;
            SetSettingsFail(dispatch, errorMessage);
          });

        userData.name = name;
        userData.username = username;
        userData.chatId = name + " " + splitEmail[0];
        console.log(userData.chatId);
        dispatch({ type: USERNAME_NAME_UPDATE, payload: userData });
      }
    } else {
      //Check if username exists

      username = username.replace(".", "~");

      firebase
        .database()
        .ref("usernames")
        .once("value", function(snapshot) {
          if (snapshot.hasChild(username)) {
            console.log("this username exists");

            SetSettingsFail(
              dispatch,
              "This username exists, please try another one"
            );
          } else {
            console.log("does not exists");

            firebase
              .database()
              .ref(`usernames/${initialUsername.username}`)
              .remove();

            //Change the username and name
            firebase
              .database()
              .ref(`/users/${currentUser.uid}/`)
              .update({
                name: name,
                username: username
              })
              .then(() => {
                //Put it into username database
                inputUsernameToDatabase(username, currentUser.uid);

                dispatch({ type: USER_SETTINGS_SAVE });
                Actions.pop();
              })
              .catch(error => {
                errorMessage = error.message;
                SetSettingsFail(dispatch, errorMessage);
              });

            userData.name = name;
            userData.username = username;
            userData.chatId = name + " " + splitEmail[0];
            console.log(userData.chatId);
            dispatch({ type: USERNAME_NAME_UPDATE, payload: userData });
          }
        });
    }
  };
};

const SetSettingsFail = (dispatch, errorMessage) => {
  dispatch({ type: EP_SET_FAIL, payload: errorMessage });
};

export const resetEPError = () => {
  return { type: EP_RESET_ERROR };
};

export const editUsernameUpdate = text => {
  return { type: USERNAME_UPDATE, payload: text };
};

export const editNameUpdate = text => {
  return { type: NAME_UPDATE, payload: text };
};
