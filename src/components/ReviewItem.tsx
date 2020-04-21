import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Typography, Colors } from "../themes";

const AVATAR_SIDE = 68;

const PADDING = 12;

const styles = StyleSheet.create({
  container: {
    padding: PADDING,
  },
//   Top
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: AVATAR_SIDE,
    height: AVATAR_SIDE,
    borderRadius: AVATAR_SIDE / 2,
    overflow: "hidden",
    marginRight: PADDING,
  },
  userName: {
    fontSize: Typography.medium,
    fontWeight: "600",
    marginBottom: PADDING / 2,
  },
  userAddress: {
    color: Colors.medium,
    fontSize: Typography.default,
    marginBottom: PADDING / 2,
  },
  followWrapper: {
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: PADDING / 2,
    paddingHorizontal: PADDING * 1.618,
    borderColor: Colors.pearl,
  },
  followText: {
    color: Colors.pearl,
    fontWeight: "600",
  },

//   Content
  contentDescription: {

  }
});

export function ReviewItem() {
  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.top}>
        <ImageBackground
          style={styles.avatar}
          source={require("../../assets/images/hot-fresh-donut.jpg")}
        ></ImageBackground>

        <View style={{ flexGrow: 1 }}>
          <Text style={styles.userName}>Kelly West</Text>
          <Text style={styles.userAddress}>123 Queen Street, Sydney</Text>
        </View>
        <TouchableHighlight style={styles.followWrapper}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableHighlight>
      </View>

      {/* Rating Bar */}
      <View></View>

        <Text style={styles.contentDescription}>
            
        </Text>
      <View></View>
    </View>
  );
}
