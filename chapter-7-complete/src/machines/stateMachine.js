import { createMachine, assign } from "xstate";
import { fetchImagesMachine } from "./fetchImagesMachine";

export const globalAppMachine = createMachine({
  predictableActionArguments: true,
  id: "globalAppMachine",
  context: {
    likedImages: [],
    currentImage: null,
  },
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "fetchImagesMachine",
        src: fetchImagesMachine,
        onDone: {
          target: "ready",
          actions: assign({
            likedImages: (context, event) => {
              return event.data.images;
            },
          }),
        },
      },
    },
    ready: {
      on: {
        LIKE: {
          actions: assign((context, event) => {
            const updateImageArray = event.payload.concat(context.likedImages);

            return {
              likedImages: updateImageArray,
            };
          }),
        },
        ERROR: {
          target: "error",
          actions: assign({ likedImages: [] }),
        },
        MODAL_OPEN: {
          actions: assign((context, event) => {
            return {
              currentImage: event.payload,
            };
          }),
        },
        MODAL_CLOSE: {},
      },
    },
    error: {
      type: "final",
    },
  },
});
