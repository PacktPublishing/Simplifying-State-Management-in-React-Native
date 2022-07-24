import React from "react";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const AddPost = () => {
  const headerHeight = useHeaderHeight();
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight - 50 }}>
      <View>
        <View
          style={{
            width: width * 0.9,
            height: 300,
            borderRadius: 30,
            backgroundColor: "#000000",
            marginLeft: width * 0.05,
          }}
        >
          <Ionicons
            name='add-circle-outline'
            color='#ffffff'
            size={50}
            style={{ position: "absolute", top: 120, left: "41%" }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 20,
            padding: 20,
          }}
        >
          Press to add image
        </Text>
      </View>
    </SafeAreaView>
  );
};
