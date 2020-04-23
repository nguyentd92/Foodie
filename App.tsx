import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { IntroSliderScreen } from "./src/screens";
import { TabsStackScreen } from "./src/stacks/TabsStack";
import { RootStackScreen } from "./src/stacks/RootStack";
import { navigationRef } from "./src/@common";
import { Colors } from "./src/themes";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
});

const navigationOptions = {
  headerShown: false,
};

const AppStack = createStackNavigator();

export default function App() {
  const [isPassIntro, setIsPassIntro] = useState(false);

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      {!isPassIntro ? (
        <IntroSliderScreen onDone={() => setIsPassIntro(true)} />
      ) : (
        <NavigationContainer ref={navigationRef}>
          <AppStack.Navigator {...navigationOptions}>
            <AppStack.Screen
              options={navigationOptions}
              name="Main"
              component={TabsStackScreen}
            />

            <AppStack.Screen
              name="Root"
              options={{
                headerShown: false
              }}
              component={RootStackScreen}
            ></AppStack.Screen>
          </AppStack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
