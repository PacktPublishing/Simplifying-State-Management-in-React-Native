import React, { useState } from "react";
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

const ConversationContext = React.createContext();

function ConversationContextProvider({ children }) {
  const [conversationId, setConversationId] = useState(null);

  return (
    <ConversationContext.Provider
      value={{
        conversationId: conversationId,
        setConversationId: setConversationId,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

function useConversations() {
  const context = React.useContext(ConversationContext);
  if (context === undefined) {
    throw new Error(
      "useConversations must be used within a ConversationContextProvider"
    );
  }
  return context;
}

export { ConversationContextProvider, useConversations };

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
  if (userLoggedIn) {
    context = React.useContext(FavoritedContext);
  }

  if (context === undefined) {
    throw new Error(
      "useFavorited must be used within a FavoritedContextProvider"
    );
  }
  return context;
}

export { FavoritedContextProvider, useFavorited };
