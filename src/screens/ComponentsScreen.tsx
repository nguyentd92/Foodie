import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  RestaurantExpandItem,
  RestaurantItem,
  DiscoverItem,
  GalleryItem,
} from "../components";
import { MealPosterItem } from "../components";
import { ReviewItem } from "../components";

export function ComponentsScreen() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <RestaurantExpandItem thumbnailMode={true}></RestaurantExpandItem>
          <RestaurantExpandItem></RestaurantExpandItem>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <RestaurantItem></RestaurantItem>
          <RestaurantItem></RestaurantItem>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <MealPosterItem></MealPosterItem>
          <MealPosterItem></MealPosterItem>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <DiscoverItem></DiscoverItem>
          <DiscoverItem></DiscoverItem>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
        </View>

        <View>
          <ReviewItem></ReviewItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
