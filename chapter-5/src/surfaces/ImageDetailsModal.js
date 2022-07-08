import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ImageDetailsModal = ({ navigation, route }) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
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
