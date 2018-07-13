import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import firebase from "../../DataStorage/firebaseServices";
import { GoModal } from "../common/GoModal";
import goStyles from "../../Styling/goStyles";
import {
  nameUpdate,
  usernameUpdate,
  userSettingsSave,
  resetEPError
} from "../../actions";

var initialUsername;

class EditProfile extends Component {
  state = {
    name: "",
    username: "",
    modalVisible: false
  };

  componentWillMount() {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`users/${currentUser.uid}/`)
      .on("value", snapshot => {
        console.log(snapshot.val().name, snapshot.val());

        initialUsername = snapshot.val();
        this.setState({
          name: snapshot.val().name,
          username: snapshot.val().username
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this.setState({ modalVisible: false });
      }, 1500);
      this.props.resetEPError();
    } else {
      this.setState({ name: this.props.name, username: this.props.username });
    }
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onButtonPress() {
    const { name, username, email } = this.props;

    console.log("Save");
    console.log(name, username);

    this.props.userSettingsSave({ name, username, initialUsername });
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
    const {
      cardContainerStyle,
      imgContainerStyle,
      imgStyle,
      inputContainerStyle,
      textInputStyle
    } = styles;

    return (
      <View style={styles.containerStyle}>
        <GoModal
          visible={this.state.modalVisible}
          onPress={this._setModalVisible.bind(this, false)}
        >
          {this.props.errorMessage}
        </GoModal>

        <Text style={goStyles.formHeader}>Name and Username</Text>
        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          placeholder="Name"
          value={this.props.name}
          onChangeText={name => this.props.nameUpdate({ name })}
          placeholderTextColor="rgba(255,255,255,0.7)"
          maxLength={20}
        />

        <TextInput
          style={goStyles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          value={this.props.username}
          onChangeText={username => this.props.usernameUpdate({ username })}
          placeholderTextColor="rgba(255,255,255,0.7)"
          maxLength={15}
        />

        {this.renderButton()}
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

const mapStateToProps = ({ settings }) => {
  const { name, username, error, errorMessage } = settings;

  return {
    name,
    username,
    error,
    errorMessage
  };
};

export default connect(mapStateToProps, {
  nameUpdate,
  usernameUpdate,
  userSettingsSave,
  resetEPError
})(EditProfile);
