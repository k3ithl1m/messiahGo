import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  signUpUser,
  signUpPassword,
  signUpAuthentication,
  resetSUError,
  signUpSuccess
} from "../../actions";
import { GoModal, GoModalBar } from "../common/GoModal";
import { Spinner } from "../common";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import goStyles from "../../Styling/goStyles";

class UserAndPassForm extends Component {
  state = {
    modalVisible: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
      }, 1500);
      this.props.resetSUError();
    } else if (nextProps.signUpSuccessVar) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
        Actions.auth();
      }, 1500);
      this.props.resetSUError();
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    if (this.props.signUpSuccessVar) {
      this.props.signUpSuccess();
    }
  }

  onPressLogin() {
    Actions.auth();
  }

  onUsernameChanged(usernameChanged) {
    this.props.signUpUser(usernameChanged);
  }

  onPasswordChanged(text) {
    this.props.signUpPassword(text);
  }

  onButtonPress() {
    const { email, password, username } = this.props;

    this.props.signUpAuthentication({ email, password, username });
  }

  onLoading() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <TouchableOpacity
          style={goStyles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={goStyles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {/*
      {renderIf(this.state.status) (
        <GoModalBar>
            This username is already in use
        </GoModalBar>
      )}
*/}

        <GoModal
          visible={this.state.modalVisible}
          onPress={this._setModalVisible.bind(this, false)}
        >
          {this.props.errorMessage}
        </GoModal>

        <Text style={goStyles.formHeader}>Username and Password</Text>

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={this.onUsernameChanged.bind(this)}
          placeholderTextColor="rgba(255,255,255,0.7)"
          maxLength={15}
        />

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Password"
          onChangeText={this.onPasswordChanged.bind(this)}
          placeholderTextColor="rgba(255,255,255,0.7)"
        />

        <View>{this.onLoading()}</View>

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

const mapStateToProps = ({ signUp }) => {
  const {
    password,
    username,
    loading,
    error,
    email,
    errorMessage,
    signUpSuccessVar
  } = signUp;

  return {
    password,
    username,
    loading,
    error,
    email,
    errorMessage,
    signUpSuccessVar
  };
};

export default connect(mapStateToProps, {
  signUpUser,
  signUpPassword,
  signUpAuthentication,
  resetSUError,
  signUpSuccess
})(UserAndPassForm);
