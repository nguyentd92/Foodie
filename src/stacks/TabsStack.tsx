import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./HomeStack";
import { PlaceStackScreen } from "./PlaceStack";

const navigationOptions = {
  headerShown: false,
};

const TabsStack = createBottomTabNavigator();

export function TabsStackScreen() {
    return (
      <TabsStack.Navigator>
        <TabsStack.Screen
          {...navigationOptions}
          name="Home"
          component={HomeStackScreen}
        />
        <TabsStack.Screen
          {...navigationOptions}
          name="Place"
          component={PlaceStackScreen}
        />
      </TabsStack.Navigator>
    );
}