import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import { useXStateContext } from "../context";
import { useActor } from "@xstate/react";

export const ListOfFavorites = ({ navigation }) => {
  const globalServices = useXStateContext();
  const [state] = useActor(globalServices.globalAppService);
  const [imageData, updateImageData] = useState([]);

  useEffect(() => {
    updateImageData(state.context.likedImages);
  }, [state.context.likedImages]);

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
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  );
};
