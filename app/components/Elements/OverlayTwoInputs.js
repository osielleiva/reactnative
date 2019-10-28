import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Overlay, Button, Icon } from "react-native-elements";

export default class OverlayTwoInputs extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  onChangeInputOne = inputData => {
    this.setState({
      inputValueOne: inputData
    });
  };

  onChangeInputTwo = inputData => {
    this.setState({
      inputValueTwo: inputData
    });
  };

  update = () => {
    const newValueOne = this.state.inputValueOne;
    const newValueTwo = this.state.inputValueTwo;

    console.log(newValueOne), console.log(newValueTwo);
    this.state.updateFunction(newValueOne, newValueTwo);

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
    const {
      isVisibleOverlay,
      placeholderOne,
      placeholderTwo,
      inputValueOne,
      inputValueTwo
    } = this.state;

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
            onChangeText={value => this.onChangeInputOne(value)}
            placeholder={placeholderOne}
            value={inputValueOne}
          />
          <Input
            containerStyle={styles.inputContainer}
            onChangeText={value => this.onChangeInputTwo(value)}
            placeholder={placeholderTwo}
            value={inputValueTwo}
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
