import React from "react";
import { View, FlatList, Image, useWindowDimensions } from "react-native";
import { useFavorited, useUserState } from "../context";

export const AddedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;
  const userState = useUserState();
  const { state: johnsData } = useFavorited(userState);

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: imageWidth,
          height: 220,
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
      }}
    >
      <FlatList
        data={johnsData.addedImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={240}
        decelerationRate='fast'
      />
    </View>
  );
};
