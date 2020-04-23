import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./HomeStack";
import { PlaceStackScreen } from "./PlaceStack";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "react-native";
import { Colors } from "../themes";
import { FavoriteStackScreen } from "./FavoriteStack";

interface TabOption {
  title: string;
  icon: string;
  iconFocused?: string;
  routeName: string;
}

const navigationOptions = {
  headerShown: false,
};

const tabList: Array<TabOption> = [
  {
    title: "Discover",
    icon: "th",
    routeName: "Home",
  },
  {
    title: "Discover",
    icon: "th",
    routeName: "Home",
  },
  {
    title: "Favorite",
    icon: "heart",
    routeName: "Favorite",
    iconFocused: ""
  },
  {
    title: "Place",
    icon: "compass",
    routeName: "Place",
  },
];

const TabsStack = createBottomTabNavigator();

export function TabsStackScreen() {
  return (
    <TabsStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // if (route.name === "Home") {
          //   iconName = focused
          //     ? "ios-information-circle"
          //     : "ios-information-circle-outline";
          // } else if (route.name === "Settings") {
          //   iconName = focused ? "ios-list-box" : "ios-list";
          // }

          const tab = getTitleAndIcon(route.name);
          const { icon, iconFocused } = tab;
          color = focused ? Colors.accentVariant : Colors.medium;
          const name = focused ? iconFocused || icon : icon;

          // You can return any component that you like here!
          return <Icon name={icon} size={size} color={color} solid={focused} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return null;
        },
      })}
    >
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

      <TabsStack.Screen
        {...navigationOptions}
        name="Favorite"
        component={FavoriteStackScreen}
      ></TabsStack.Screen>
    </TabsStack.Navigator>
  );
}

function getTitleAndIcon(routeName: string): TabOption {
  const tab: TabOption = tabList.find(
    (tab: TabOption) => routeName === tab.routeName
  );

  return tab;
}
