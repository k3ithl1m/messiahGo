import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { signUpEmail, emailValidation } from "../../actions";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { GoModal } from "../common/GoModal";
import goStyles from "../../Styling/goStyles";

class SignUpForm extends Component {
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
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onEmailChanged(text) {
    this.props.signUpEmail(text);
    this.props.emailValidation(text);
  }

  onPressLogin() {
    Actions.auth();
  }

  onNextPressed() {
    const { email, valid } = this.props;
    if (valid === true) {
      Actions.userAndPass();
    } else {
      console.log("not Messiah email");
      this.setState({ modalVisible: true });
    }
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

        <Text style={goStyles.formHeader}> Email </Text>

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
          onPress={this.onNextPressed.bind(this)}
        >
          <Text style={goStyles.buttonTextStyle}>Next</Text>
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

const mapStateToProps = ({ signUp }) => {
  const { email, valid, loading } = signUp;

  return {
    email,
    valid
  };
};

export default connect(mapStateToProps, {
  signUpEmail,
  emailValidation
})(SignUpForm);
