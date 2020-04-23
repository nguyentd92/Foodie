import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Colors, Typography } from "../themes";

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.light,
    fontSize: Typography.stronger,
  },
});

interface GalleryProps {
  moreCount?: number;
  uri: string;
  size: number;
}

export function GalleryItem(props: GalleryProps) {
  const { moreCount, size } = props;

  return (
    <TouchableOpacity activeOpacity={.5}>
      <ImageBackground
        style={{ ...styles.container, width: size, height: size }}
        source={require("../../assets/images/fresh-appetizers-cocktails.jpg")}
      >
        {moreCount ? renderOverlay(moreCount, size) : null}
      </ImageBackground>
    </TouchableOpacity>
  );
}

function renderOverlay(count: number, size: number) {
  return (
    <View style={{ ...styles.overlay, width: size, height: size }}>
      <Text style={styles.text}>{count}+</Text>
    </View>
  );
}
