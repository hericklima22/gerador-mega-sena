import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default ({ num }) => {
  const genColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const index = parseInt(Math.random() * 16);
    return hex[index];
  };

  const randColor = () => {
    const cor = Array(6)
      .fill()
      .reduce((nums) => `${nums}` + genColor(), "#");
    return cor;
  };

  return (
    <View style={[styles.Container, { backgroundColor: randColor() }]}>
      <Text style={styles.Num}>{num}</Text>
    </View>
  );
};
