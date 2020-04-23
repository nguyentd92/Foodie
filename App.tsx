import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StyleDiscoverScreen } from "./src/screens/StyleDiscoverScreen";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StyleDiscoverScreen></StyleDiscoverScreen>
    </SafeAreaView>
  );
}
