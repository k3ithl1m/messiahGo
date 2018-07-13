import firebase from "../../DataStorage/firebaseServices";
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
} from "../types";
import { Actions } from "react-native-router-flux";
import {
  hasAtCharacter,
  hasSpecialCharacters,
  hasWhiteSpace,
  isPasswordValid,
  isUsernameValid,
  writeUserData,
  inputUsernameToDatabase,
  usernameToLower
} from "../../components/Functions";

var errorCode;
var errorMessage;

var signUpSuccessMessage =
  "Sign Up successful! We've sent an email to you to verify your account";

export const signUpEmail = text => {
  return { type: SU_EMAIL_TYPED, payload: text };
};

export const signUpUser = text => {
  return { type: SU_USER_TYPED, payload: text };
};

export const signUpPassword = text => {
  return { type: SU_PASSWORD_TYPED, payload: text };
};

export const emailValidation = text => {
  if (hasAtCharacter(text)) {
    // split email string by that '@'
    var check = text.split("@");

    // check if the email ends with messiah.edu, and sends
    // true or false to valid.
    if (check[1].toLowerCase() === "messiah.edu") {
      console.log("this is messiah.edu");
      return { type: SU_EMAIL_VALID, payload: true };
    } else {
      return { type: SU_EMAIL_VALID, payload: false };
    }
  } else {
    return { type: SU_EMAIL_VALID, payload: false };
  }
};

export const signUpAuthentication = ({ email, password, username }) => {
  /*
  Checks the validity of the username, and then the password.
  It then tries to sign the user up, however, if the user name has
  been taken, then it gives an error
 */
  return dispatch => {
    loading(dispatch);
    // create an account
    username = usernameToLower(username);
    if (!isUsernameValid(username)) {
      console.log("username invalid");

      errorMessage =
        "Username must be less than 18 characters, more than 4 characters and not have any special characters or white spaces";
      signUpFail(dispatch, errorMessage);
    } else if (!isPasswordValid(password)) {
      console.log("password invalid");
      errorMessage =
        "Password must be more than 8 characters and not have any white space ";
      signUpFail(dispatch, errorMessage);
    } else {
      // cannot use username = username.replace ... because
      // the function runs once, and checks the whole thing,
      // before it runs the real thing.
      var usernameStore = username.replace(".", "~");

      //Check if username exists
      firebase
        .database()
        .ref("usernames")
        .once("value", function(snapshot) {
          if (snapshot.hasChild(usernameStore)) {
            console.log("this username exists");

            signUpFail(
              dispatch,
              "This username exists, please try another one"
            );
          } else {
            console.log("does not exists");

            //register user
            firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(function(user) {
                user = firebase.auth().currentUser;
                console.log(user);

                writeUserData(user.uid, usernameStore, email);
                inputUsernameToDatabase(usernameStore, user.uid);
                //stores username, name, email, password, username
                //  storeInFirebase(user.uid, username, email, password, username);

                user
                  .sendEmailVerification()
                  .then(function() {
                    console.log("email sent");
                  })
                  .catch(function(error) {
                    console.log(error);
                  });

                dispatch({
                  type: SIGN_UP_SUCCESS,
                  payload: signUpSuccessMessage
                });
              })
              .catch(error => {
                errorCode = error.code;
                errorMessage = error.message;
                console.log(error.code);
                console.log(error.message);
                signUpFail(dispatch, errorMessage);
              });
          }
        });
    }
  };
};

const signUpFail = (dispatch, errorMessage) => {
  dispatch({ type: SIGN_UP_FAIL, payload: errorMessage });
};

const loading = dispatch => {
  dispatch({ type: SU_LOADING });
};

export const signUpSuccess = () => {
  Actions.auth();
  return { type: VERIFY_EMAIL_CLICKED };
};

const storeInFirebase = (userId, name, email, password, username) => {
  firebase
    .database()
    .ref(`users/${userId}/`)
    .update({
      name: name,
      email: email,
      password: password,
      username: username
    });

  console.log("USER: ", userId);
};

export const resetSUError = () => {
  return { type: SU_RESET_ERROR };
};
