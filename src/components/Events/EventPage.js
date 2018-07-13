import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  LayoutAnimation,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Spinner } from "../common";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { updateEventDetails } from "../../actions";
import InfiniteScrollView from "react-native-infinite-scroll-view";
import firebase from "../../DataStorage/firebaseServices";
import axios from "axios";
import EventCard from "./EventsComponents/EventCard";
import { hasDatePassed } from "../Functions";
import goStyles from "../../Styling/goStyles";

var count = 0;
var globalEvent = [];

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventDetail: [],
      loading: true
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref(`events`)
      .on("value", snapshot => {
        // console.log("this is " + snapshot);

        var snapshotEventArray = snapshot.val().events;
        var eventArray = [];

        for (i = 0; i < snapshotEventArray.length; i++) {
          var eventSnapshot = snapshotEventArray[i];
          var hasEventPassed = hasDatePassed(
            eventSnapshot.details.date,
            this.props.date
          );
          if (hasEventPassed) {
            eventArray.push(snapshotEventArray[i]);
          }
        }
        globalEvent = eventArray;
        var tempArray = [];
        for (i = 0; i < 5; i++) {
          if (globalEvent.length !== 0) {
            tempArray.push(globalEvent.shift());
          }
        }
        this.setState({
          eventDetail: tempArray,
          loading: false
        });
      });

    // axios
    //   .get("https://rallycoding.herokuapp.com/api/music_albums")
    //   .then(response => this.setState({ eventDetail: response.data }));
    // this.setState({ eventDetail: events.events });
  }

  onEventPressed(eventDetail) {
    this.props.updateEventDetails(eventDetail);
    Actions.eventDetails();
  }

  renderFooter = () => {
    if (globalEvent === undefined || globalEvent.length == 0) {
      return null;
    } else {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      );
    }
  };

  eventLoadMore = () => {
    setTimeout(() => {
      var tempArray = [];
      for (i = 0; i < 5; i++) {
        if (globalEvent.length !== 0) {
          tempArray.push(globalEvent.shift());
        }
      }

      this.setState({
        eventDetail: [...this.state.eventDetail, ...tempArray]
      });
    }, 500);
  };

  render() {
    console.log("this is the date:" + this.props.date);
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Spinner size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.eventDetail}
            renderItem={({ item }) => (
              <EventCard
                key={item.details.name + count++}
                eventDetail={item}
                onPress={this.onEventPressed.bind(this, item)}
              />
            )}
            keyExtractor={(item, index) => index}
            ListFooterComponent={this.renderFooter}
            onEndThreshold={0.5}
            onEndReached={this.eventLoadMore}
          />
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: goStyles.background,
    paddingTop: 20
  },
  box: {
    backgroundColor: "red"
  },
  button: {
    borderColor: 1,
    borderWidth: 1
  }
});

const mapStateToProps = ({ chatData }) => {
  const { date } = chatData;

  return {
    date
  };
};

export default connect(mapStateToProps, { updateEventDetails })(EventPage);
