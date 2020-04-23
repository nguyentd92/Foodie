import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FoodType } from "../@domain";
import { MealPosterItem } from "../components";
import LinearGradient from "react-native-linear-gradient";
import { Typography, Colors } from "../themes";
import { foodTypes } from "../@mock";

const initialCollections: Array<FoodType> = foodTypes

const { width, height } = Dimensions.get("window");
const PADDING = 12

const styles = StyleSheet.create({
  gridContainer: {
    margin: 12,
    minHeight: height,
  },
  banner: {
    width,
    height: 280,
    justifyContent: 'flex-end'
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
});

export function CollectionsScreen() {
  const [collectionList, setCollectionList] = useState<Array<FoodType>>(
    initialCollections
  );

  const [banner, setBanner] = useState<FoodType>(initialCollections[0])

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../../assets/images/healthy-breakfast.jpg")}
          style={styles.banner}
        >
          <LinearGradient
            style={{ padding: PADDING }}
            colors={["transparent", Colors.dark]}
          >
            <View style={styles.bar}></View>
            <Text style={styles.title}>{banner?.name}</Text>
            <Text style={styles.place}>{banner?.countPlace} Places</Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      <FlatList
        data={collectionList}
        style={styles.gridContainer}
        numColumns={2}
        keyExtractor={(item) => `collection${item.id}`}
        renderItem={({ item }) => renderItem(item)}
      ></FlatList>
    </ScrollView>
  );
}

function renderItem(data: FoodType) {
  return <MealPosterItem data={data} />;
}
