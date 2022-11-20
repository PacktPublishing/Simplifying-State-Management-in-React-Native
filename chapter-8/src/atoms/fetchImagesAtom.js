import { requestBase } from "../utils/constants";
import { atom } from "jotai";

const urlAtom = atom(requestBase + "/john_doe/likedImages.json");
export const fetchImagesAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  return await response.json();
});

export const imageListAtom = atom([], (get, set, newArray) => {
  set(imageListAtom, newArray);
});

export const addImageToArray = atom(null, (get, set, newImage) => {
  const clonedArray = get(imageListAtom);
  clonedArray.unshift(newImage);
  set(imageListAtom, clonedArray);
  set(isImageLikedAtom, newImage);
});

export const isImageLikedAtom = atom(false, (get, set, newImage) => {
  const imageList = get(imageListAtom);
  const checkIfLiked =
    imageList?.filter((favoritedImg) => favoritedImg.itemId === newImage.itemId)
      .length > 0;

  set(isImageLikedAtom, checkIfLiked);
});
