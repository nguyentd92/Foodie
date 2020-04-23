import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FoodType, Restaurant } from "../@domain";
import LinearGradient from "react-native-linear-gradient";
import { Colors, Typography } from "../themes";
import { RestaurantItem, MealPosterItem, GalleryItem } from "../components";
import { restaurants, foodTypes } from "../@mock";
import { photos } from "../@mock/photo.mock";

const { width, height } = Dimensions.get("window");
const PADDING = 12;

const styles = StyleSheet.create({
  pageContainer: {},
  gridContainer: {
    margin: 12,
    minHeight: height,
  },
  banner: {
    width,
    height: 280,
    justifyContent: "flex-end",
  },
  bar: {
    width: 48,
    height: 2,
    backgroundColor: Colors.accent,
    marginBottom: PADDING,
  },
  title: {
    color: "#fff",
    fontSize: Typography.stronger,
    fontWeight: "600",
    marginBottom: PADDING / 2,
  },
  place: {
    color: "#fff",
  },
  section: {
    marginTop: 20,
  },
  popularContainer: {
    marginTop: PADDING * 2,
  },
  popularTitle: {
    marginLeft: PADDING,
    fontSize: Typography.stronger,
    fontWeight: "600",
    marginBottom: PADDING / 2,
  },
  popularScroll: {
    paddingLeft: PADDING,
    paddingVertical: 6,
  },
  mealDeal: {
    marginRight: PADDING,
  },
  seeAll: {
    position: "absolute",
    top: 1,
    right: 12,
    zIndex: 10,
  },
  seeAllText: {
    fontWeight: "500",
    color: Colors.pearl,
  },
  photoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 6,
  },
  endSection: {
    marginBottom: 48,
  },
});

const initialRestaurants: Array<Restaurant> = restaurants;
const initialFootTypeList: Array<FoodType> = foodTypes;

export function StyleDiscoverScreen({ navigation }: any) {
  const [restaurantList, setRestaurantList] = useState(initialRestaurants);

  const [foodTypeList, setFoodTypeList] = useState(initialFootTypeList);

  const [banner, setBanner] = useState<FoodType>({
    id: 1,
    name: "Greek Style",
    countPlace: 34,
    imgCover: "",
  });

  return (
    <ScrollView style={styles.pageContainer}>
      <ImageBackground
        source={require("../../assets/images/healthy-breakfast.jpg")}
        style={styles.banner}
      >
        <LinearGradient
          style={{ padding: PADDING }}
          colors={["transparent", Colors.dark]}
        >
          <Text style={styles.title}>{banner?.name}</Text>
          <Text style={styles.place}>{banner?.countPlace} Places</Text>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.popularContainer}>
        {renderSeeAllButton({navigation, route: 'Trending'})}
        <Text style={styles.popularTitle}>Most Popular</Text>
        <FlatList
          style={styles.popularScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={restaurantList}
          keyExtractor={(item) => `restaurant${item.id}`}
          renderItem={({ item }) => renderPopular(item)}
        />
      </View>

      <View style={[styles.section]}>
        {renderSeeAllButton()}
        <Text style={styles.popularTitle}>Meal Deals</Text>

        <FlatList
          style={styles.popularScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={foodTypeList}
          keyExtractor={(item) => `restaurant${item.id}`}
          renderItem={({ item }) => renderMealDeal(item)}
        />
      </View>

      <View style={[styles.section, styles.endSection]}>
        {renderSeeAllButton()}
        <Text style={styles.popularTitle}>Popular Restaurants</Text>

        <View style={styles.photoContainer}>
          {photos.map((photo, index) => renderPhoto(photo, index))}
        </View>
      </View>
    </ScrollView>
  );
}

function renderPopular(data: Restaurant) {
  return <RestaurantItem />;
}

function renderMealDeal(data: any) {
  return (
    <View style={styles.mealDeal}>
      <MealPosterItem data={data} />
    </View>
  );
}

function renderPhoto(item: string, index: number) {
  const size = (width - 24 - 24) / 4;
  return (
    <View key={`photo${index}`}>
      <GalleryItem
        moreCount={index == 3 ? 6 : undefined}
        size={size}
        uri={item}
      />
    </View>
  );
}

function renderSeeAllButton({ navigation, route, stack }: any = {}) {
  return (
    <TouchableOpacity
      style={styles.seeAll}
      onPress={() => navigation ? navigation.push(route) : null}
    >
      <Text style={styles.seeAllText}>See all</Text>
    </TouchableOpacity>
  );
}
