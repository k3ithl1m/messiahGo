import React, { Component } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import firebase from "../../DataStorage/firebaseServices";
import { Button, Card, CardSection, NavBar } from "../common";
import goStyles from "../../Styling/goStyles";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileOptions from "./ProfileOptions";
import UserFeed from "./UserFeed";
import ProfileFooterButton from "./ProfileFooterButton";
import { editUsernameUpdate, editNameUpdate, isAdmin } from "../../actions";

var newUser;
const addEvent = require("../../Assets/AppIcon/add.png");

class Profile extends Component {
  state = { name: "", username: "", email: "", image: "", admin: false };

  componentWillMount() {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      firebase
        .database()
        .ref(`users/${currentUser.uid}/`)
        .on("value", snapshot => {
          console.log(snapshot.val().name, snapshot.val());
          var tempUsername = snapshot.val().username.replace("~", ".");
          this.setState({
            name: snapshot.val().name,
            username: tempUsername,
            email: snapshot.val().email,
            admin: snapshot.val().admin
          });
        });

      if (this.state.admin) {
        isAdmin(this.state.admin);
      } else {
        isAdmin(false);
      }

      // const imgRef = firebase.storage().ref(`profileImages/${currentUser.uid}`);
      // const dummyRef = firebase.storage().ref("profileImages/dummyImage.png");

      // imgRef
      //   .getDownloadURL()
      //   .then(img => {
      //     this.setState({ image: img });
      //   })
      //   .catch(() => {
      //     dummyRef.getDownloadURL().then(dummy => {
      //       this.setState({ image: dummy });
      //     });
      //
      // switch (error.code) {
      //   case "storage/object_not_found":
      //     console.log("Reference image does not exist.");
      //     break;
      //   case "storage/unauthorized":
      //     console.log("Unauthorized to access data.");
      //     break;
      //   case "storage/cancelled":
      //     console.log("Access cancelled.");
      //     break;
      //   case "storage/unknown":
      //     console.log("Unknown Error occurred.");
      //     break;
      // }
      // });
    } else {
      this.setState({
        name: this.props.name,
        username: this.props.username,
        email: this.props.email
      });
    }
  }

  editProfilePressed() {
    Actions.editProfile();
  }

  settingsPressed() {
    Actions.settings();
  }

  onAddEventPressed() {
    Actions.createEvent();
  }

  render() {
    const {
      profileContainerStyle,
      cardContainerStyle,
      infoContainerStyle
    } = styles;

    const { name, username, email, image, admin } = this.state;
    console.log("email " + this.props.username + "hey");
    this.props.editUsernameUpdate(username);
    this.props.editNameUpdate(name);
    return (
      <View style={profileContainerStyle}>
        <NavBar
          leftIcon={addEvent}
          onLeftPress={this.onAddEventPressed.bind(this)}
        >
          Settings
        </NavBar>
        <Card stylepass={cardContainerStyle}>
          {/*
          <ProfileImage image_url={image} />
          */}
          <ProfileInfo
            name={name}
            username={username}
            email={email}
            admin={admin}
          />
          <TouchableOpacity onPress={this.editProfilePressed.bind(this)}>
            <Text style={{ color: "white" }}>EditProfile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.settingsPressed.bind(this)}>
            <Text style={{ color: "white" }}>Settings</Text>
          </TouchableOpacity>
          <ScrollView>
            <UserFeed />
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = {
  profileContainerStyle: {
    flexDirection: "column",
    flex: 1
  },
  cardContainerStyle: {
    margin: 0,
    justifyContent: "space-around",
    backgroundColor: goStyles.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "column"
  }
};

const mapStateToProps = ({ userData }) => {
  const { name, username, uid, email } = userData;

  return {
    name,
    username,
    uid,
    email
  };
};

export default connect(mapStateToProps, {
  editUsernameUpdate,
  editNameUpdate,
  isAdmin
})(Profile);
