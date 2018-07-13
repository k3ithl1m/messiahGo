import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import goStyles from "../../Styling/goStyles";
import { Actions } from "react-native-router-flux";
import { Spinner } from "../common";
import { connect } from "react-redux";
import { Font } from "expo";
import firebase from "../../DataStorage/firebaseServices";

class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { rehydrated: false };
  }

  onButtonPress() {
    if (this.props.isLoggedIn) {
      Actions.Events();
    } else {
      Actions.auth();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rehydrated == true) {
      this.onButtonPress();
    }
  }

  componentWillMount() {
    //This is to direct the loading screen automatically
    setTimeout(() => {
      this.setState({ rehydrated: true });
    }, 1000);
  }

  render() {
    if (this.state.rehydrated) {
      this.onButtonPress();
    }
    return (
      <View style={styles.containerStyle}>
        <View style={styles.logoContainerStyle}>
          <StatusBar hidden />
          <Text allowFontScaling={false} style={styles.logo}>
            Messiah
            <Text allowFontScaling={false} style={styles.logoBold}>
              GO
            </Text>
          </Text>

          <Text style={styles.description}>
            An app by Messiah Students for Messiah Students
          </Text>
          <View style={styles.buttonStyle}>
            <Spinner size="large" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: goStyles.background
  },
  logoContainerStyle: {
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    flexGrow: 1,
    alignItems: "center"
  },
  logo: {
    fontSize: 48,
    color: "white",
    fontWeight: "300"
  },
  logoBold: {
    fontWeight: "800",
    color: goStyles.primary
  },
  modalButton: {
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 80
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center"
  },
  buttonStyle: {
    borderRadius: 5,
    height: 50,
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20
  },
  description: {
    fontSize: 12,
    fontWeight: "300",
    marginBottom: 5,
    color: "white"
  }
};

const mapStateToProps = ({ auth }) => {
  const { isLoggedIn } = auth;

  return {
    isLoggedIn
  };
};

export default connect(mapStateToProps, {})(LoadingPage);
