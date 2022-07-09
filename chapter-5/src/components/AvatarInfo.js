import React from "react";
import { View, FlatList, Pressable, Image } from "react-native";
import { ListHeaderComponent } from "./ListHeaderComponent";
import { useUserList } from "../context";

export const AvatarInfo = () => {
  const userList = useUserList();
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log("hello")}>
        <Image
          style={{ height: 56, width: 56, borderRadius: 28, marginRight: 30 }}
          source={{
            uri: item.url,
          }}
        />
      </Pressable>
    );
  };
  return (
    <View
      style={{
        zIndex: 100,
        paddingVertical: 30,
        paddingLeft: 20,
        backgroundColor: "rgba(255,255,255, 0.85)",
      }}
    >
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ListHeaderComponent={<ListHeaderComponent />}
        showsHorizontalScrollIndicator={false}
        snapToInterval={86}
        decelerationRate='fast'
      />
    </View>
  );
};
