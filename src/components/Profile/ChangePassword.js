import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { GoModal } from "../common/GoModal";
import { Button, Card, CardSection } from "../common";
import goStyles from "../../Styling/goStyles";
import ProfileFooterButton from "./ProfileFooterButton";
import ProfileImage from "./ProfileImage";
import {
  oldPasswordUpdate,
  newPasswordUpdate,
  confirmNewPasswordUpdate,
  userPasswordSave,
  resetCPError
} from "../../actions";

class ChangePassword extends Component {
  state = {
    modalVisible: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error || nextProps.success) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
      }, 1500);
      this.props.resetCPError();
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onButtonPress() {
    const { oldPassword, newPassword, confNewPassword } = this.props;

    console.log("PASS_WORDS");
    console.log(oldPassword, newPassword, confNewPassword);

    this.props.userPasswordSave({ oldPassword, newPassword });
  }

  onOldPasswordChanged(text) {
    this.props.oldPasswordUpdate(text);
  }

  onNewPasswordChanged(text) {
    this.props.newPasswordUpdate(text);
  }

  onConfirmNewPasswordChanged(text) {
    this.props.confirmNewPasswordUpdate(text);
  }

  renderButton() {
    // TODO later
    return (
      <TouchableOpacity
        style={goStyles.buttonStyle}
        onPress={this.onButtonPress.bind(this)}
      >
        <Text allowFontScaling={false} style={goStyles.buttonTextStyle}>
          Done
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.outContainerStyle}>
        <View style={styles.containerStyle}>
          <GoModal
            visible={this.state.modalVisible}
            onPress={this._setModalVisible.bind(this, false)}
          >
            {this.props.errorMessage}
          </GoModal>

          <TextInput
            placeholder="Current Password"
            autoCorrect={false}
            secureTextEntry
            onChangeText={this.onOldPasswordChanged.bind(this)}
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={goStyles.inputGapStyle}
          />
          <TextInput
            placeholder="New Password"
            autoCorrect={false}
            secureTextEntry
            onChangeText={this.onNewPasswordChanged.bind(this)}
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={goStyles.inputStyle}
          />

          <TextInput
            placeholder="Confirm New Password"
            autoCorrect={false}
            secureTextEntry
            onChangeText={this.onConfirmNewPasswordChanged.bind(this)}
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={goStyles.inputStyle}
          />

          {this.renderButton()}
        </View>
      </KeyboardAvoidingView>
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
  },
  outContainerStyle: {
    flex: 1,
    backgroundColor: goStyles.background,
    justifyContent: "center"
  }
};

const mapStateToProps = ({ changePassword }) => {
  const {
    oldPassword,
    newPassword,
    confNewPassword,
    error,
    errorMessage,
    success
  } = changePassword;

  return {
    oldPassword,
    newPassword,
    confNewPassword,
    error,
    errorMessage,
    success
  };
};

export default connect(mapStateToProps, {
  oldPasswordUpdate,
  newPasswordUpdate,
  confirmNewPasswordUpdate,
  userPasswordSave,
  resetCPError
})(ChangePassword);
