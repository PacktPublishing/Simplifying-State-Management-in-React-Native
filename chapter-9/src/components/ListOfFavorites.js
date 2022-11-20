import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { useFavorited, useUserState } from "../context";
import { useCustomImageQuery } from '../queries/useCustomImageQuery';

export const ListOfFavorites = ({ navigation }) => {
  const userState = useUserState();
  // const { state: favoritedData } = useFavorited(userState);
  const [imageList, setImageList] = useState([]);
  const { data: favoritedData } = useCustomImageQuery();

  if (!favoritedData) {
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
        data={favoritedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  );
};
