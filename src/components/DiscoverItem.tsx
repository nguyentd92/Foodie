import React from "react";
import { Text, StyleSheet, TouchableHighlight, View } from "react-native";
import { Typography, Colors } from "../themes";
import SvgUri from "react-native-svg-uri";

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: Colors.medium,
    shadowOpacity: 1,
  },
  touchable: {
    backgroundColor: "#fff",
    marginRight: 12,
    borderRadius: 6,
    width: 148,
    padding: 10,
  },
  wrapper: {
    alignItems: "center",
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
      <TouchableHighlight
        style={styles.touchable}
        activeOpacity={0.6}
        underlayColor={Colors.accent}
        onPress={() => {}}
      >
        <View style={styles.wrapper}>
          <SvgUri
            width="60"
            height="100"
            source={require("../../assets/icons/covered-food-plate.svg")}
          />
          <Text style={styles.title}>Bars & Hotels</Text>
          <Text style={styles.subtitle}>28 Place</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
