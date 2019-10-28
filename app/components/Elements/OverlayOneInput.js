import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Overlay, Button, Icon } from "react-native-elements";

export default class OverlayOneInput extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  onChangeInput = inputData => {
    this.setState({
      inputValue: inputData
    });
  };

  update = () => {
    const newValue = this.state.inputValue;
    this.state.updateFunction(newValue);

    this.setState({
      isVisibleOverlay: false
    });
  };

  close = () => {
    console.log("close");
    this.setState({
      isVisibleOverlay: false
    });
    this.state.updateFunction(null);
  };

  render() {
    const { isVisibleOverlay, placeholder, inputValue } = this.state;

    return (
      <Overlay
        isVisible={isVisibleOverlay}
        fullScreen={true}
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlayStyle}
      >
        <View style={styles.viewOverlay}>
          <Input
            containerStyle={styles.inputContainer}
            onChangeText={value => this.onChangeInput(value)}
            placeholder={placeholder}
            value={inputValue}
          />
          <Button
            buttonStyle={styles.buttonUpdate}
            title="Actualizar"
            onPress={() => this.update()}
          />
          <Icon
            containerStyle={styles.containerIconClose}
            type="material-community"
            name="close-circle-outline"
            size={30}
            color="red"
            onPress={() => this.close()}
          />
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewOverlay: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#f24553",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10
  },
  inputContainer: {
    marginBottom: 20
  },
  buttonUpdate: {
    backgroundColor: "#f24553"
  },

  containerIconClose: {
    position: "absolute",
    right: 4,
    top: 2
  }
});
