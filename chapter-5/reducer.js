import { user } from "./store";

export default function appReducer(state = user, action) {
  switch (action.type) {
    case "userLoggedIn": {
      return {
        ...state,
        userLoggedIn: true,
      };
    }
    default:
      return state;
  }
}
