import React from "react";

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

import inputTemplate from "../forms/templates/input";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe un nombre y apellido",
        iconType: "material-community",
        iconName: "account-outline"
      }
    },
    email: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu Email",
        iconType: "material-community",
        iconName: "at"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu contraseña",
        iconType: "material-community",
        iconName: "lock-outline",
        password: true,
        secureTextEntry: true
      }
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: "Repite tu contraseña",
        iconType: "material-community",
        iconName: "lock-reset",
        password: true,
        secureTextEntry: true
      }
    }
  }
};
