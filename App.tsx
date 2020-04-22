import * as React from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ComponentsScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, FavoriteScreen, CollectionsScreen } from "./src/screens";
import { DiscoverScreen } from "./src/screens/DiscoverScreen";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <CollectionsScreen></CollectionsScreen>
    </SafeAreaView>
  );
}
