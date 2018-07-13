import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { NavBar } from "../../common";
import goStyles from "../../../Styling/goStyles";

count = 0;

class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [
        "Sports",
        "Food",
        "Music",
        "Dance",
        "Talks",
        "Politics",
        "Technology",
        "Games",
        "Film",
        "Party",
        "Hangout",
        "Chill",
        "Adventure",
        "Art",
        "Painting"
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar>Themes</NavBar>
        <FlatList
          data={this.state.themes}
          renderItem={({ item }) => {
            <Text key={item + count++}>item</Text>;
          }}
          keyExtractor={(item, index) => count++}
        />
      </View>
    );
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
    borderWidth: 1,
    color: "black"
  }
});

export default ThemePicker;
