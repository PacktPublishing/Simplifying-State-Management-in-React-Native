import React from "react";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";

export const Login = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}>
          this will be the login screen
        </Text>
      </View>
    </SafeAreaView>
  );
};
