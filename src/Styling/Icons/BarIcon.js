import { View } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

class BarIcon extends Component {
  render() {
    var color = this.props.selected ? "#301c2a" : "#A3A1FF";

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
          name={this.props.barIconName || "circle"}
          size={26}
        />
      </View>
    );
  }
}

export default BarIcon;
