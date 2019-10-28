import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button, SocialIcon, Divider } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import * as Facebook from "expo-facebook";

import t from "tcomb-form-native";
const Form = t.form.Form;

import { FacebookApi } from "../../utils/Social";

import { LoginStruct, LoginOptions } from "../../forms/Login";

import * as firebase from "firebase";
import { bold } from "ansi-colors";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginStruct: LoginStruct,
      loginOptions: LoginOptions,
      loginData: {
        email: "",
        password: ""
      },
      loginErrorMessage: ""
    };
  }

  login = () => {
    const validate = this.refs.loginForm.getValue();
    if (!validate) {
      this.setState({
        loginErrorMessage: "Los datos del formulario son erroneos"
      });
    } else {
      this.setState({ loginErrorMessage: "" });
      firebase
        .auth()
        .signInWithEmailAndPassword(validate.email, validate.password)
        .then(() => {
          this.refs.toastLogin.show("Correcto", 200, () => {
            this.props.navigation.goBack();
          });
        })
        .catch(erro => {
          this.refs.toastLogin.show("Login Incorrecto, revisa tus datos", 2500);
        });
    }
  };

  loginFacebook = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync(
        FacebookApi.application_id,
        {
          permissions: ["public_profile"]
        }
      );
      console.log(type);
      console.log(token);
      if (type === "success") {
        const credentials = firebase.auth.FacebookAuthProvider.credential(
          token
        );
        firebase
          .auth()
          .signInWithCredential(credentials)
          .then(() => {
            this.refs.toastLogin.show("Login correcto", 50, () => {
              this.props.navigation.goBack();
            });
          })
          .catch(erro => {
            this.refs.toastLogin.show(
              "Error accediendo con facebook, intentelo más tarde",
              100
            );
          });
      } else if (type === "cancel") {
        this.refs.toastLogin.show("Inicio de sesión cancelado", 300);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  onChangeFormLogin = formValue => {
    this.setState({
      loginData: formValue
    });
  };

  render() {
    const { loginStruct, loginOptions, loginErrorMessage } = this.state;
    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/academia.jpg")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />

        <View styles={styles.viewForm}>
          <Form
            ref="loginForm"
            type={loginStruct}
            options={LoginOptions}
            value={this.state.loginData}
            onChange={formValue => this.onChangeFormLogin(formValue)}
          />
          <Button
            buttonStyle={styles.buttonLoginContainer}
            title="Login"
            onPress={() => this.login()}
          />
          <Text style={styles.textRegister}>
            ¿Aun no tienes una cuenta?{" "}
            <Text
              style={styles.btnRegister}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              Registrate
            </Text>
          </Text>
          <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>
          <Divider style={styles.divider} />
          <SocialIcon
            title="Inicia sesión con Facebook"
            button
            type="facebook"
            onPress={() => this.loginFacebook()}
          />
        </View>
        <Toast
          ref="toastLogin"
          position="bottom"
          positionValue={300}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40
  },
  logo: {
    height: 150,
    width: "100%"
  },
  containerLogo: {
    alignItems: "center"
  },

  viewForm: {
    marginTop: 50
  },

  buttonLoginContainer: {
    backgroundColor: "#f24553",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  loginErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    backgroundColor: "#f24553",
    marginBottom: 20
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#f24553",
    fontWeight: "bold"
  }
});
