import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { DiscoverScreen } from '../screens';

const PlaceStack = createStackNavigator();

export function PlaceStackScreen() {
    return <PlaceStack.Navigator>
        <PlaceStack.Screen name="Discover" component={DiscoverScreen}></PlaceStack.Screen>
    </PlaceStack.Navigator>
}