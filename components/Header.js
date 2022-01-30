import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}> Welcome to Calculator APP! :) </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 100,
  },

  headerText: {
    fontSize: 16,
    color: "#786",
  },
});
