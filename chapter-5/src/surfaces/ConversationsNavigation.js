import React, { useState } from "react";
import { Conversations } from "./Conversations";
import { Messages } from "./Messages";
import { createStackNavigator } from "@react-navigation/stack";
import { ConversationContextProvider } from "../context";

const Stack = createStackNavigator();

export const ConversationsNavigation = () => {
  return (
    <ConversationContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "#000000",
          headerTransparent: true,
          headerTitleAlign: "left",
          headerStyle: {
            height: 160,
          },
          headerTitleStyle: {
            textAlign: "left",
            fontWeight: "bold",
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen name='Conversations' component={Conversations} />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleStyle: {
              textAlign: "center",
              fontFamily: "Poppins_400Regular",
              fontSize: 20,
              position: "absolute",
              top: 100,
              left: 120,
            },
          })}
        />
      </Stack.Navigator>
    </ConversationContextProvider>
  );
};
