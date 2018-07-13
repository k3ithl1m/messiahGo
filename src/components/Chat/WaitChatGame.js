import React, { Component } from "react";
import { View, Text, StatusBar, TouchableHighlight } from "react-native";
import goStyles from "../../Styling/goStyles";
import { Actions } from "react-native-router-flux";

class WaitChatGame extends Component {
  onButtonPress() {}

  render() {
    return (
      <TouchableHighlight
        style={styles.containerStyle}
        onPress={this.onButtonPress.bind(this)}
      >
        <View style={styles.logoContainerStyle}>
          <StatusBar hidden />
          <Text allowFontScaling={false} style={styles.logo}>
            Messiah
            <Text allowFontScaling={false} style={styles.logoBold}>
              Go
            </Text>
          </Text>
          <Text style={goStyles.formSubText}>Late Night Chat is open</Text>
          <Text style={goStyles.formSubText}>from 10PM till 5AM</Text>
          <Text style={goStyles.formSubText}>
            Until then, you should go out,
          </Text>
          <Text style={goStyles.formSubText}>reproduce, and be fruitful</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: goStyles.background
  },
  logoContainerStyle: {
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    flexGrow: 1,
    alignItems: "center"
  },
  logo: {
    fontSize: 48,
    color: "white",
    fontWeight: "300"
  },
  logoBold: {
    fontWeight: "800",
    color: goStyles.primary
  },
  modalButton: {
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 80
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center"
  }
};

export default WaitChatGame;
