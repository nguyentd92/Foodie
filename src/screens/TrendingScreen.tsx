import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FoodType, Restaurant } from "../@domain";
import { MealPosterItem, RestaurantExpandItem } from "../components";
import LinearGradient from "react-native-linear-gradient";
import { Typography, Colors } from "../themes";
import { foodTypes, restaurants } from "../@mock";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  banner: {
    width,
    height: 240,
  },
  header: {
    backgroundColor: Colors.light,
    padding: 12,
  },
  pageTitle: {
    fontSize: Typography.large,
    fontWeight: "700",
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  count: {
    fontWeight: "500",
    color: Colors.dark,
  },
  filterButton: {
    color: Colors.pearl
  }
});

const initialRestaurantList: Restaurant[] = restaurants

export function TrendingScreen() {
  const [restaurantList, setRestaurantList] = useState(initialRestaurantList)

  return (
    <ScrollView>
      <ImageBackground
        style={styles.banner}
        source={require("../../assets/images/full-grill-full-of-meat-and-veggies.jpg")}
      ></ImageBackground>

      <View style={styles.header}>
        <Text style={styles.pageTitle}>Trending</Text>

        <View style={styles.row}>
          <Text style={styles.count}>20 Restaurants</Text>

          <TouchableOpacity>
            <Text style={styles.filterButton}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={restaurantList}
        keyExtractor={(item) => `trend${item.id}`}
        renderItem={({ item }) => renderTrend(item)}
      />
    </ScrollView>
  );
}

function renderTrend(data: Restaurant) {
  return <View>
    <RestaurantExpandItem thumbnailMode data={data}/>
  </View>
}