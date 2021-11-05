import React from "react";
import { StyleSheet } from "react-native";
import { Mega } from "./src/components/mega/Mega";

export default function App() {
  return <Mega></Mega>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
