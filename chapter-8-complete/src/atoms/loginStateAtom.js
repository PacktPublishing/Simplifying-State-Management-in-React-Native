import { requestBase } from "../utils/constants";
import { atom } from "jotai";

const urlAtom = atom(requestBase + "/loginState.json");
export const fetchLoginStateAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  return await response.json();
});
