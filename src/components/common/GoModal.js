import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

const GoModal = ({ visible, onPress, children }) => {
  state = {
    transparent: true
  };

  var modalBackgroundStyle = {
    backgroundColor: this.state.transparent ? "rgba(0, 0, 0, 0.2)" : "#f5fcff"
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
        <TouchableOpacity onPress={onPress} style={styles.modalButton}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
            <Text style={{ color: "white", textAlign: "center" }}>
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = {
  modalButton: {
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 80
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center"
  }
};

export { GoModal };
