import { View, TouchableWithoutFeedback } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ButtonIcon = ({ onPress, onPicked }) => {
  // check-circle
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
      }}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon name={this.props.barIconName || "plus-circle"} size={26} />
      </TouchableWithoutFeedback>r
    </View>
  );
};

export { ButtonIcon };
