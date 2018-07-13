import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = (
  { placeholder, label, onChangeText, value, secureTextEntry }
) => {
  const { inputStyle, textStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    color: "#000",
    lineHeight: 23
  },
  textStyle: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 18
  },
  containerStyle: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 40
  }
};

export { Input };
