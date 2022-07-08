import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./src/surfaces/Login";
import { Home } from "./src/surfaces/Home";
import { UserDetailsModal } from "./src/surfaces/UserDetailsModal";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { requestBase } from "./src/utils/constants";
import { UserListContext } from "./src/context";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
  },
};

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  async function fetchUserData() {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!userList) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList: userList }}>
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
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
    </SafeAreaProvider>
  );
}
