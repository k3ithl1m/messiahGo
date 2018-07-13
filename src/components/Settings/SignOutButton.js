import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { signOut } from "../../actions";

class SignOutButton extends Component {
  onSignOutPress() {
    this.props.signOut();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={this.onSignOutPress.bind(this)}
        >
          <Text style={styles.textStyle}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#046ad9",
    backgroundColor: "#007aff"
  },
  containerStyle: {
    padding: 40
  }
};

export default connect(null, {
  signOut
})(SignOutButton);
