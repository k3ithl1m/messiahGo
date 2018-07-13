import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { forgotEmailChanged, forgotPassword, resetError } from "../../actions";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { GoModal } from "../common/GoModal";
import goStyles from "../../Styling/goStyles";

class ForgotPasswordForm extends Component {
  state = {
    modalVisible: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
        Actions.auth();
      }, 1500);
      this.props.resetError();
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onEmailChanged(text) {
    this.props.forgotEmailChanged(text);
  }

  onPressSendEmail() {
    // Send Email to reset password here
    const { email } = this.props;
    this.props.forgotPassword({ email });
    // Actions.auth();
  }

  onPressLogin() {
    Actions.auth();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar barStyle="light-content" />

        <GoModal
          visible={this.state.modalVisible}
          onPress={this._setModalVisible.bind(this, false)}
        >
          Email must be a valid Messiah College email.
        </GoModal>

        <Text style={goStyles.formHeader}> Forgot Password? </Text>

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={this.onEmailChanged.bind(this)}
          placeholderTextColor="rgba(255,255,255,0.7)"
        />

        <TouchableOpacity
          style={goStyles.buttonStyle}
          onPress={this.onPressSendEmail.bind(this)}
        >
          <Text style={goStyles.buttonTextStyle}>Send Email</Text>
        </TouchableOpacity>

        <Text style={goStyles.formSubText}>Already have an account? </Text>
        <Text
          onPress={this.onPressLogin.bind(this)}
          style={goStyles.formSubTextAction}
        >
          Login
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    padding: 4,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    justifyContent: "center"
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, error, errorMessage } = auth;

  return {
    email,
    error,
    errorMessage
  };
};

export default connect(mapStateToProps, {
  forgotEmailChanged,
  forgotPassword,
  resetError
})(ForgotPasswordForm);
