import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { DiscoverItem, RestaurantExpandItem } from "../components";
import { Discover, Restaurant } from "../@domain";
import { Colors, Typography } from "../themes";
import { restaurants } from "../@mock";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  banner: {
    width,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    color: '#fff',
    fontSize: Typography.large,
    fontWeight: "600",
    width: 200,
    textAlign: 'center'
  },
  nav: {
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.light
  },
  count: {
    fontWeight: "600",
    fontSize: Typography.stronger,
    color: Colors.dark
  },
  filter: {
    fontSize: Typography.stronger,
    color: Colors.pearl,
  },
});

export function ListRestaurantScreen() {
    const [restaurantList, setRestaurantList] = useState<Restaurant[]>(restaurants)

  return (
    <ScrollView>
      <ImageBackground
        style={styles.banner}
        source={require("../../assets/images/full-grill-full-of-meat-and-veggies.jpg")}
      >
        <Text style={styles.pageTitle}>Asian Restaurants</Text>
      </ImageBackground>

      <View style={styles.nav}>
        <Text style={styles.count}>20 Restaurants</Text>

        <TouchableOpacity>
          <Text style={styles.filter}>Filter</Text>
        </TouchableOpacity>
      </View>

      {restaurantList.map(restaurant => renderRestaurant(restaurant))}
    </ScrollView>
  );
}

function renderRestaurant(data: Restaurant) {
    return <View key={`restaurant${data.id}`}>
        <RestaurantExpandItem data={data}/>
    </View>
}