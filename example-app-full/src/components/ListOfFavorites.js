import React from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { useFavorited, useUserState } from "../context";

export const ListOfFavorites = ({ navigation }) => {
  const userState = useUserState();
  const { state: favoritedData } = useFavorited(userState);

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
