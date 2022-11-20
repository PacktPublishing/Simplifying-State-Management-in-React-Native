import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { ListOfAvatars } from "../components/ListOfAvatars";
import { ListOfCards } from "../components/ListOfCards";

export const Feed = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255, 0.85)",
          height: 100,
          width: "100%",
          zIndex: 100,
        }}
      />
      <ListOfAvatars navigation={navigation} />
      <ListOfCards navigation={navigation} />
    </SafeAreaView>
  );
};
