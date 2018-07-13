import React, { Component } from "react";
import { connect } from "react-redux";
import ChatSystem from "./ChatSystem";
import WaitChatGame from "./WaitChatGame";
import { Actions } from "react-native-router-flux";
import { getTimeValue } from "../../actions";
import firebase from "../../DataStorage/firebaseServices";

class MainChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      endTime: "",
      time: ""
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("rules")
      .on("value", snapshot => {
        console.log("this is " + snapshot.val().chattime.start);
        this.setState({
          startTime: snapshot.val().chattime.start,
          endTime: snapshot.val().chattime.end
        });
      });

    this.setState({
      time: this.props.time
    });
  }

  componentWillUnmount() {
    Actions.pop();
  }

  render() {
    console.log("this is the time " + this.props.time + this.state.startTime);
    var timeToEnable = parseInt(this.props.time);
    if (
      (timeToEnable >= 11 && timeToEnable <= 23) ||
      (timeToEnable >= 0 && timeToEnable <= 5)
    ) {
      return <ChatSystem />;
    } else {
      return <WaitChatGame />;
    }
  }
}

const mapStateToProps = ({ chatData }) => {
  const { time } = chatData;

  return {
    time
  };
};

export default connect(mapStateToProps, { getTimeValue })(MainChat);
