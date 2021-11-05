import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default ({ num }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Num}>{num}</Text>
    </View>
  );
};
