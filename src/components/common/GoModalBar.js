import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

const GoModalBar = ({ visible, children }) => {
  state = {
    transparent: true
  };

  var modalBackgroundStyle = {
    backgroundColor: this.state.transparent ? "rgba(0, 0, 0, 0.0)" : "#f5fcff"
  };
  var innerContainerTransparentStyle = this.state.transparent
    ? { backgroundColor: "rgba(15, 25, 46, 0.90)", padding: 20 }
    : null;
  var activeButtonStyle = {
    backgroundColor: "#ddd"
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={[styles.container, modalBackgroundStyle]}>
        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {children}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalButton: {},
  container: {
    flex: 1,
    justifyContent: "top"
  },
  innerContainer: {
    alignItems: "center"
  }
};

export { GoModalBar };
