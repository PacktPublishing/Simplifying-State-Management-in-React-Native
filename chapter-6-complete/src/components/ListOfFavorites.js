import React from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import AppLoading from "expo-app-loading";
import { useMst } from '../../store';
import { observer } from "mobx-react-lite"
import { values } from 'mobx'

export const ListOfFavorites = observer(({ navigation }) => {
  const { likedImages } = useMst();

  if (!likedImages) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={values(likedImages.imageList)}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  );
});
