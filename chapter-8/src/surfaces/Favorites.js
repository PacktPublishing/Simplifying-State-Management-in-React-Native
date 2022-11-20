import React, { Suspense } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfFavorites } from "../components/ListOfFavorites";
import AppLoading from "expo-app-loading";
import { useIsFocused } from "@react-navigation/native";

export const Favorites = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <Suspense fallback={<AppLoading />}>
        <ListOfFavorites navigation={navigation} isFocused={isFocused} />
      </Suspense>
    </SafeAreaView>
  );
};
