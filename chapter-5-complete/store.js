import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/user";
import likedImagesReducer from "./reducers/likedImages";

const store = configureStore({
  reducer: {
    user: userReducer,
    likedImages: likedImagesReducer,
  },
});

export default store;
