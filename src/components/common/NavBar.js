import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import goStyles from "../../Styling/goStyles";

const NavBar = ({
  onLeftPress,
  onRightPress,
  children,
  leftIcon,
  rightIcon
}) => {
  if (rightIcon && leftIcon) {
    return (
      <View style={styles.NavBarStyle}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image style={styles.leftIconStyle} source={leftIcon} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}> {children}</Text>
        <TouchableOpacity onPress={onRightPress}>
          <Image style={styles.rightIconStyle} source={rightIcon} />
        </TouchableOpacity>
      </View>
    );
  } else if (leftIcon) {
    return (
      <View style={styles.NavBarStyle}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image style={styles.leftIconStyle} source={leftIcon} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}> {children}</Text>
      </View>
    );
  } else if (rightIcon) {
    return (
      <View style={styles.NavBarStyle}>
        <Text style={styles.titleStyle}> {children}</Text>
        <TouchableOpacity onPress={onRightPress}>
          <Image style={styles.rightIconStyle} source={rightIcon} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.NavBarStyle}>
        <Text style={styles.titleStyle}> {children}</Text>
      </View>
    );
  }
};

const styles = {
  NavBarStyle: {
    backgroundColor: goStyles.background
  },
  leftIconStyle: {
    height: 25,
    width: 25
  },
  rightIconStyle: {
    height: 25,
    width: 25
  },
  titleStyle: {
    color: goStyles.secondary,
    fontSize: 20,
    fontWeight: "300"
  }
};

export { NavBar };
