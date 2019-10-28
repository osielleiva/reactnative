import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Overlay } from "react-native-elements";
import OverlayOneInput from "../../Elements/OverlayOneInput";
import OverlayTwoInputs from "../../Elements/OverlayTwoInputs";

export default class UpdateUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      overlayComponent: null,
      menuItems: [
        {
          title: "Cambiar Nombre y Apellido",
          iconType: "material-community",
          iconNameLeft: "account-circle",
          iconColorLeft: "#ccc",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          onPress: () =>
            this.openOverelay(
              "Nombre y Apellidos",
              this.updateUserDisplayName,
              props.userInfo.displayName
            )
        },
        {
          title: "Cambiar Email",
          iconType: "material-community",
          iconNameLeft: "at",
          iconColorLeft: "#ccc",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          onPress: () =>
            this.openOverelayTwoInputs(
              "Email",
              "Password",
              props.userInfo.email,
              this.updateUserEmail
            )
        },
        {
          title: "Cambiar Contraseña",
          iconType: "material-community",
          iconNameLeft: "lock-reset",
          iconColorLeft: "#ccc",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          onPress: () => console.log("click en")
        }
      ]
    };
  }

  updateUserDisplayName = async newDisplayName => {
    if (newDisplayName) {
      this.state.updateUserDisplayName(newDisplayName);
    }

    this.setState({
      overlayComponent: null
    });
  };

  openOverelay = (placeholder, updateFunction, inputValue) => {
    this.setState({
      overlayComponent: (
        <OverlayOneInput
          isVisibleOverlay={true}
          placeholder={placeholder}
          updateFunction={updateFunction}
          inputValue={inputValue}
        />
      )
    });
  };

  updateuserEmail = async (newEmail, password) => {
    const emailOld = this.props.userInfo.email;

    if (emailOld != newEmail) {
      this.state.updateUserEmail(newEmail, password);
    }
    this.setState({
      overlayComponent: null
    });
  };

  openOverelayTwoInputs = (
    placeholderOne,
    placeholderTwo,
    inputValueOne,
    updateFunction
  ) => {
    this.setState({
      overlayComponent: (
        <OverlayTwoInputs
          isVisibleOverlay={true}
          placeholderOne={placeholderOne}
          placeholderTwo={placeholderTwo}
          inputValueOne={inputValueOne}
          inputValueTwo=""
          updateFunction={updateFunction}
        />
      )
    });
  };

  render() {
    const { menuItems, overlayComponent } = this.state;
    return (
      <View style={StyleSheet.viewUser}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconNameLeft,
              color: item.iconColorLeft
            }}
            rightIcon={{
              type: item.iconType,
              name: item.iconNameRight,
              color: item.iconColorRight
            }}
            onPress={item.onPress}
            containerStyle={Styles.contentContainerStyle}
          />
        ))}
        {overlayComponent}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  contentContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});
