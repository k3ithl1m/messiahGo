import { TIME_VALUE, DATE_VALUE } from "../types";
import { timeZoneDBAPI } from "../../Assets/API/APIKeys";
import axios from "axios";

var timeZoneURI =
  "http://api.timezonedb.com/v2/get-time-zone?key=" +
  timeZoneDBAPI +
  "&format=json&by=zone&zone=America/New_York";

export function getTimeValue() {
  return function(dispatch) {
    var timeValue;
    axios
      .get(timeZoneURI)
      .then(({ data }) => {
        var getDate = data.formatted.split(" ");
        var getHour = getDate[1].split(":");
        timeValue = getHour[0];
        console.log(timeValue);
        dispatch({
          type: TIME_VALUE,
          payload: timeValue
        });

        dispatch({
          type: DATE_VALUE,
          payload: getDate[0]
        });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });

    // console.log("this is" + timeValue);
    // return {
    //   type: TIME_VALUE,
    //   payload: timeValue
    // };
  };
}
