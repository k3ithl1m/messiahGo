import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import goStyles from "../../Styling/goStyles";

var unknownUser = require("../../Assets/UserImage/unknownUser.jpg");

const ProfileImage = ({ image_url }) => {
  const { imgContainerStyle, imgStyle } = styles;
  if (image_url === null) {
    return (
      <View style={imgContainerStyle}>
        <Image style={imgStyle} source={unknownUser} />
      </View>
    );
  } else {
    return (
      <View style={imgContainerStyle}>
        <Image style={imgStyle} source={{ uri: image_url }} />
      </View>
    );
  }
};

const styles = {
  imgContainerStyle: {
    justifyContent: "flex-start",
    margin: 0,
    marginVertical: 15
    // height: 120,
    // backgroundColor: 'green'
  },
  imgStyle: {
    flexDirection: "row",
    alignSelf: "center",
    height: 90,
    width: 90,
    margin: 0,
    padding: 0,
    borderRadius: 45
  }
};

export default ProfileImage;
