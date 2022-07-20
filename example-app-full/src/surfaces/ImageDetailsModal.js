import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useUserState, useFavorited } from "../context";

export const ImageDetailsModal = ({ navigation, route }) => {
  const userState = useUserState();
  const { dispatch } = useFavorited(userState);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          bottom: -260,
          left: -140,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          bottom: -290,
          left: -140,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          position: "absolute",
          bottom: -330,
          left: -140,
          backgroundColor: "#E1F6F4",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ flexDirection: "row" }}
      >
        <Ionicons name='chevron-back-outline' size={30} color='#000000' />
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 18,
            marginTop: 3,
          }}
        >
          Go back
        </Text>
      </Pressable>
      <View style={{ paddingTop: 30 }}>
        <Image
          style={{
            width: "100%",
            height: 288,
            marginBottom: 32,
          }}
          source={{
            uri: route.params.imageItem.url,
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 70,
          paddingHorizontal: 20,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <View style={styles.general}>
          <Text style={styles.headerText}>Likes</Text>
          <Text style={styles.stats}>{route.params.imageItem.likes}</Text>
        </View>
        <View style={styles.general}>
          <Text style={styles.headerText}>Conversations</Text>
          <Text style={styles.stats}>
            {route.params.imageItem.conversations}
          </Text>
        </View>
        <View style={styles.general}>
          <Text style={styles.headerText}>Follows</Text>
          <Text style={styles.stats}>128</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignSelf: "center",
          marginTop: 40,
          width: "40%",
        }}
      >
        <Pressable
          onPress={() =>
            dispatch({
              type: "add_like",
              payload: {
                id: route.params.imageItem.itemId + 23,
                url: route.params.imageItem.url,
              },
            })
          }
        >
          <Ionicons name='heart-outline' size={40} color='#000000' />
        </Pressable>
        <Pressable onPress={() => console.log("yo! pressed bookmark")}>
          <Ionicons name='bookmark-outline' size={40} color='#000000' />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  general: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  stats: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
  },
});