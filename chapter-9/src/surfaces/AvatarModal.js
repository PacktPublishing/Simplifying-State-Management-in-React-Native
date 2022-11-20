import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export const AvatarModal = ({ navigation, route }) => {
  console.log("do i have stuff?", route.params);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: -20 }}>
      <View>
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: "#EEF2E2",
            position: "absolute",
            top: -110,
            left: -370,
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
            top: -110,
            left: -420,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            position: "absolute",
            top: -120,
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
              paddingTop: 3,
            }}
          >
            Go back
          </Text>
        </Pressable>
        <View style={{ paddingTop: 30, paddingLeft: 24, flexDirection: "row" }}>
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
                height: 89,
                width: 89,
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
              fontSize: 20,
              alignSelf: "center",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            {route.params.user.name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
