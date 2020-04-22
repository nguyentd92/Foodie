import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { DiscoverItem } from "../components";
import { Discover } from "../@domain";

const initialDiscover: Discover[] = [
  {
    id: 1,
    title: "Bars & Hotels",
    countPlace: 42,
  },
  {
    id: 2,
    title: "Fine Dining",
    countPlace: 15,
  },
  {
    id: 3,
    title: "Cafes",
    countPlace: 28,
  },
  {
    id: 4,
    title: "Nearby",
    countPlace: 34,
  },
  {
    id: 5,
    title: "Fast Foods",
    countPlace: 21,
  },
  {
    id: 6,
    title: "Featured Foods",
    countPlace: 29,
  },
];

const styles = StyleSheet.create({
    gridContainer: {
        margin: 12
    }
})

export function DiscoverScreen() {
  const [discoverList, setDiscoverList] = useState<Discover[]>(initialDiscover);

  return (
    <FlatList
        style={styles.gridContainer}
      numColumns={2}
      data={discoverList}
      renderItem={({ item }) => <DiscoverItem {...item} />}
      keyExtractor={(item) => `discover${item.id}`}
    />
  );
}
