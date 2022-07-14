import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfFavorites } from "../components/ListOfFavorites";

export const Favorites = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <ListOfFavorites navigation={navigation} />
    </SafeAreaView>
  );
};
