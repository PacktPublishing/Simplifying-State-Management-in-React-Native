import React, { useState, useEffect } from "react";
import { View, TextInput, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ListOfConvos } from "../components/ListOfConvos";
import AppLoading from "expo-app-loading";
import { requestBase } from "../utils/constants";

export const Conversations = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [text, onChangeText] = useState();

  const [conversationsList, setConversationsList] = useState(null);

  async function fetchConversationData() {
    const response = await fetch(requestBase + "/conversations.json");
    setConversationsList(await response.json());
  }

  useEffect(() => {
    fetchConversationData();
  }, []);

  if (!conversationsList) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight - 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
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
          top: 280,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          position: "absolute",
          top: 350,
          left: -160,
          backgroundColor: "#E1F6F4",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View style={{ marginHorizontal: 30, position: "relative" }}>
        <View>
          <TextInput
            style={{
              fontSize: 14,
              paddingVertical: 12,
              paddingLeft: 40,
              marginHorizontal: 17,
              borderRadius: 15,
              backgroundColor: "#ffffff",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 9,
              elevation: 3,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder='search contacts'
          />
          <Ionicons
            name='md-search'
            size={24}
            color='#000000'
            style={{ position: "absolute", left: 28, top: 6 }}
          />
        </View>
        <ListOfConvos
          navigation={navigation}
          conversationsList={conversationsList}
        />
        <Pressable
          onPress={() => console.log("pressed the convo button")}
          style={{
            position: "absolute",
            bottom: 70,
            left: "50%",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "#000000",
              padding: 30,
              top: -16,
              left: -15,
              borderRadius: 23,
              transform: [{ rotate: "-45deg" }],
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          />
          <Ionicons name='paper-plane-outline' color='#ffffff' size={26} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
