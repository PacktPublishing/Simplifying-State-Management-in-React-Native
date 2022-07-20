export const likedImagesReducer = (state = [], action) => {
  switch (action.type) {
    case "LIKE_IMAGE": {
      const newLikedImage = action.payload;
      return {
        ...state,
        likedImages: {
          ...state.likedImages,
          newLikedImage,
        },
      };
    }
    case "UNLIKE_IMAGE": {
      const stateWithoutLikedImage = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
      return {
        ...state,
        likedImages: stateWithoutLikedImage,
      };
    }
    default:
      return state;
  }
};
