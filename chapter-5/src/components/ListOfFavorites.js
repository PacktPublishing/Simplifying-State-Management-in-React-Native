import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { requestBase } from "../utils/constants";
import { useFavorited, useUserState } from "../context";

export const ListOfFavorites = ({ navigation }) => {
  const [cardList, setCardList] = useState(null);
  const userState = useUserState();
  const { state: favoritedData } = useFavorited(userState);

  if (!cardList) {
    return <AppLoading />;
  }

  console.log("not! HAPPY!", favoritedData);

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
