import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

import userInfo from "./UserInfo";
import UserInfo from "./UserInfo";

export default class MyAccountUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewBody}>
        <UserInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
