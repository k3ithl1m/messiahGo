import firebase from "../../DataStorage/firebaseServices";
import { Actions } from "react-native-router-flux";
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  RESET_ERROR,
  USER_DATA,
  EMAIL_ISVERIFIED,
  FORGOT_PASSWORD,
  FORGOT_PASS_EMAIL
} from "../types";
import Backend from "../../Backend";

var userData = {
  userUid: "",
  userName: "",
  userPassword: "",
  userUsername: "",
  userEmailVerified: false,
  userChatId: ""
};

var forgotPasswordSuccessMessage =
  "Please follow the instruction on the email that has been sent to your messiah account";

export const usernameChanged = text => {
  return { type: USERNAME_CHANGED, payload: text };
};

export const forgotEmailChanged = text => {
  return { type: FORGOT_PASS_EMAIL, payload: text };
};

export const passwordChanged = text => {
  return { type: PASSWORD_CHANGED, payload: text };
};

export const loginUser = ({ username, password }) => {
  return dispatch => {
    //start the loading process to activate spinner
    loading(dispatch);

    // check if email has @messiah.edu
    var usernameCheck = username;
    var messiaheduCheck = usernameCheck.search(/@messiah.edu/i);

    var userOrEmail = usernameCheck.split();

    if (messiaheduCheck === -1 && userOrEmail[1] !== null) {
    } else if (messiaheduCheck === -1) {
      username = username + "@messiah.edu";
    }

    //while loading, this is being initiated
    //login the user with email and password
    // have to figure out how to use username
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        var tempUser = firebase.auth().currentUser;
        var isEmailVerified = {
          emailVerified: tempUser.emailVerified,
          errorMessage: "",
          error: false
        };
        if (isEmailVerified.emailVerified) {
          console.log("email is verified");
          dispatch({ type: EMAIL_ISVERIFIED, payload: isEmailVerified });
          loginSuccess(dispatch, user);
        } else {
          console.log("email is not verified");
          isEmailVerified.error = true;
          isEmailVerified.errorMessage =
            "Email is not verified. Please verify your email.";
          dispatch({ type: EMAIL_ISVERIFIED, payload: isEmailVerified });
        }
      })
      .catch(error => {
        console.log(error);
        loginFail(dispatch);
      });
  };
};

const loginSuccess = (dispatch, user) => {
  //append uid to backend so that the system
  //knows whos using
  var logUser = firebase.auth().currentUser;

  userData.userUid = logUser.uid;
  userData.userEmailVerified = logUser.emailVerified;

  firebase
    .database()
    .ref(`users/${logUser.uid}/`)
    .on("value", snapshot => {
      console.log(snapshot.val().name, snapshot.val());
      // uid = logUser.uid;

      name = snapshot.val().name;
      username = snapshot.val().username;
      email = snapshot.val().email;

      userData.userName = name;
      userData.userUsername = username.replace("~", ".");
      userData.userEmail = email;

      var splitEmail = email.split("@");

      userData.chatId = name + " " + splitEmail[0];
      console.log(userData.userUid);
      console.log(userData.userUsername);
      console.log(userData.userEmail);

      dispatch({ type: USER_DATA, payload: userData });
    });

  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  console.log("goto chat");
  Actions.Events();

  console.log("user email is verified:" + userData.userEmailVerified);
  console.log("went to Chat");
};

const loginFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loading = dispatch => {
  dispatch({ type: LOGIN_USER });
};

export const resetError = () => {
  return { type: RESET_ERROR };
};

const forgotPasswordFail = (dispatch, errorMessage) => {
  dispatch({ type: FORGOT_PASSWORD, payload: errorMessage });
};

export const forgotPassword = ({ email }) => {
  return dispatch => {
    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(function() {
        forgotPasswordFail(dispatch, forgotPasswordSuccessMessage);
        Actions.pop();
      })
      .catch(function(error) {
        forgotPasswordFail(dispatch, error.message);
      });
  };
};
