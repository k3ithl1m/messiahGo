import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { Actions } from "react-native-router-flux";
import goStyles from "../../Styling/goStyles";
import { DismissKeyboardAvoidingView } from "../common";

class SignUpPage extends Component {
  render() {
    return (
      <DismissKeyboardAvoidingView>
        <SignUpForm />
      </DismissKeyboardAvoidingView>
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

export default SignUpPage;
