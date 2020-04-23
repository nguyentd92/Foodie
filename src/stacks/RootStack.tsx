import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantInfoScreen } from "../screens";

const RootStack = createStackNavigator();

const navigationOptions = {
  headerShown: false,
};

export function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{
          headerBackTitle: 'Back'
        }}
        name="RestaurantInfo"
        component={RestaurantInfoScreen}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
}
