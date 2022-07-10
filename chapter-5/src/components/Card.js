import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useUserList } from "../context";

export const Card = ({ item, navigation }) => {
  const userList = useUserList();
  const currentUser =
    userList?.filter((user) => user.id === item.authorId) || [];
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ImageDetailsModal", { imageItem: item })
      }
    >
      <Image
        style={{
          width: "100%",
          height: 288,
          borderRadius: 20,
          marginBottom: 32,
        }}
        source={{
          uri: item.url,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 36,
            height: 36,
            borderRadius: 20,
            marginRight: 8,
          }}
          source={{
            uri: currentUser[0]?.url,
          }}
        />
        <View>
          <Text style={{ color: "#ffffff", fontSize: 12 }}>
            {currentUser[0]?.name}
          </Text>
          <Text style={{ color: "#D8D8D8", fontSize: 12 }}>2 hrs ago</Text>
        </View>
      </View>
    </Pressable>
  );
};
