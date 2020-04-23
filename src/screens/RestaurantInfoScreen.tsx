import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { Colors, Typography } from "../themes";
import { inputStyles } from "../themes/styles";
import { buttonStyles } from "../themes/styles/button.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import { photos } from "../@mock/photo.mock";
import { GalleryItem, ReviewItem } from "../components";
import LinearGradient from "react-native-linear-gradient";
import { reviews } from "../@mock";
import { Review } from "../@domain";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  banner: {
    width,
    height: 300,
    justifyContent: "flex-end",
    zIndex: 10,
  },
  name: {
    width: 200,
    color: Colors.white,
    fontSize: Typography.large,
    fontWeight: "700",
    margin: 16,
  },
  orderText: {
    color: Colors.white,
    fontWeight: "700",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnSocial: {
    margin: 20,
    alignItems: "center",
  },
  btnSocialText: {
    marginTop: 2,
    color: Colors.dark,
    fontSize: Typography.default,
  },
  mapContainer: {},
  map: {
    width,
    height: 160,
  },
  mapOverlay: {
    height: 160,
  },
  mapDetails: {
    height: 160,
    paddingLeft: 16,
    position: "absolute",
    justifyContent: "center",
  },
  mapDetail: {
    color: Colors.medium,
    fontSize: Typography.stronger,
  },
  marker: {
    position: "absolute",
    top: 60,
    right: 76,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  detailTitle: {
    color: Colors.medium,
    fontWeight: "500",
    fontSize: Typography.stronger,
  },
  detailValue: {
    color: Colors.pearl,
    fontSize: Typography.stronger,
  },
  photos: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  photoTitle: {
    marginBottom: 12,
    fontSize: Typography.stronger,
    fontWeight: "600",
  },
  photoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 3,
    paddingBottom: 16,
  },
  readAll: {
    margin: 16,
    marginBottom: 100,
    color: Colors.pearl,
    fontWeight: "700",
  },
});

interface SocialButton {
  title: string;
  icon: string;
}

const socialButtons: SocialButton[] = [
  {
    title: "Share",
    icon: "share-square",
  },
  {
    title: "Review",
    icon: "star",
  },
  {
    title: "Photo",
    icon: "camera-retro",
  },
];

export function RestaurantInfoScreen() {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.banner}
        source={require("../../assets/images/berries-granola.jpg")}
      >
        <Text style={styles.name}>Blacksmith Cafe</Text>
      </ImageBackground>

      <TouchableOpacity
        style={[buttonStyles.expandButton, buttonStyles.accent]}
      >
        <Text style={styles.orderText}>Order Food Online</Text>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        {socialButtons.map((btn) => renderSocialButton(btn))}
      </View>

      <ImageBackground
        style={styles.map}
        source={require("../../assets/images/map.png")}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.mapOverlay}
          colors={[
            "rgba(255,255,255, 1)",
            "rgba(255,255,255, 0.85)",
            "rgba(255,255,255, .2)",
          ]}
        ></LinearGradient>

        <Icon
          style={styles.marker}
          color={Colors.pearl}
          name="map-marker-alt"
          size={24}
        ></Icon>

        <View style={styles.mapDetails}>
          <Text style={styles.mapDetail}>123 Queen Street, Sydney</Text>
          <Text style={styles.mapDetail}>Australian, Cafe</Text>
          <Text style={styles.mapDetail}>11:30 AM to 11 PM</Text>
        </View>
      </ImageBackground>

      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Call</Text>
        <Text style={styles.detailValue}>(+1) 2 3872 8392</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Cuisines</Text>
        <Text style={styles.detailValue}>Australian, Cafe</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Average Cost</Text>
        <Text style={styles.detailValue}>$20 - $50</Text>
      </View>

      <View style={styles.photos}>
        <Text style={styles.photoTitle}>Photos</Text>

        <View style={styles.photoContainer}>
          {photos.map((photo, index) => renderPhoto(photo, index))}
        </View>
      </View>

      <View style={styles.photos}>
        <Text style={styles.photoTitle}>Reviews</Text>

        {reviews.map((review) => renderReview(review))}
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.readAll}>Read all (123)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function renderSocialButton(button: SocialButton) {
  const { title, icon } = button;
  return (
    <TouchableOpacity key={title} style={styles.btnSocial}>
      <Icon name={icon} light color={Colors.dark} size={22} />
      <Text style={styles.btnSocialText}>{title}</Text>
    </TouchableOpacity>
  );
}

const photoSize = (width - 16 * 2 - 24) / 4;

function renderPhoto(item: string, index: number) {
  return (
    <View key={`photo${index}`}>
      <GalleryItem
        moreCount={index == 3 ? 6 : undefined}
        size={photoSize}
        uri={item}
      />
    </View>
  );
}

function renderReview(data: Review) {
  return (
    <View key={`review${data.id}`} style={styles.reviewWrapper}>
      <ReviewItem data={data} />
    </View>
  );
}
