import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Mega } from "./src/components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdDeNumeros={6}></Mega>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
