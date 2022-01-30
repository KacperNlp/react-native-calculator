import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CalculatorDisplay = () => {
  return (
    <View style={styles.calculatorDisplay}>
      <Text>Hello There</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "95%",
    height: 50,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    paddingRight: 20,
    backgroundColor: "#bcc4d1",
  },
});
