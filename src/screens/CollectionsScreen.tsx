import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList, StyleSheet } from "react-native";
import { FoodType } from "../@domain";
import { MealPosterItem } from "../components";

const initialCollections: Array<FoodType> = [
  {
    id: 1,
    name: "Greek Style",
    countPlace: 34,
  },
  {
    id: 2,
    name: "Burgers",
    countPlace: 40,
  },
  {
    id: 3,
    name: "Thai",
    countPlace: 17,
  },
  {
    id: 4,
    name: "Chinese",
    countPlace: 32,
  },
];

const styles = StyleSheet.create({
    gridContainer: {
        margin: 12
    }
})

export function CollectionsScreen() {
  const [collectionList, setCollectionList] = useState<FoodType[]>(initialCollections);

  return (
    <View>
      <Text>Collection Screen</Text>

      <FlatList
        data={collectionList}
        style={styles.gridContainer}
        numColumns={2}
        keyExtractor={item => `collection${item.id}`}
        renderItem={item => renderItem(item)}
      ></FlatList>
    </View>
  );
}

function renderItem(data: FoodType) {
  return <MealPosterItem data={data} />;
}
