import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";

class SettingsItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { data, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            {data.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { textStyle } = styles;
    const { title, id } = this.props.data;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={textStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 12
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.data.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(SettingsItem);
