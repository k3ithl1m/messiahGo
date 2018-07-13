import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  getDateInArray,
  getTimeInData,
  getFollowersNumber,
  updateFollowers,
  renderUsersWhoFollowedString
} from "../Functions";
import goStyles from "../../Styling/goStyles";

var cancelImage = require("../../Styling/Pictures/close.png");
var addEvents = require("../../Assets/AppIcon/addEvents.png");
var followed = require("../../Assets/AppIcon/followed.png");

const colors = [
  "#296F84",
  "#612984",
  "#AE3D9B",
  "#CF7542",
  "#CFB142",
  "#48C084"
];

class EventDetails extends Component {
  state = {
    followedAlready: false,
    followers: this.props.events.details.followers
  };
  onPress() {
    Actions.pop();
  }

  onFollowPressed() {
    this.setState({ followedAlready: !this.state.followedAlready });
    console.log("follow button pressed");
    updateFollowers(0, "hayne", "dane");
  }

  onUserWhoIsGoingPressed() {
    Actions.eventDetails();
  }

  //if user hasn't followed, show add, else show tick
  haveUserFollowed() {
    if (!this.state.followedAlready) {
      return <Image source={addEvents} />;
    } else {
      return <Image source={followed} />;
    }
  }

  render() {
    const {
      name,
      location,
      date,
      image,
      description,
      type,
      url,
      time,
      followers
    } = this.props.events.details;
    const {
      username,
      organizedby,
      organizerimage
    } = this.props.events.createdby;

    var followersNumber = getFollowersNumber(followers);

    var newDate = getDateInArray(date);
    var whosFollowing = renderUsersWhoFollowedString(followers);
    return (
      <ScrollView style={{ flex: 1, backgroundColor: goStyles.background }}>
        <View style={{ padding: 30 }}>
          <View>
            <View style={styles.cancelBox}>
              <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                <Image style={styles.cancelStyle} source={cancelImage} />
              </TouchableWithoutFeedback>
            </View>
            <View
              style={[
                styles.headerSection,
                {
                  backgroundColor: goStyles.background
                }
              ]}
            >
              <View style={styles.organizerInfo}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{ uri: organizerimage }}
                />
                <Text style={styles.organizedby}>{organizedby}</Text>
              </View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.location}>{location}</Text>
            </View>
            <View style={styles.dateSection}>
              <Text style={styles.month}>{newDate.month}</Text>
              <Text style={styles.day}>{newDate.day}</Text>
              <Text style={styles.time}>{time}</Text>
            </View>

            <View>
              <Text style={styles.location}>{followersNumber}</Text>
              <TouchableOpacity onPress={this.onFollowPressed.bind(this)}>
                {this.haveUserFollowed()}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onUserWhoIsGoingPressed.bind(this)}
              >
                <View style={styles.dateSection}>
                  <Text style={styles.day}>{whosFollowing}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*<Text>{newDate.day}</Text>
            <Text>{newDate.month}</Text>
            <Image
              style={styles.imageOverlay}
              source={require("../../Styling/icons.png")}
            />*/}
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.descriptionStyle}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  headerSection: {
    height: 400,
    // padding: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  organizerInfo: {
    flexDirection: "row",
    alignItems: "center"
    // marginBottom: 10
  },
  organizedby: {
    fontSize: 10,
    marginLeft: 5,
    color: "white"
  },
  thumbnailStyle: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  name: {
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 5,
    color: "white",
    textAlign: "center"
  },
  location: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 5,
    color: "white",
    textAlign: "center"
  },
  descriptionStyle: {
    marginBottom: 5,
    color: "white"
  },
  imageOverlay: {
    opacity: 0.05,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  lowerSection: {
    // padding: 30,
    // backgroundColor: goStyles.background
  },
  cancelStyle: {
    // marginTop: 20,
    // marginLeft: 20,
    height: 25,
    width: 25
  },
  cancelBox: {
    backgroundColor: goStyles.background
  },
  dateSection: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 30,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  month: {
    color: "white",
    fontSize: 14,
    flex: 1,
    fontWeight: "700"
  },
  day: {
    color: "white",
    fontSize: 46,
    textAlign: "center",
    // backgroundColor: 'red',
    flex: 1,
    fontWeight: "300"
  },
  time: {
    flex: 1,
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "right"
  }
};

const mapStateToProps = ({ eventDetail, userData }) => {
  const { events } = eventDetail;
  const { username, name } = userData;

  return {
    events,
    username,
    name
  };
};

export default connect(mapStateToProps, {})(EventDetails);
