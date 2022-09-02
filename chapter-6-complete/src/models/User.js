import { types } from "mobx-state-tree"

export const User = types.model({
    name: types.optional(types.string, ""),
    loggedIn: types.optional(types.boolean, false),
})