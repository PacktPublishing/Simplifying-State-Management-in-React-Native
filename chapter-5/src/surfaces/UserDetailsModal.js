import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UserDetailsModalImages } from "../components/UserDetailsModalImages";

export const UserDetailsModal = ({ navigation, route }) => {
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
          top: -80,
          left: -360,
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
          top: -80,
          left: -410,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          position: "absolute",
          top: -80,
          left: -460,
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
      <View style={{ paddingTop: 20, marginLeft: 20, flexDirection: "row" }}>
        <View
          style={{
            width: 76,
            height: 76,
            borderRadius: 25,
            borderColor: "#000000",
            borderWidth: 1,
            transform: [{ rotate: "-45deg" }],
            alignSelf: "flex-start",
          }}
        />
        <View
          style={{
            overflow: "hidden",
            alignSelf: "flex-start",
            transform: [{ rotate: "-45deg" }],
            borderRadius: 25,
            height: 67,
            width: 67,
            marginLeft: -72,
            marginTop: 4,
          }}
        >
          <Image
            style={{
              height: 95,
              width: 95,
              transform: [{ rotate: "45deg" }],
              alignSelf: "center",
            }}
            source={{
              uri: route.params.user.url,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 19,
            alignSelf: "center",
            marginLeft: 30,
          }}
        >
          {route.params.user.name}
        </Text>
      </View>
      <UserDetailsModalImages />
    </SafeAreaView>
  );
};
