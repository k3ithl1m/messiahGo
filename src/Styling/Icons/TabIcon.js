import { View } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import goStyles from "../goStyles";

class TabIcon extends Component {
  render() {
    var color = this.props.focused ? goStyles.secondary : goStyles.primary;

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
        <Icon
          style={{ color: color }}
          name={this.props.iconName || "circle"}
          size={26}
        />
      </View>
    );
  }
}

export default TabIcon;
