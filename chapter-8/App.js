import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./src/surfaces/Login";
import { Home } from "./src/surfaces/Home";
import { UserDetailsModal } from "./src/surfaces/UserDetailsModal";
import { ImageDetailsModal } from "./src/surfaces/ImageDetailsModal";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  UserListContextProvider,
  FavoritedContextProvider,
  BookmarksContextProvider,
  UserStateContext,
} from "./src/context";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
  },
};

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <UserStateContext.Provider value={userLoggedIn}>
        <UserListContextProvider>
          <FavoritedContextProvider>
            <BookmarksContextProvider>
              <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                  <Stack.Group>
                    {!userLoggedIn ? (
                      <Stack.Screen name='Login' component={Login} />
                    ) : (
                      <>
                        <Stack.Screen
                          name='Home'
                          component={Home}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name='ConversationsNav'
                          component={ConversationsNavigation}
                          options={{ headerShown: false }}
                        />
                      </>
                    )}
                  </Stack.Group>
                  <Stack.Group screenOptions={{ presentation: "modal" }}>
                    <Stack.Screen
                      name='UserDetailsModal'
                      component={UserDetailsModal}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='ImageDetailsModal'
                      component={ImageDetailsModal}
                      options={{ headerShown: false }}
                    />
                  </Stack.Group>
                </Stack.Navigator>
              </NavigationContainer>
            </BookmarksContextProvider>
          </FavoritedContextProvider>
        </UserListContextProvider>
      </UserStateContext.Provider>
    </SafeAreaProvider>
  );
}
