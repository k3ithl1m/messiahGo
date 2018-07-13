import firebase from "../../DataStorage/firebaseServices";
import {
  EVENT_PAGE_DETAILS_UPDATE,
  CREATE_DATE_CHANGED,
  CREATE_TIME_CHANGED,
  CREATE_LOCATION_CHANGED,
  CREATE_DESCRIPTION_CHANGED,
  CREATE_NAME_CHANGED,
  CREATE_EVENT
} from "../types";

var testFB = firebase.database().ref(`events`);

export const updateEventDetails = events => {
  console.log(events);
  return { type: EVENT_PAGE_DETAILS_UPDATE, payload: events };
};

export const createDateChanged = date => {
  return { type: CREATE_DATE_CHANGED, payload: date };
};

export const createTimeChanged = time => {
  return { type: CREATE_TIME_CHANGED, payload: time };
};

export const createLocationChanged = location => {
  return { type: CREATE_LOCATION_CHANGED, payload: location };
};

export const createDescriptionChanged = description => {
  return { type: CREATE_DESCRIPTION_CHANGED, payload: description };
};

export const createNameOfEventChanged = name => {
  return { type: CREATE_NAME_CHANGED, payload: name };
};

export const createEvent = ({
  name,
  date,
  time,
  location,
  description,
  username,
  uid
}) => {
  console.log(name);
  console.log(date);
  console.log(time);
  console.log(location);
  console.log(description);
  console.log(username);

  var timeArraySplitWithAMPM = time.split(" ");
  var getTheHourAndMinute = timeArraySplitWithAMPM[0].split(":");

  if (getTheHourAndMinute[0] !== "12") {
    if (timeArraySplitWithAMPM[1] === "pm") {
      getTheHourAndMinute[0] = getTheHourAndMinute[0] + 12;
    }
  } else {
    if (timeArraySplitWithAMPM[1] === "am") {
      getTheHourAndMinute[0] = "00";
    }
  }

  var timeStart = getTheHourAndMinute[0] + ":" + getTheHourAndMinute[1];

  var dateInArray = date.split("-");
  var dateValue =
    dateInArray[0] +
    dateInArray[1] +
    dateInArray[2] +
    getTheHourAndMinute[0] +
    getTheHourAndMinute[1];

  // get the reference to the users firebase, it then pushes
  // the id and make a database set and id,
  // we take the new events id and put it into the set.
  // we then push all the information into firebase.
  // https://stackoverflow.com/questions/38768576/in-firebase-when-using-push-how-do-i-get-the-unique-id-and-store-in-my-databas
  var eventsFBRef = firebase
    .database()
    .ref(`users/${uid}`)
    .child("events");

  var newPostEvent = eventsFBRef.push();

  var postEventID = newPostEvent.key;
  var newPostItem = {
    name: name,
    date: date,
    time: timeStart,
    location: location,
    description: description,
    eventid: newPostEvent.key,
    dateValue: dateValue,
    user: {
      name: username,
      _id: uid
    }
  };
  newPostEvent.set(newPostItem);

  console.log(postEventID);

  // gotta push it onto events page too so that explore has it.
  // gotta think of how to manipulate it if we want to change it.
  // if user wants to edit events.

  testFB.push().set(newPostItem);
  return { type: CREATE_EVENT, payload: name };
};
