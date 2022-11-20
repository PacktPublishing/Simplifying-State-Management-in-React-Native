import React, { useState, useEffect, useReducer } from "react";
import { requestBase } from "./utils/constants";

const UserListContext = React.createContext();

function UserListContextProvider({ children }) {
  const [userList, setUserList] = useState(null);
  async function fetchUserData() {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    if (!userList) {
      fetchUserData();
    }
  }, [userList]);

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
        conversationId,
        setConversationId,
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

export const UserStateContext = React.createContext();

export function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error(
      "useUserState must be used within a UserStateContextProvider"
    );
  }
  return context;
}

const FavoritedContext = React.createContext();

function favoritesReducer(state, action) {
  switch (action.type) {
    case "init_likes": {
      return action.payload;
    }
    case "add_like": {
      const newLikedImage = action.payload;
      return [...state, newLikedImage];
    }
    case "remove_like": {
      const stateWithoutLikedImage = state.filter(
        (item) => item !== action.payload
      );
      return stateWithoutLikedImage;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FavoritedContextProvider({ children }) {
  const [loggedInData, setLoggedInData] = useState(null);
  const [state, dispatch] = useReducer(favoritesReducer, loggedInData);

  async function fetchLoggedInData() {
    const response = await fetch(requestBase + "/john_doe/likedImages.json");
    setLoggedInData(await response.json());
  }

  useEffect(() => {
    if (!loggedInData) {
      fetchLoggedInData();
    } else {
      dispatch({ type: "init_likes", payload: loggedInData });
    }
  }, [loggedInData]);

  const value = { state, dispatch };

  return (
    <FavoritedContext.Provider value={value}>
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

const BookmarksContext = React.createContext();

function BookmarksContextProvider({ children }) {
  const [bookmarksData, setBookmarksData] = useState(null);
  async function fetchBookmarkData() {
    const response = await fetch(
      requestBase + "/john_doe/bookmarkedImages.json"
    );
    setBookmarksData(await response.json());
  }

  useEffect(() => {
    if (!bookmarksData) {
      fetchBookmarkData();
    }
  }, [bookmarksData]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarksData,
        setBookmarksData,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

function useBookmarks() {
  const context = React.useContext(BookmarksContext);
  if (context === undefined) {
    throw new Error(
      "useBookmarks must be used within a BookmarksContextProvider"
    );
  }
  return context;
}

export { BookmarksContextProvider, useBookmarks };
