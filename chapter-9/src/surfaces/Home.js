import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "./Feed";
import { Profile } from "./Profile";
import { Favorites } from "./Favorites";
import { AddPost } from "./AddPost";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../styles/colors";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const ConversationsBase = () => <View style={{ flex: 1 }} />;

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentStroke,
        tabBarInactiveTintColor: colors.black,
        tabBarShowLabel: false,
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
      })}
    >
      <Tab.Screen name='Feed' component={Feed} />
      <Tab.Screen
        name='ConversationsMain'
        component={ConversationsBase}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name='chatbox-outline' color='#000000' size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("ConversationsNav");
          },
        })}
      />
      <Tab.Screen
        name='AddPost'
        component={AddPost}
        options={{
          tabBarIcon: ({ size }) => (
            <View
              style={{
                marginTop: -30,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#000000",
                  padding: 30,
                  bottom: -10,
                  left: -13,
                  borderRadius: 23,
                  transform: [{ rotate: "-45deg" }],
                  shadowColor: "#000000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              />
              <Ionicons name='add-circle-outline' color='#ffffff' size={36} />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
