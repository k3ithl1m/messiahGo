import React, { Component } from "react";
import { View, Text } from "react-native";
import SignOutButton from "./SignOutButton";

class InformationPage extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <SignOutButton />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default InformationPage;
