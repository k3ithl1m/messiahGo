import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    if (this.props.text.trim().length > 0) {
      return (
        <TouchableOpacity
          style={[styles.container, this.props.containerStyle]}
          onPress={() => {
            this.props.onSend({text: this.props.text.trim()}, true);
          }}
          accessibilityTraits="button"
        >
        <View style={styles.buttonContainer}>
          <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
        </View>
        </TouchableOpacity>
      );
    }
    return <View/>;
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    // backgroundColor: '#4cb7d1',
    padding: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    height: 44,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#4cb7d1',
  },
  text: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 17,

    // marginBottom: 12,
    // marginLeft: 10,
    // marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};
