import React from "react";
import { Text, StyleSheet, TouchableHighlight, View } from "react-native";
import { Typography, Colors } from "../themes";
import SvgUri from "react-native-svg-uri";
import { Discover } from "../@domain";

const styles = StyleSheet.create({
  container: {
    margin: 6,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: Colors.medium,
    shadowOpacity: 1,
  },
  touchable: {
    backgroundColor: "#fff",
    borderRadius: 6,
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

export function DiscoverItem(props: Discover) {
  const { id, title, countPlace, imgCover, endPoint } = props;

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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{countPlace} Place</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
