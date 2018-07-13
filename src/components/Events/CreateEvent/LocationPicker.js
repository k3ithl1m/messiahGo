import React, { Component } from "react";
import { View } from "react-native";
import { GooglePlacesInput } from "../../common";

class LocationPicker extends Component {
  render() {
    return (
      <View>
        <GooglePlacesInput />
      </View>
    );
  }
}

export default LocationPicker;
