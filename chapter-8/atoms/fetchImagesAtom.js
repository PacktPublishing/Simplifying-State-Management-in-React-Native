import { requestBase } from "./utils/constants";

const urlAtom = atom(requestBase + "/john_doe/likedImages.json");
export const fetchImagesAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  return await response.json();
});
