import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { ButtonLink } from "../common/";
import { signOut } from "../../actions";
import goStyles from "../../Styling/goStyles";
import Communications from "react-native-communications";

class ProfileOptions extends Component {
  onEditProfileLinkPress() {
    Actions.editProfile();
  }

  onChangePasswordLinkPress() {
    Actions.changePassword();
  }

  onLogOutLinkPress() {
    this.props.signOut();
  }

  onPrivacyTermsPress() {
    Actions.privacyTerms();
  }

  onInviteFriendsPress() {
    Communications.text(
      null,
      "Hey, Join me on MessiahGo! It's a decently produced app." +
        " https://goo.gl/hgWU2d "
      // "Hey, I just signed upf ro "
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonLink
          style={goStyles.buttonStyle}
          onPress={this.onEditProfileLinkPress.bind(this)}
        >
          <Text>Edit Profile</Text>
        </ButtonLink>

        <ButtonLink onPress={this.onChangePasswordLinkPress.bind(this)}>
          <Text>Change Password</Text>
        </ButtonLink>

        <ButtonLink onPress={this.onInviteFriendsPress.bind(this)}>
          <Text>Invite Messiah Friends</Text>
        </ButtonLink>

        <ButtonLink onPress={this.onPrivacyTermsPress.bind(this)}>
          <Text>Privacy & Terms</Text>
        </ButtonLink>

        <ButtonLink onPress={this.onLogOutLinkPress.bind(this)}>
          <Text style={{ color: goStyles.secondary }}>Log Out</Text>
        </ButtonLink>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "flex-end"
  }
};

export default connect(null, {
  signOut
})(ProfileOptions);
