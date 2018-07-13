import React, { Component } from "react";
import UserAndPassForm from "./UserAndPassForm";
import goStyles from "../../Styling/goStyles";
import { DismissKeyboardAvoidingView } from "../common";

class CreateUserAndPass extends Component {
  render() {
    return (
      <DismissKeyboardAvoidingView>
        <UserAndPassForm />
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

export default CreateUserAndPass;
