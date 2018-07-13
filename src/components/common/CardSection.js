import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return (
    <View style={props.stylepass || styles.containerStyle }>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
};

export { CardSection };
