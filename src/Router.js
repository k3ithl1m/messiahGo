import React, { Component } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  PixelRatio
} from "react-native";
import { connect } from "react-redux";
import {
  Router,
  Scene,
  Actions,
  Button,
  Right
} from "react-native-router-flux";
import firebase from "./DataStorage/firebaseServices";
import TabIcon from "./Styling/Icons/TabIcon";
import { BarIcon } from "./Styling/Icons/BarIcon";
import LoginPage from "./components/Authentication/LoginPage";
import SignUpPage from "./components/Authentication/SignUpPage";
import CreateUserAndPass from "./components/Authentication/CreateUserAndPass";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import MainChat from "./components/Chat/MainChat";
import InformationPage from "./components/Settings/InformationPage";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Profile/Settings";
import EditProfile from "./components/Profile/EditProfile";
import ChangePassword from "./components/Profile/ChangePassword";
import PrivacyTerms from "./components/Profile/PrivacyTerms";
import LoadingPage from "./components/Loading/LoadingPage";
import EventPage from "./components/Events/EventPage";
import EventDetails from "./components/Events/EventDetails";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";
import ThemePicker from "./components/Events/CreateEvent/ThemePicker";
import LocationPicker from "./components/Events/CreateEvent/LocationPicker";
import SocialFeed from "./components/SocialFeed/SocialFeed";
import goStyles from "./Styling/goStyles";
import { getTimeValue } from "./actions";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

let tracker = new GoogleAnalyticsTracker("UA-108248899-1");
const chatImage = require("./Assets/AppIcon/chat.png");
const leftBack = require("./Assets/AppIcon/leftBack.png");
var loggedin;

class RouterComponent extends Component {
  render() {
    this.props.getTimeValue();
    loggedin = this.props.isLoggedIn;
    console.log("is loggedIn " + this.props.isLoggedIn);
    return (
      <Router>
        <Scene>
          <Scene
            hideNavBar
            key="loading"
            component={LoadingPage}
            type="reset"
          />

          <Scene hideNavBar key="auth" component={LoginPage} type="reset" />
          <Scene hideNavBar key="forgotPassword" component={ForgotPassword} />

          <Scene hideNavBar key="email" component={SignUpPage} />
          <Scene hideNavBar key="userAndPass" component={CreateUserAndPass} />

          <Scene
            // initial={loggedin}
            key="chat"
            title="Late Night Chats"
            onLeft={() => Actions.replace("Events")}
            component={MainChat}
            navigationBarStyle={{
              backgroundColor: "rgb(15, 25, 46)"
            }}
            leftButtonImage={leftBack}
            headerTintColor={goStyles.secondary}
            titleStyle={{ color: goStyles.secondary }}
            type="reset"
          />

          {/* Tab Bar Start */}
          <Scene
            key="myTabBar"
            tabs={true}
            tabBarStyle={styles.tabBar}
            activeTintColor={goStyles.secondary}
            inactiveTintColor={goStyles.primary}
            hideNavBar
          >
            <Scene
              key="SocialFeed"
              title="SocialFeed"
              iconName="black-tie"
              hideNavBar
              icon={TabIcon}
              component={SocialFeed}
              navigationBarStyle={{ backgroundColor: goStyles.background }}
              titleStyle={{ color: goStyles.secondary }}
              barButtonIconStyle={{ tintColor: "#2227b7" }}
              headerTintColor={goStyles.secondary}
            />
            <Scene
              key="Events"
              title="Events"
              iconName="calendar"
              icon={TabIcon}
              rightButtonImage={chatImage}
              component={EventPage}
              onRight={() => Actions.push("chat")}
              navigationBarStyle={{ backgroundColor: goStyles.background }}
              titleStyle={{ color: goStyles.secondary }}
              barButtonIconStyle={{ tintColor: "#2227b7" }}
              headerTintColor={goStyles.secondary}
            />

            <Scene
              key="Settings"
              title="Settings"
              hideNavBar
              iconName="user"
              icon={TabIcon}
              component={Profile}
              navigationBarStyle={{ backgroundColor: goStyles.background }}
              titleStyle={{ color: goStyles.secondary }}
              barButtonIconStyle={{ tintColor: "#2227b7" }}
              headerTintColor={goStyles.secondary}
            />
          </Scene>

          <Scene
            key="eventDetails"
            title="Event Details"
            hideNavBar
            component={EventDetails}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="createEvent"
            title="Create Event"
            // initial
            hideNavBar
            component={CreateEvent}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="locationPicker"
            hideNavBar
            component={LocationPicker}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="themePicker"
            hideNavBar
            component={ThemePicker}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="editProfile"
            title="Edit Profile"
            component={EditProfile}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="settings"
            title="Settings"
            component={Settings}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="changePassword"
            title="Change Password"
            component={ChangePassword}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />

          <Scene
            key="privacyTerms"
            title="Privacy &amp; Terms of Service"
            component={PrivacyTerms}
            navigationBarStyle={{ backgroundColor: goStyles.background }}
            titleStyle={{ color: goStyles.secondary }}
            headerTintColor={goStyles.secondary}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    borderTopColor: goStyles.background,
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: goStyles.background,
    opacity: 0.98
  },
  navigationBarStyle: {
    backgroundColor: "red"
  },
  navigationBarTitleStyle: {
    color: "white"
  }
});

const mapStateToProps = ({ auth, userData }) => {
  const { isLoggedIn } = auth;
  const { admin } = userData;

  return { isLoggedIn, admin };
};

export default connect(mapStateToProps, { getTimeValue })(RouterComponent);
