const user = {
  userLoggedIn: false,
  user: null,
};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: {
          userLoggedIn: true,
          user: action.payload,
        },
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: {
          userLoggedIn: false,
          user: null,
        },
      };
    }
    default:
      return state;
  }
};
