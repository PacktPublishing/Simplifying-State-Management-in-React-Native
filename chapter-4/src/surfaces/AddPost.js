import React from "react";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";

export const AddPost = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}>
          this will be the add post screen
        </Text>
      </View>
    </SafeAreaView>
  );
};
