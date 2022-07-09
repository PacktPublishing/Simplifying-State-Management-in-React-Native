import React, { useState, useEffect } from "react";
import { requestBase } from "./utils/constants";

const UserListContext = React.createContext();

function UserListContextProvider({ children }) {
  const [userList, setUserList] = useState(null);
  async function fetchUserData() {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }
  fetchUserData();
  return (
    <UserListContext.Provider value={userList}>
      {children}
    </UserListContext.Provider>
  );
}

function useUserList() {
  const context = React.useContext(UserListContext);
  if (context === undefined) {
    throw new Error(
      "useUserList must be used within a UserListContextProvider"
    );
  }
  return context;
}

export { UserListContextProvider, useUserList };

export const ConversationContext = React.createContext();

const FavoritedContext = React.createContext();

function FavoritedContextProvider({ children }) {
  const [loggedInData, setLoggedInData] = useState(null);

  async function fetchLoggedInData() {
    const response = await fetch(requestBase + "/john_doe.json");
    setLoggedInData(await response.json());
  }

  fetchLoggedInData();

  return (
    <FavoritedContext.Provider value={loggedInData}>
      {children}
    </FavoritedContext.Provider>
  );
}

function useFavorited(userLoggedIn) {
  let context;
  useEffect(() => {
    if (userLoggedIn) {
      context = React.useContext(FavoritedContext);
    }
  }, [userLoggedIn]);

  if (context === undefined) {
    throw new Error(
      "useUserList must be used within a UserListContextProvider"
    );
  }
  return context;
}

export { FavoritedContextProvider, useFavorited };
