import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CalculatorPanel from "./components/CalculatorPanel";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CalculatorPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
