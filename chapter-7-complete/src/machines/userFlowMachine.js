import { createMachine } from "xstate";

export const userFlow = createMachine({
  predictableActionArguments: true,
  id: "userFlow",
  initial: "anonymous",
  states: {
    anonymous: {
      on: {
        LOGIN: { target: "authenticated" },
        REJECT: { target: "rejected" },
      },
    },
    authenticated: {
      on: {
        LOGOUT: { target: "anonymous" },
        REJECT: { target: "rejected" },
      },
    },
    rejected: {
      on: {
        LOGIN: { target: "authenticated" },
        LOGOUT: { target: "anonymous" },
      },
    },
  },
});
