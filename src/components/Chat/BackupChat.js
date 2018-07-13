import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Backend from "../../Backend";

class MainChat extends Component {
  state = {
    messages: []
  };

  componentWillMount() {}

  addMessage(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    console.log("trying to render");
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          //send message to backend
          // Backend.sendMessage(message);
          this.addMessage(message);
        }}
        user={{
          _id: 6,
          name: "John",
          avatar: "https://facebook.github.io/react/img/logo_og.png"
        }}
      />
    );
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://facebook.github.io/react/img/logo_og.png"
          }
        }
      ]
    });
  }

  componentWillUnmount() {
    Backend.closeChat();
  }
}

export default MainChat;
