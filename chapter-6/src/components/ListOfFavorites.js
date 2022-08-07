import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { store } from '../../store';

export const ListOfFavorites = ({ navigation }) => {
  const [imageList, setImageList] = useState();

  const likedImages = store.likedImages;

  if (!likedImages) {
    return <AppLoading />;
  }

  useEffect(() => {
    const reversedImages = [...likedImages].reverse();
    setImageList(reversedImages);
  }, [likedImages]);

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
