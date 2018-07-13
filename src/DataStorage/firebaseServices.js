import firebase from "firebase";

//Real App
// const config = {
//   apiKey: "AIzaSyB2Z8Ib497wG_ulfPm7l8fQ_KOoucSbvj4",
//   authDomain: "mgo1-89df1.firebaseapp.com",
//   databaseURL: "https://mgo1-89df1.firebaseio.com",
//   projectId: "mgo1-89df1",
//   storageBucket: "gs://mgo1-89df1.appspot.com/",
//   messagingSenderId: "503709806100"
// };
// firebase.initializeApp(config);

//testing
const config = {
  apiKey: "AIzaSyCmOBCvKdFPEo1eOK3nkkaPL99r2cabdCA",
  authDomain: "mgotest-ee717.firebaseapp.com",
  databaseURL: "https://mgotest-ee717.firebaseio.com",
  projectId: "mgotest-ee717",
  storageBucket: "mgotest-ee717.appspot.com",
  messagingSenderId: "57719723749"
};
firebase.initializeApp(config);

// firebase
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//   .then(function() {
//     console.log("persist Made");
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

export default firebase;
