import React from "react";
import { View, Text, Image } from "react-native";
import { UserListContext } from "../context";

export const Card = ({ item }) => {
  return (
    <UserListContext.Consumer>
      {({ userList }) => {
        const currentUser = userList.filter(
          (user) => user.id === item.authorId
        );
        return (
          <View>
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
                  uri: currentUser[0].url,
                }}
              />
              <View>
                <Text style={{ color: "#ffffff", fontSize: 12 }}>
                  {currentUser[0].name}
                </Text>
                <Text style={{ color: "#D8D8D8", fontSize: 12 }}>
                  2 hrs ago
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    </UserListContext.Consumer>
  );
};
