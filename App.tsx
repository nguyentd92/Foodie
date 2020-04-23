import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  TrendingScreen,
  ListRestaurantScreen,
  RestaurantInfoScreen,
  IntroSliderScreen,
} from "./src/screens";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  const [isPassIntro, setIsPassIntro] = useState(false);

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />

      {!isPassIntro ? (
        <IntroSliderScreen onDone={setIsPassIntro}></IntroSliderScreen>
      ) : (
        <RestaurantInfoScreen />
      )}
    </View>
  );
}
