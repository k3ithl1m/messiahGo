import React from "react";
import { Image, Text, View } from "react-native";
import { Button, Card, CardSection, Input } from "../common";
import goStyles from "../../Styling/goStyles";

const ProfileFooterButton = ({ children, stylepass, onPress }) => {
  return (
    <CardSection stylepass={stylepass || styles.buttonContainerStyle}>
      <Button onPress={onPress}> {children} </Button>
    </CardSection>
  );
};

const styles = {
  buttonContainerStyle: {
    padding: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    backgroundColor: goStyles.background
  }
};
export default ProfileFooterButton;
