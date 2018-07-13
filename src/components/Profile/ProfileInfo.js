import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import firebase from "../../DataStorage/firebaseServices";
import { Button, Card, CardSection } from "../common";
import goStyles from "../../Styling/goStyles";

const ProfileInfo = ({ name, username, email, admin }) => {
  function adminOrNot() {
    if (admin) {
      return <Text style={nameTextStyle}>{name} @</Text>;
    } else {
      return <Text style={nameTextStyle}>{name}</Text>;
    }
  }

  const {
    textContainerStyle,
    nameTextStyle,
    userTextStyle,
    userLabelStyle
  } = styles;

  return (
    <View style={textContainerStyle}>
      {/*
        */}
      <View style={styles.infoGroup}>{adminOrNot()}</View>
      <View style={styles.infoGroup}>
        <Text style={userLabelStyle}>Username</Text>
        <Text style={userTextStyle}> @{username} </Text>
      </View>
      <View style={styles.infoGroup}>
        <Text style={userLabelStyle}>Email</Text>
        <Text style={userTextStyle}>{email}</Text>
      </View>
    </View>
  );
};

const styles = {
  infoGroup: {
    alignItems: "flex-start",
    marginBottom: 20
  },
  textContainerStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 15
  },
  h1: {
    fontSize: 40,
    fontWeight: "600",
    color: goStyles.secondary,
    paddingLeft: 20
  },
  nameTextStyle: {
    fontSize: 45,
    paddingTop: 5,
    fontWeight: "400",
    alignSelf: "center",
    color: "#fff"
  },
  userTextStyle: {
    fontSize: 16,
    color: "white",
    paddingBottom: 10
  },
  userLabelStyle: {
    fontSize: 12,
    color: goStyles.secondary
  }
};

export default ProfileInfo;
