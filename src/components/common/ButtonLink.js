import React from "react";
import { Text, TouchableHighlight } from "react-native";
import goStyles from "../../Styling/goStyles";

const ButtonLink = ({ onPress, children, color }) => {
  const { textStyle, touchStyle } = styles;
  return (
    <TouchableHighlight onPress={onPress} style={goStyles.listItem}>
      <Text style={[color, goStyles.listItemTextStyle]}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = {

};

export { ButtonLink };
