import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Restaurant } from "../@domain";
import { RestaurantExpandItem } from "../components";

const initialFavorite: Array<Restaurant> = [
  {
    id: 1,
    name: "Good Thai",
    timeOpened: "11:30 AM",
    timeClosed: "11:00 PM",
    address: "20 Queen Street, NSW Asian, Thai",
    rating: 3.7,
  },
  {
    id: 2,
    name: "Sushi Car",
    timeOpened: "11:30 AM",
    timeClosed: "10:00 PM",
    address: "20 New Harbor Street, NSW Asian, Thai",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Black Smith Cafe",
    timeOpened: "11:30 AM",
    timeClosed: "11:00 PM",
    address: "20 Queen Street, NSW Asian, Thai",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Pizza Box",
    timeOpened: "11:30 AM",
    timeClosed: "11:00 PM",
    address: "20 Queen Street, NSW Asian, Thai",
    rating: 5.0,
  },
];

export function FavoriteScreen() {
  const [favoriteList, setFavoriteList] = useState(initialFavorite);

  return (
    <FlatList
      data={favoriteList}
      keyExtractor={(item) => `favorite${item.id}`}
      renderItem={({item}) => renderItem(item)}
    ></FlatList>
  );
}

function renderItem(data: Restaurant) {
  return <RestaurantExpandItem data={data} thumbnailMode/>
}
