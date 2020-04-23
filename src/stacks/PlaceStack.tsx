import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

const PlaceStack = createStackNavigator();

export function PlaceStackScreen() {
    return <PlaceStack.Navigator>
        {/* <PlaceStack.Screen name="Place" component={}></PlaceStack.Screen> */}
    </PlaceStack.Navigator>
}