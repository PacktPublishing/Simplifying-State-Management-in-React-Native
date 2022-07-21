import React, { useState, useEffect } from "react";
import { View, FlatList, Image, useWindowDimensions } from "react-native";
import { requestBase } from "../utils/constants";

export const AddedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;
  const [addedImagesData, setAddedImagesData] = useState(null);
  async function fetchAddedImagesData() {
    const response = await fetch(requestBase + "/john_doe/addedImages.json");
    setAddedImagesData(await response.json());
  }

  useEffect(() => {
    if (!addedImagesData) {
      fetchAddedImagesData();
    }
  }, [addedImagesData]);

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
        data={addedImagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={240}
        decelerationRate='fast'
      />
    </View>
  );
};
