import React, { Component, useState } from "react";
import { View, StyleSheet } from "react-native";

import CalculatorButton from "./CalculatorButton";
import { CalculatorDisplay } from "./CalculatorDisplay";

export const CalculatorPanel = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const dataForCalculator = require("../data/calculatorProperties.json");
  const numbersStructure = dataForCalculator.numbers.map((number) => {
    return <CalculatorButton number={number} />;
  });

  return (
    <View style={styles.calculator}>
      <CalculatorDisplay firstValue={firstValue} secondValue={secondValue} />
      <View style={styles.keyboard}>{numbersStructure}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    width: "90%",
    height: 400,
    backgroundColor: "#e6e9ed",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  keyboard: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
