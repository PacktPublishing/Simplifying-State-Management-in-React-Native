import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/user";
import { likedImagesReducer } from "./reducers/likedImages";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    user: userReducer,
    likedImages: likedImagesReducer,
  },
});

export default store;
