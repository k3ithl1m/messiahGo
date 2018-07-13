import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { GoModal } from "../common/GoModal";
import LoginForm from "./LoginForm";
import goStyles from "../../Styling/goStyles";
import { DismissKeyboardAvoidingView } from "../common";

class LoginPage extends Component {
  render() {
    return (
      <DismissKeyboardAvoidingView>
        <StatusBar barStyle="light-content" />

        <View style={styles.logoContainerStyle}>
          <Text allowFontScaling={false} style={styles.logo}>
            Messiah
            <Text allowFontScaling={false} style={styles.logoBold}>
              GO
            </Text>
          </Text>
        </View>
        <View style={styles.loginFormStyle}>
          <LoginForm />
        </View>
      </DismissKeyboardAvoidingView>
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
  loginFormStyle: {
    justifyContent: "center"
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

export default LoginPage;
