import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CalculatorDisplay() {
  return (
    <View>
      <Text style={styles.displayScreen}>CalculatorDisplay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayScreen: {
    textAlign: "right",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
});
