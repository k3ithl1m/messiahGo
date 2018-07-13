import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { textStyle, touchStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={touchStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: "600",
    alignSelf: "center",
    color: "#fff"
  },
  touchStyle: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    alignSelf: "stretch",
    backgroundColor: "#007aff"
  }
};

export { Button };
