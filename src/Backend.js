import * as firebase from "firebase";

class Backend {
  messagesRef = null;

  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref("messages");
    this.messagesRef.off();
    const onReceive = data => {
      const message = data.val();

      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name
        }
      });
    };
    this.messagesRef
      // .limitToLast(20)
      .on("child_added", onReceive);
  }

  loadEarlierMessage() {
    this.messagesRef = firebase.database().ref("messages");
    this.messagesRef.off();
    const onReceive = data => {
      const message = data.val();

      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name
        }
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  }

  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
