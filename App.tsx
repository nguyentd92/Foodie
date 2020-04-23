import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TrendingScreen } from "./src/screens";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.appContainer}>
      <TrendingScreen></TrendingScreen>
    </View>
  );
}
