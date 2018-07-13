import * as firebase from "firebase";

class EventsBackend {
  eventsRef = null;

  loadEvents(callback) {
    this.eventsRef = firebase
      .database()
      .ref("events")
      .queryOrdered((byChild: "dateValue"));
    this.eventsRef.off();

    const onReceive = data => {
      const events = data.val();

      callback({
        name: events.name,
        location: events.location,
        time: events.time,
        eventID: events.eventid,
        description: events.description,
        date: events.date,
        user: {
          _id: events.user._id,
          name: events.user.name
        }
      });
    };

    this.eventsRef.limitToLast(20).on("child_added", onReceive);
  }

  loadEarlierMessage() {
    this.eventsRef = firebase
      .database()
      .ref("events")
      .queryOrdered((byChild: "dateValue"));
    this.eventsRef.off();
    const onReceived = data => {
      const events = data.val();

      callback({
        name: events.name,
        location: events.location,
        time: events.time,
        eventID: events.eventid,
        description: events.description,
        date: events.date,
        user: {
          _id: events.user._id,
          name: events.user.name
        }
      });
    };

    this.eventsRef.limitToLast(20).on("child_added", onReceive);
  }
}

export default new EventsBackend();
