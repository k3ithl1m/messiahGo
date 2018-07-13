import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { Spinner } from "../common";
import {
  usernameChanged,
  passwordChanged,
  loginUser,
  resetError
} from "../../actions";
import { GoModal } from "../common/GoModal";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import goStyles from "../../Styling/goStyles";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.error
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
      }, 1500);
      this.props.resetError();
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // just keeping track of the value of user
  onUsernameChanged(text) {
    this.props.usernameChanged(text);
  }

  // keep track of the value of the pasword
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  // sends the button request to authenticate user
  onButtonPress() {
    const { username, password, emailVerified, loading, error } = this.props;
    this.props.loginUser({ username, password });
  }

  onSignUpPress() {
    Actions.email();
  }

  onForgotPasswordPress() {
    Actions.forgotPassword();
  }

  // choose between loading (show a spinner) or just
  // idle, where login button is shown.
  onLoading() {
    if (this.props.loading) {
      return (
        <View style={goStyles.buttonStyle}>
          <Spinner size="large" />
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={goStyles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text allowFontScaling={false} style={goStyles.buttonTextStyle}>
            Login
          </Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <GoModal
          visible={this.state.modalVisible}
          onPress={this._setModalVisible.bind(this, false)}
        >
          {this.props.errorMessage}
        </GoModal>

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.5)"
          autoCapitalize="none"
          //Reducer Change statement
          onChangeText={this.onUsernameChanged.bind(this)}
          value={this.props.username}
        />
        <TextInput
          autoCorrect={false}
          style={goStyles.inputStyle}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry
          autoCapitalize="none"
          //Reducer helps change the password and returns value
          onChangeText={this.onPasswordChanged.bind(this)}
          value={this.props.password}
        />
        <View>{this.onLoading()}</View>

        <View style={{ marginBottom: 50 }}>
          <Text
            style={[goStyles.formSubTextAction, { marginTop: 5 }]}
            onPress={this.onForgotPasswordPress.bind(this)}
          >
            Forgot Password?
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 15,
            borderTopWidth: 1,
            borderColor: goStyles.primary
          }}
        >
          <Text style={goStyles.formSubText}>
            Do not have an account?{" "}
            <Text
              style={goStyles.formSubTextAction}
              onPress={this.onSignUpPress.bind(this)}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginLeft: 20,
    marginRight: 20
  }
};

const mapStateToProps = ({ auth }) => {
  const {
    username,
    password,
    loading,
    error,
    emailVerified,
    errorMessage
  } = auth;

  return {
    username,
    password,
    loading,
    error,
    emailVerified,
    errorMessage
  };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser,
  resetError
})(LoginForm);
