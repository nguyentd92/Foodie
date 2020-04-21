import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { Colors, Typography } from "../themes";

const WIDTH = 148;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: WIDTH,
    marginRight: 12,
    borderRadius: 6,
    overflow: "hidden"
  },
  overlay: {
      backgroundColor: "rgba(0,0,0,.5)",
      height: WIDTH,
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      color: Colors.light,
      fontSize: Typography.stronger
  }
});

export function GalleryItem() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/fresh-appetizers-cocktails.jpg")}
    >
      <View style={styles.overlay}>
          <Text style={styles.text}>12+</Text>
      </View>
    </ImageBackground>
  );
}
