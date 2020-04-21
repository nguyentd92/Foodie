import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Restaurant } from "../@domain";

import { Typography, Colors } from "../themes";

const PADDING = 12;
const WIDTH = 148;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: Colors.medium,
    shadowOpacity: 0.6,
    width: WIDTH,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginRight: PADDING,
    minHeight: 170
  },
  thumbnail: {
    width: WIDTH,
    height: WIDTH / 1.618,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  detailsWrapper: {
    height: 130,
    padding: 10
  },
  name: {
    fontSize: Typography.stronger,
    fontWeight: "700",
    marginBottom: 4,
  },
  address: {
    paddingBottom: 2,
    color: Colors.medium,
  },
  food: {
    justifyContent: "flex-end",
    color: Colors.medium,
  },
});

const thumbnail = (
  <Image
    style={styles.thumbnail}
    source={require("../../assets/images/full-grill-full-of-meat-and-veggies.jpg")}
  />
);

interface IRestaurantItemProps {
  thumbnailMode?: boolean;
}

export function RestaurantItem(props: IRestaurantItemProps) {
  const { thumbnailMode } = props;

  const [item, setItem] = useState<Restaurant>({
    id: 1,
    name: "Sushi Car",
    imgCover: "/assets/images/full-grill-full-of-meat-and-veggies.jpg",
    address: "20 Queen Street",
    timeClosed: "11:00 PM",
    timeOpened: "11:00 AM",
    rating: 4.0,
  });

  return (
    <View style={{ ...styles.container, height: 150 }}>
      {thumbnail}

      <View style={styles.detailsWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.food}>Burritos, Greek</Text>
      </View>
    </View>
  );
}
