import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import { Colors, Typography } from "../themes";
import LinearGradient from "react-native-linear-gradient";

const WIDTH = 148;
const HEIGHT = WIDTH * 1.618;
const PADDING = 12;

const styles = StyleSheet.create({
  container: {},
  background: {
    width: 148,
    marginRight: PADDING,
    height: HEIGHT,
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  bar: {
    width: 48,
    height: 2,
    backgroundColor: Colors.accent,
    marginBottom: PADDING,
  },
  title: {
    color: "#fff",
    fontSize: Typography.stronger,
    fontWeight: "600",
    marginBottom: PADDING / 2,
  },
  place: {
    color: "#fff",
  },
});

export function MealPosterItem() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/hamburger-and-fries.jpg")}
    >
      <LinearGradient
        style={{ padding: PADDING }}
        colors={["transparent", Colors.dark]}
      >
        <View style={styles.bar}></View>
        <Text style={styles.title}>Greek Style</Text>
        <Text style={styles.place}>34 Places</Text>
      </LinearGradient>
    </ImageBackground>
  );
}
