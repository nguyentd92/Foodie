import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleDiscoverScreen, TrendingScreen } from "../screens";

const HomeStack = createStackNavigator();

const navigationOptions = {
  headerShown: false,
};

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Place"
        component={StyleDiscoverScreen}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name="Trending"
        component={TrendingScreen}
        options={
          {
            headerBackTitle: "Back"
          }
        }
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
