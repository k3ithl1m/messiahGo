import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  createDateChanged,
  createTimeChanged,
  createLocationChanged,
  createDescriptionChanged,
  createNameOfEventChanged,
  createEvent
} from "../../../actions";
import { Actions } from "react-native-router-flux";
import DatePicker from "react-native-datepicker";
import { ButtonLink } from "../../common";
import goStyles from "../../../Styling/goStyles";

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15", time: "00:00" };
  }
  onCreateEventButtonPressed() {
    const {
      name,
      date,
      time,
      location,
      description,
      username,
      uid
    } = this.props;

    this.props.createEvent({
      name,
      date,
      time,
      location,
      description,
      username,
      uid
    });
  }

  onChooseThemePressed() {
    Actions.themePicker();
  }

  onNameOfEventChanged(name) {
    this.props.createNameOfEventChanged(name);
  }

  onDateChanged(date) {
    this.props.createDateChanged(date);
  }

  onTimeChanged(time) {
    this.props.createTimeChanged(time);
  }

  onLocationChanged(location) {
    this.props.createLocationChanged(location);
  }

  onDescriptionChanged(description) {
    this.props.createDescriptionChanged(description);
  }

  onLoading() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <TouchableOpacity
          style={goStyles.buttonStyle}
          onPress={this.onCreateEventButtonPressed.bind(this)}
        >
          <Text style={goStyles.buttonTextStyle}>Done</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View>
        <Text style={goStyles.formHeader}>Create Event</Text>
        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Name of Event"
          onChangeText={this.onNameOfEventChanged.bind(this)}
          placeholderTextColor="rgba(255,255,255,0.7)"
          maxLength={15}
        />

        <DatePicker
          style={{ width: 200 }}
          date={this.props.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={this.onDateChanged.bind(this)}
        />

        <DatePicker
          style={{ width: 200 }}
          date={this.props.time}
          mode="time"
          placeholder="select date"
          format="h:mm a"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={this.onTimeChanged.bind(this)}
        />

        <ButtonLink onPress={this.onChooseThemePressed.bind(this)}>
          <Text> Choose Theme</Text>
        </ButtonLink>

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          placeholder="Location"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={this.onLocationChanged.bind(this)}
        />

        <TextInput
          style={goStyles.inputStyle}
          autoCorrect={false}
          placeholder="Description"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={this.onDescriptionChanged.bind(this)}
        />
        <View>{this.onLoading()}</View>
      </View>
    );
  }
}

const mapStateToProps = ({ createEvent, userData }) => {
  const { name, time, date, location, description } = createEvent;
  const { username, uid } = userData;
  return {
    name,
    time,
    date,
    location,
    description,
    username,
    uid
  };
};

export default connect(mapStateToProps, {
  createDateChanged,
  createTimeChanged,
  createLocationChanged,
  createDescriptionChanged,
  createNameOfEventChanged,
  createEvent
})(CreateEventForm);
