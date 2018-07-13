import { Permissions, Notifications } from 'expo';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2Z8Ib497wG_ulfPm7l8fQ_KOoucSbvj4",
  authDomain: "mgo1-89df1.firebaseapp.com",
  databaseURL: "https://mgo1-89df1.firebaseio.com",
  projectId: "mgo1-89df1",
  storageBucket: "gs://mgo1-89df1.appspot.com/",
  messagingSenderId: "503709806100"
};
firebase.initializeApp(config);

export default (async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
    console.log("NOPE!!!!NOPE!!!!NOPE");
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // userID = firebase.auth().currentUser.uid;
  firebase.auth().signInWithEmailAndPassword("ys1155@messiah.edu", "Password1").then(function() {
    userID = "pJWNhpXsj2R4TzhSxGEZAH2zrW52";

    firebase.database().ref('/users/' + userID).update({ token: token });
  });



  // POST the token to your backend server from where you can retrieve it to send push notifications.
  // return fetch(PUSH_ENDPOINT, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     token: {
  //       value: token,
  //     },
  //     user: {
  //       username: 'Brent',
  //     },
  //   }),
  // });
});
