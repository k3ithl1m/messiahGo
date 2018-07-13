import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
// import { GiftedChat } from "react-native-gifted-chat";
import { GiftedChat } from "./react-native-gifted-chat";
import Backend from "../../Backend";
import { getTimeValue } from "../../actions";
import goStyles from "../../Styling/goStyles";
import firebase from "../../DataStorage/firebaseServices";

class ChatSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: "",
      prompt: "",
      messages: []
    };
  }

  componentWillMount() {
    this.props.getTimeValue();

    firebase
      .database()
      .ref(`prompt`)
      .on("value", snapshot => {
        var prompt = snapshot.val().settings;
        this.setState({
          prompt: snapshot.val().settings[0].prompt
        });
      });
  }

  // getChatId() {
  //   console.log(this.props.email);
  //   var splitEmail = this.props.email.split("@");
  //   var chatID = this.props.name + " " + splitEmail[0];
  //   this.setState({ chatId: chatID });
  // }

  gotPrompt() {
    if (this.state.prompt === "") {
      return null;
    } else {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{this.state.prompt}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: goStyles.background, flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {this.gotPrompt()}
        <GiftedChat
          onLoadEarlier={() => {
            Backend.loadEarlierMessage();
          }}
          messages={this.state.messages}
          onSend={message => {
            //DO NOTIFICATIONS HERE!
            //
            // {
            //	"to": "ExponentPushToken[5VOPm1OhMwMqKf0shPkmwQ]",
            //	"title":  "Messiah GO!",
            //	"sound": "default",
            //	"body": "You are the best!"
            // }
            //
            // POST Address: https://exp.host/--/api/v2/push/send
            //
            // HEADERS:
            // - Content-Type: application/json
            // - Accept: application/json
            // - Accept-Encoding: gzip, deflate
            //
            //send message to backend
            Backend.sendMessage(message);
          }}
          user={{
            _id: this.props.uid,
            name: this.props.chatId
          }}
          styles={{
            bubbleLeft: {
              backgroundColor: "#5959b9",
              marginRight: 70
            },
            bubbleRight: {
              backgroundColor: "#007aff",
              marginLeft: 70
            }
          }}
        />
      </View>
    );
  }

  componentDidMount() {
    Backend.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        };
      });
    });
  }

  componentWillUnmount() {
    //Backend.closeChat();
  }
}

const styles = {
  viewStyle: {
    backgroundColor: goStyles.darkerBackground,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    position: "relative"
  },

  textStyle: {
    fontSize: 12,
    color: "white"
  }
};

const mapStateToProps = ({ userData, chatData }) => {
  const { name, username, password, uid, chatId } = userData;
  const { time } = chatData;

  return {
    username,
    name,
    password,
    uid,
    time,
    chatId
  };
};

export default connect(mapStateToProps, { getTimeValue })(ChatSystem);
