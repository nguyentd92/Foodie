import * as React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { TrendingScreen, ListRestaurantScreen, RestaurantInfoScreen } from "./src/screens";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  
  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle='light-content'/>
      
      <RestaurantInfoScreen></RestaurantInfoScreen>
    </View>
  );
}
