import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Typography, Colors } from "../themes";
import SvgUri from "react-native-svg-uri";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    alignItems: "center",
    width: 148,
    marginRight: 12,
    padding: 10,
    shadowColor: Colors.medium,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    fontSize: Typography.stronger,
    fontWeight: "600",
  },
  subtitle: {},
});

export function DiscoverItem() {
  return (
    <View style={styles.container}>
      <SvgUri
        width="60"
        height="100"
        source={require("../../assets/icons/covered-food-plate.svg")}
      />
      <Text style={styles.title}>Bars & Hotels</Text>
      <Text style={styles.subtitle}>28 Place</Text>
    </View>
  );
}
