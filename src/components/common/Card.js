import React from "react";
import { View } from "react-native";

const Card = props => {
  return (
    <View style={ props.stylepass || styles.containerStyle }>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    shadowColor: "#000",
    borderColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    borderBottomWidth: 0,
    shadowOpacity: 0.1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.8
  }
};

export { Card };
