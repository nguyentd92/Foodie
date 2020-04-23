import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListRestaurantScreen } from "../screens";

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
        component={ListRestaurantScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
