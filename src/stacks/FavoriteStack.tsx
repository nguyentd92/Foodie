import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListRestaurantScreen, StyleDiscoverScreen, FavoriteScreen } from "../screens";

const FavoriteStack = createStackNavigator();

export function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="MainFavorite"
        options={{
            title: 'Favorites'
        }}
        component={FavoriteScreen}
      ></FavoriteStack.Screen>
    </FavoriteStack.Navigator>
  );
}
