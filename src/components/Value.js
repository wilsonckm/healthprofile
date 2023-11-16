import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors";

export default function Value({ label, value }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  value: {
    fontSize: 45,
    color: colors.darkBlue,
  },

  label: {
    color: colors.darkBlue,
    fontSize: 20,
  },
});
