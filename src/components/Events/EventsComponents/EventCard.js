import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { updateEventDetails } from "../../../actions";
import {
  getDateInArray,
  getTimeInData,
  getFollowersNumber
} from "../../Functions";
import goStyles from "../../../Styling/goStyles";

const colors = [
  "#296F84",
  "#612984",
  "#AE3D9B",
  "#CF7542",
  "#CFB142",
  "#48C084"
];

const EventCard = ({ eventDetail, onPress }) => {
  const { name, location, date, image, time, followers } = eventDetail.details;
  const { organizedby, organizerimage } = eventDetail.createdby;

  var newDate = getDateInArray(date);
  var timeData = getTimeInData(time);
  var followersNumber = getFollowersNumber(followers);

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
      <View style={styles.leftContent}>
        <View style={styles.topInfo}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: organizerimage }}
          />
          <Text style={styles.organizedby}>{organizedby}</Text>
        </View>
        <View style={styles.bottomInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <View
        style={[styles.rightContent, { backgroundColor: goStyles.primary }]}
      >
        <Text style={styles.month}>{newDate.month}</Text>
        <Text style={styles.day}>{newDate.day}</Text>
        <Text style={styles.time}>
          {timeData.timeStart.complete}
          {timeData.timeEnd ? " - " + timeData.timeEnd.complete : ""}
        </Text>
        <Text style={styles.time}>{followersNumber}</Text>
        <Image
          style={styles.imageOverlay}
          source={require("../../../Styling/icons.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row"
  },
  thumbnailStyle: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  leftContent: {
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: 'yellow',
    padding: 20
    // width: '90%',
  },
  topInfo: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center'
    alignItems: "center"
  },
  organizedby: {
    fontSize: 10,
    marginLeft: 5
  },
  bottomInfo: {
    marginTop: 40
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5
  },
  location: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 5
  },
  rightContent: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden"
  },
  month: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    zIndex: 2,
    backgroundColor: "transparent"
  },
  day: {
    // fontFamily: 'Roboto',
    color: "white",
    fontWeight: "400",
    fontSize: 50,
    zIndex: 2,
    backgroundColor: "transparent"
  },
  time: {
    color: "white",
    fontWeight: "700",
    fontSize: 11,
    zIndex: 2,
    backgroundColor: "transparent"
  },
  imageOverlay: {
    opacity: 0.05,
    position: "absolute",
    width: "100%",
    height: "100%"
  }
};

export default EventCard;
