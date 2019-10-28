import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";
import { bold } from "ansi-colors";

export default class MyAccountGuest extends Component {
  constructor(props) {
    super();
  }
   
  render() {
    const { goToScreen } = this.props;

    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/academia.jpg")}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
        <Text style={styles.title}>Ingresa a La Academia</Text>
        <Text style={styles.descriptions}>
          Olvidate de las hojas de calculo y gestiona tus cursos y talleres de
          una forma rapida y sensilla
        </Text>
        <Button
          buttonStyle={styles.btnViewProfile}
          title="Ver tu perfil"
          onPress={() => goToScreen("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10
  },
  descriptions: {
    textAlign: "center",
    marginBottom: 20
  },
  btnViewProfile: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#f24553"
  }
});
