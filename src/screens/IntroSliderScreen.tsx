import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Restaurant } from "../@domain";
import { RestaurantExpandItem } from "../components";
import AppIntroSlider from "react-native-app-intro-slider";
import { Colors, Typography } from "../themes";
import { buttonStyles } from "../themes/styles/button.style";
import SvgUri from "react-native-svg-uri";

const slides = [
  {
    key: 1,
    title: "Quick search",
    text: "Select your location to start exploring\nrestaurants around you",
    icon: require("../../assets/icons/search.svg"),
  },
  {
    key: 2,
    title: "Variety of food",
    text: "Select your location to start exploring\nrestaurants around you",
    icon: require("../../assets/icons/food.svg"),
  },
  {
    key: 3,
    title: "Search for a place",
    text: "Select your location to start exploring\nrestaurants around you",
    icon: require("../../assets/icons/find.svg"),
  },
  {
    key: 4,
    title: "Fast a shipping",
    text: "Select your location to start exploring\nrestaurants around you",
    icon: require("../../assets/icons/fast-delivery.svg"),
  },
];

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.accentVariant,
    justifyContent: "center",
  },
  loginButton: {
    position: "absolute",
    top: height * 64 / 100,
    backgroundColor: Colors.white,
    borderRadius: 2,
    width: width - 32,
    margin: 16
  },
  loginButtonText: {
    color: Colors.dark,
    fontSize: Typography.stronger,
    fontWeight: "700",
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 12,
  },
  description: {
    textAlign: "center",
    marginBottom: 200,
    fontWeight: "600",
  },
  slideTitle: {
    textAlign: "center",
    fontSize: Typography.medium + 4,
    fontWeight: "700",
    marginBottom: 16,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
});

interface IntroProps {
  onDone: any;
}

export function IntroSliderScreen(props: IntroProps) {
  const { onDone } = props;

  return (
    <View style={styles.pageContainer}>
      <AppIntroSlider
        showPrevButton={true}
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
      />

      <TouchableOpacity style={[buttonStyles.expandButton, styles.loginButton]}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const renderItem = ({ item }: any) => {
  const { key, text, title, icon } = item;
  return (
    <View style={styles.slideContainer} key={`slide${key}`}>
      <View style={styles.iconWrapper}>
        <SvgUri width="220" height="220" source={icon} />
      </View>
      <Text style={styles.slideTitle}>{title}</Text>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};
