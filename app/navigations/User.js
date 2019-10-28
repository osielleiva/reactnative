import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Screens

import HomeScreen from "../screens/Home";
import CoursesScreen from "../screens/Courses";
import StudentsScreen from "../screens/Students";

//Screen My Account
import MyAccountScreen from "../screens/MyAccount/MyAccount";
import RegisterScreen from "../screens/MyAccount/Register";
import LoginScreen from "../screens/MyAccount/Login";

const homeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Inicio"
    })
  }
});

const coursesScreenStack = createStackNavigator({
  Courses: {
    screen: CoursesScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Cursos"
    })
  }
});

const studentsScreenStack = createStackNavigator({
  Students: {
    screen: StudentsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Alumnos"
    })
  }
});

const myAccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cuenta"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Login"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Courses: {
      screen: coursesScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Cursos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="book-open-page-variant"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Students: {
      screen: studentsScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Alumnos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-group"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },

    MyAccount: {
      screen: myAccountScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-circle"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "MyAccount",
    order: ["Home", "Courses", "Students", "MyAccount"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#f24553"
    }
  }
);

export default createAppContainer(RootStack);
