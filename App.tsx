import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TrendingScreen, ListRestaurantScreen } from "./src/screens";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.appContainer}>
      <ListRestaurantScreen></ListRestaurantScreen>
    </View>
  );
}
