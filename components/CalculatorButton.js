import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CalculatorButton extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Text>{this.props.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "31%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#bcc0c4",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#95989c",
  },
});
