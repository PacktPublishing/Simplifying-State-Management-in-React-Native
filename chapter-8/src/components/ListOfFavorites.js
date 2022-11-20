import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { useAtom } from "jotai";
import { imageListAtom } from "../atoms/fetchImagesAtom";

export const ListOfFavorites = ({ navigation }) => {
  const [imageList] = useAtom(imageListAtom);

  if (!imageList) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  );
};
