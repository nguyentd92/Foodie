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
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
    height: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.light,
    fontSize: Typography.stronger,
  },
});

interface GalleryProps {
  moreCount?: number
}

export function GalleryItem(props: GalleryProps) {
         const { moreCount } = props;

         return (
           <ImageBackground
             style={styles.container}
             source={require("../../assets/images/fresh-appetizers-cocktails.jpg")}
           >
             {moreCount ? renderOverlay(moreCount) : null}
           </ImageBackground>
         );
       }

function renderOverlay(count: number) {
  return (
    <View style={styles.overlay}>
      <Text style={styles.text}>{count}+</Text>
    </View>
  );
}
