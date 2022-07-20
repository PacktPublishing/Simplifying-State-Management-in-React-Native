import React, { useRef, useEffect } from "react";
import { View, FlatList, Image, useWindowDimensions } from "react-native";
import { useBookmarks, useUserState } from "../context";

export const BookmarkedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;
  const userState = useUserState();
  const { bookmarksData } = useBookmarks(userState);
  const flatListRef = useRef(null);

  const ITEM_HEIGHT = 130;

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: imageWidth,
          height: ITEM_HEIGHT,
          borderRadius: 20,
          marginBottom: 32,
          borderColor: "#000000",
        }}
        source={{
          uri: item.url,
        }}
      />
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 400,
      }}
    >
      <FlatList
        data={bookmarksData}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        inverted
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};
