import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import { Colors, Typography } from "../themes";
import LinearGradient from "react-native-linear-gradient";

const WIDTH = 148;
const HEIGHT = WIDTH * 1.618;
const PADDING = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: Colors.medium,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  background: {
    minWidth: WIDTH,
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

export function MealPosterItem(props: any) {
  const {data} = props

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/hamburger-and-fries.jpg")}
      >
        <LinearGradient
          style={{ padding: PADDING }}
          colors={["transparent", Colors.dark]}
        >
          <View style={styles.bar}></View>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={styles.place}>{data?.countPlace} Places</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
