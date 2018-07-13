import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Actions } from "react-native-router-flux";
import CreateEventForm from "./CreateEventForm";
import goStyles from "../../../Styling/goStyles";
import { DismissKeyboardAvoidingView, GoModalBar } from "../../common";

var cancelImage = require("../../../Styling/Pictures/close.png");

class CreateEvent extends Component {
  onPressCancel() {
    Actions.pop();
  }

  render() {
    return (
      <DismissKeyboardAvoidingView>
        <ScrollView style={{ flex: 1, backgroundColor: goStyles.background }}>
          <View style={{ padding: 30 }}>
            <View style={styles.cancelBox}>
              <TouchableWithoutFeedback onPress={this.onPressCancel.bind(this)}>
                <Image style={styles.cancelStyle} source={cancelImage} />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View>
            <CreateEventForm />
          </View>
        </ScrollView>
      </DismissKeyboardAvoidingView>
    );
  }
}

const styles = {
  headerSection: {
    height: 400,
    // padding: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  organizerInfo: {
    flexDirection: "row",
    alignItems: "center"
    // marginBottom: 10
  },
  organizedby: {
    fontSize: 10,
    marginLeft: 5,
    color: "white"
  },
  thumbnailStyle: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  name: {
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 5,
    color: "white",
    textAlign: "center"
  },
  location: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 5,
    color: "white",
    textAlign: "center"
  },
  descriptionStyle: {
    marginBottom: 5,
    color: "white"
  },
  imageOverlay: {
    opacity: 0.05,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  lowerSection: {
    // padding: 30,
    // backgroundColor: goStyles.background
  },
  cancelStyle: {
    // marginTop: 20,
    // marginLeft: 20,
    height: 25,
    width: 25
  },
  cancelBox: {
    backgroundColor: goStyles.background
  },
  dateSection: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 30,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  month: {
    color: "white",
    fontSize: 14,
    flex: 1,
    fontWeight: "700"
  },
  day: {
    color: "white",
    fontSize: 46,
    textAlign: "center",
    // backgroundColor: 'red',
    flex: 1,
    fontWeight: "300"
  },
  time: {
    flex: 1,
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "right"
  }
};

export default CreateEvent;
