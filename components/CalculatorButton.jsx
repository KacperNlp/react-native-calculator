import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CalculatorButton({
  backgroundColor,
  color,
  value,
  flexGrow: flexGrowValue,
}) {
  const flexGrow = flexGrowValue ? Number(flexGrowValue) : 0;

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, flexGrow }]}>
      <Text style={[styles.buttonText, { color }]}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 50,
  },

  buttonText: {
    fontSize: 30,
  },
});
