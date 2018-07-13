import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import ProfileOptions from "./ProfileOptions";

class Settings extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ProfileOptions />
        </ScrollView>
      </View>
    );
  }
}

export default Settings;
