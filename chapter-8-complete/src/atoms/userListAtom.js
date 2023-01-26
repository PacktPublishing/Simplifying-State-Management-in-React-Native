import { requestBase } from "../utils/constants";
import { atom } from "jotai";

const urlAtom = atom(requestBase + "/users.json");

const fetchUsersAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  return await response.json();
});

export const userListAtom = atom((get) => get(fetchUsersAtom));
