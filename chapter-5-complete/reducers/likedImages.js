import { createSlice } from "@reduxjs/toolkit";
import { fetchLikedImages } from "../asyncFetches";

export const likedImagesSlice = createSlice({
  name: "likedImages",
  initialState: {
    likedImages: [],
    loading: true,
  },
  reducers: {
    likeImage: (state, action) => {
      const newLikedImage = action.payload;
      return { ...state, likedImages: [...state.likedImages, newLikedImage] };
    },
    unLikeImage: (state, action) => {
      const stateWithoutLikedImage = state.likedImages.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      state.likedImages = stateWithoutLikedImage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLikedImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLikedImages.fulfilled, (state, action) => {
      state.likedImages = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchLikedImages.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { initLikedImages, likeImage, unLikeImage } =
  likedImagesSlice.actions;

export default likedImagesSlice.reducer;
