import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Typography, Colors } from "../themes";
import { Review } from "../@domain";
import { GalleryItem } from "./GalleryItem";
import { photos } from "../@mock/photo.mock";
import Icon from "react-native-vector-icons/FontAwesome5";
import StarRating from "react-native-star-rating";

const AVATAR_SIDE = 68;

const PADDING = 12;

const { width, height } = Dimensions.get("screen");

const photoSize = (width - 16 * 2 - 24) / 4;

const styles = StyleSheet.create({
  container: {
    paddingVertical: PADDING,
  },
  //   Top
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: AVATAR_SIDE,
    height: AVATAR_SIDE,
    borderRadius: AVATAR_SIDE / 2,
    overflow: "hidden",
    marginRight: PADDING,
  },
  userName: {
    fontSize: Typography.medium,
    fontWeight: "600",
    marginBottom: PADDING / 2,
  },
  userAddress: {
    color: Colors.medium,
    fontSize: Typography.default,
    marginBottom: PADDING / 2,
  },
  rateWrapper: {
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingValue: {
    marginLeft: 12,
    fontSize: Typography.default,
    color: Colors.accentVariant,
  },
  socialWrapper: {
    flexDirection: "row",
  },
  followWrapper: {
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: PADDING / 2,
    paddingHorizontal: PADDING * 1.618,
    borderColor: Colors.pearl,
  },
  followText: {
    color: Colors.pearl,
    fontWeight: "600",
  },

  //   Content
  contentDescription: {
    color: Colors.medium,
    fontSize: Typography.stronger
  },
  photos: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnComment: {
    marginLeft: 20
  }
});

interface ReviewItemProps {
  data: Review;
}

export function ReviewItem(props: ReviewItemProps) {
  const { data } = props;

  const {
    user,
    rating,
    content,
    userAvatar,
    countReviews,
    countFollowers,
    liked,
  } = data;
  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.top}>
        <ImageBackground
          style={styles.avatar}
          source={require("../../assets/images/hot-fresh-donut.jpg")}
        ></ImageBackground>

        <View style={{ flexGrow: 1 }}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.userAddress}>
            {countReviews} Reviewers, {countFollowers} Followers
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => {}}
          style={styles.followWrapper}
          underlayColor={Colors.pearl}
          activeOpacity={0.2}
        >
          <Text style={styles.followText}>Follow</Text>
        </TouchableHighlight>
      </View>

      {/* Rating Bar */}
      <View style={styles.rateWrapper}>
        <View style={styles.rating}>
          <StarRating
            disabled={false}
            maxStars={5}
            starSize={20}
            rating={rating}
            selectedStar={(rating: number) => {
              console.log(rating);
            }}
            fullStarColor={Colors.accentVariant}
            emptyStarColor={Colors.accent}
          />

          <Text style={styles.ratingValue}>{rating}</Text>
        </View>

        <View style={styles.socialWrapper}>
          <TouchableOpacity>
            <Icon
              name="thumbs-up"
              color={liked ? Colors.accentVariant : Colors.medium}
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnComment}>
            <Icon name="comment" color={Colors.medium} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.contentDescription}>{content}</Text>

      <View style={styles.photos}>
        {photos.map((photo) => renderPhoto(photo))}
      </View>
    </View>
  );
}

function renderPhoto(url: string) {
  return (
    <View style={styles.photos}>
      <GalleryItem size={photoSize} uri={url} />
    </View>
  );
}
