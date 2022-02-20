import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { CalculatorButton, CalculatorDisplay } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <CalculatorDisplay />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.calculatorBtnRow}>
          <CalculatorButton value="C" backgroundColor="#E74C3C" color="#fff" />
          <CalculatorButton
            value="+/-"
            backgroundColor="#E74C3C"
            color="#fff"
          />
          <CalculatorButton value="%" backgroundColor="#E74C3C" color="#fff" />
          <CalculatorButton value="/" backgroundColor="#BF3277" color="#fff" />
        </View>

        <View style={styles.calculatorBtnRow}>
          <CalculatorButton value="7" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="8" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="9" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="x" backgroundColor="#BF3277" color="#fff" />
        </View>

        <View style={styles.calculatorBtnRow}>
          <CalculatorButton value="4" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="5" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="6" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="-" backgroundColor="#BF3277" color="#fff" />
        </View>

        <View style={styles.calculatorBtnRow}>
          <CalculatorButton value="1" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="2" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="3" backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="+" backgroundColor="#BF3277" color="#fff" />
        </View>

        <View style={styles.calculatorBtnRow}>
          <CalculatorButton
            value="0"
            backgroundColor="#2e2d2b"
            color="#fff"
            flexGrow="1"
          />
          <CalculatorButton value="." backgroundColor="#2e2d2b" color="#fff" />
          <CalculatorButton value="=" backgroundColor="#BF3277" color="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingRight: 10,
    paddingLeft: 10,
    height: "100%",
    backgroundColor: "#000",
  },

  display: {
    marginBottom: 20,
  },

  buttonsContainer: {},

  calculatorBtnRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});
