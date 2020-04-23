import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Restaurant } from "../@domain";

import Icon from "react-native-vector-icons/FontAwesome";

import { Typography, Colors } from "../themes";
import { navigate } from "../@common";

const THUMBNAIL_SIDE = 96;
const PADDING = 12

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 12,
    flexDirection: "row",
    shadowColor: Colors.medium,
    shadowOpacity: 0.6,
    padding: PADDING,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    minHeight: 120
  },
  thumbnail: {
    width: THUMBNAIL_SIDE,
    height: THUMBNAIL_SIDE,
    borderRadius: 6,
    marginRight: PADDING,
  },
  detailsWrapper: {},
  name: {
    fontSize: Typography.medium,
    fontWeight: "700",
    paddingBottom: 10,
  },
  openingTime: {
    paddingBottom: 10,
    color: Colors.medium,
  },
  address: {
    justifyContent: "flex-end",
    color: Colors.medium,
  },
  ratingWrapper: {
    position: "absolute",
    backgroundColor: Colors.accent,
    width: 48,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    top: PADDING,
    right: PADDING,
  },
  ratingText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  bookmark: {
    position: "absolute",
    right: 12,
    bottom: 12,
    color: Colors.pearl,
  },
});

const bookmarkIcon = (
  <Icon style={styles.bookmark} name="bookmark" size={20} />
);

const thumbnail = <Image
        style={styles.thumbnail}
        source={require("../../assets/images/full-grill-full-of-meat-and-veggies.jpg")}
      />

interface IRestaurantItemProps {
  thumbnailMode?: boolean,
  data: Restaurant
}

export function RestaurantExpandItem(props: IRestaurantItemProps) {


  const {thumbnailMode, data} = props

  return (
    <TouchableOpacity onPress={() => navigate("Root", {screen: "RestaurantInfo"})} activeOpacity={0.6} style={styles.container}>
      {thumbnailMode ? thumbnail : null}

      <View style={styles.detailsWrapper}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.openingTime}>
          {data.timeOpened} to {data.timeClosed}
        </Text>
        <Text style={styles.address}>{data.address}</Text>
      </View>

      <View style={styles.ratingWrapper}>
        <Text style={styles.ratingText}>{data.rating}</Text>
      </View>

      {bookmarkIcon}
    </TouchableOpacity>
  );
}
