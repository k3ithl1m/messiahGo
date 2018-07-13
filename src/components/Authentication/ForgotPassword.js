import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  Modal
} from "react-native";
import { GoModal } from "../common/GoModal";
import ForgotPasswordForm from "./ForgotPasswordForm";
import goStyles from "../../Styling/goStyles";

class LoginPage extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <ForgotPasswordForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: goStyles.background,
    justifyContent: "center"
  }
};

export default LoginPage;
