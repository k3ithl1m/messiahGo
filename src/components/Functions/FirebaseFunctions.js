import firebase from "../../DataStorage/firebaseServices";
var database = firebase.database();
// referred from
// https://firebase.google.com/docs/database/web/read-and-write

export function writeUserData(userId, username, email) {
  var name = username.replace("~", ".");
  database.ref(`users/` + userId).set({
    username: username,
    email: email,
    name: name
  });
}

export function inputUsernameToDatabase(username, userId) {
  usernameRef = database.ref(`usernames/` + username);
  usernameRef.push({
    uid: userId
  });
}

export function updateFollowers(databaseRef, userId, username) {
  var followersRef = database.ref(
    `events/events/${databaseRef}/details/followers/` + username
  );
  followersRef.push({
    uid: userId
  });
}
