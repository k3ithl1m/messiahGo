/**
  * Functions included:
  *
  * getDateInArray - get the date and put in array
  * getTimeInData - get start and end time
  * amOrPm
  * hourInTwelve
  * getTimeData - put data of time into a data form
  * hasDatePassed - check whether the date has passed
  */

var month = new Object();

month["1"] = "January";
month["2"] = "February";
month["3"] = "March";
month["4"] = "April";
month["5"] = "May";
month["6"] = "June";
month["7"] = "July";
month["8"] = "August";
month["9"] = "September";
month["10"] = "October";
month["11"] = "November";
month["12"] = "December";

// hasDatePassed takes in two arguments
// and checks whether the date has passed

export function hasDatePassed(eventDate, currentDate) {
  // eventDateArray 0 = year, 1 = month, 2 = day
  var eventDateArray = eventDate.split("-");
  var currentDateArray = currentDate.split("-");
  //check the year if it is bigger;
  if (eventDateArray[0] >= currentDateArray[0]) {
    //check the month of the event, if it is bigger than the
    //current month then return that the date has not passed
    if (eventDateArray[1] > currentDateArray[1]) {
      return true;
    } else if (eventDateArray[1] === currentDateArray[1]) {
      if (eventDateArray[2] >= currentDateArray[2]) {
        return true;
      }
    }
  }
  console.log("there is a false");
  return false;
}

export function getDateInArray(date) {
  var newDate = {
    day: "",
    month: "",
    year: ""
  };

  var dateArray = date.split("-");
  newDate.day = dateArray[2];
  newDate.month = month[dateArray[1]];
  newDate.year = dateArray[0];
  return newDate;
}

//Check to see if there is an end time.
// We need to display the time in twelve hour form
// showing am or pm.
// if the minutes is 0, then show hour only
// For Example {
//  9 PM
//  10.30 PM - 12 AM (00 has to be changed to 12)
// }
// Set it so that we receive a data of time
// startTime, endTime
// both time data has hours, minutes, amOrPm, and also
// complete time.

export function getTimeInData(time) {
  var timeStartAndEnd = {
    timeStart: null,
    timeEnd: null
  };

  if (time !== null) {
    // if the time has an end time
    if (time.indexOf("-") > -1) {
      var timeArray = time.split("-");
      timeStartAndEnd.timeStart = getTimeData(timeArray[0]);
      timeStartAndEnd.timeEnd = getTimeData(timeArray[1]);

      return timeStartAndEnd;
    } else {
      timeStartAndEnd.timeStart = getTimeData(time);
      return timeStartAndEnd;
    }
  } else {
    return false;
  }
}

// Parse the hour into the function to get the time
// in twelve hour form. Then include am and pm.

function amOrPm(hour) {
  if (hour > 11) {
    return "PM";
  } else {
    return "AM";
  }
}

function hourInTwelve(hour) {
  var intHour = parseInt(hour);
  if (intHour > 12) {
    return intHour - 12;
  } else {
    return intHour;
  }
}

function getTimeData(time) {
  var timeData = {
    hour: "",
    minute: "",
    amOrPm: "",
    complete: ""
  };
  // debugger;
  var timeArray = time.split(":");
  timeData.hour = hourInTwelve(timeArray[0]);
  timeData.minute = timeArray[1];
  timeData.amOrPm = amOrPm(timeArray[0]);
  if (parseInt(timeData.minute) === 0) {
    var completeTimeStr = timeData.hour + " " + timeData.amOrPm;
  } else {
    var completeTimeStr =
      timeData.hour + "." + timeData.minute + " " + timeData.amOrPm;
  }

  timeData.complete = completeTimeStr;

  return timeData;
}

// get the amount of followers
// for getting length of object:
// stackoverflow.com/questions/10563251/length-of-a-javascript-associative-array
export function getFollowersNumber(follower) {
  if (follower) {
    return Object.keys(follower).length;
  } else {
    return 0;
  }
}

export function renderUsersWhoFollowedString(follower) {
  if (follower) {
    var firstThreeFollowers = "Followed by ";
    var amountOfFollowers = Object.keys(follower).length;
    for (var i = 0; i < 3; i++) {
      firstThreeFollowers = firstThreeFollowers + Object.keys(follower)[i];
      if (Object.keys(follower)[i + 1]) {
        firstThreeFollowers = firstThreeFollowers + ", ";
      }
    }

    if (Object.keys(follower)[3]) {
      var amountOfFollowersLessThree = amountOfFollowers - 3;

      if (amountOfFollowersLessThree === 1) {
        firstThreeFollowers =
          firstThreeFollowers + "and " + (amountOfFollowers - 3) + " other";
      } else {
        firstThreeFollowers =
          firstThreeFollowers + "and " + (amountOfFollowers - 3) + " others";
      }
    }
    return firstThreeFollowers;
  } else {
    return null;
  }
}
