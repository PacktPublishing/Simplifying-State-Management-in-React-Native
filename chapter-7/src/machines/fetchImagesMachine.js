import { createMachine, assign } from 'xstate';
import { forwardTo } from 'xstate/lib/actions';
import { requestBase } from "../utils/constants";

async function fetchImages() {
  const response = await fetch(requestBase + "/john_doe/likedImages.json");
  const imageData = await response.json();
  return imageData;
}

export const fetchImagesMachine = createMachine(
  {
    predictableActionArguments: true,
    id: 'fetchImages',
    initial: 'loading',
    context: {
      retries: 0,
      images: [],
    },
    states: {
      loading: {
        on: {
          RESOLVE: 'success',
          REJECT: 'failure'
        },
        invoke: {
          src: () => fetchImages(),
          onDone: {
            target: 'success',
            actions: assign((context, event) => {
              return {
                images: event.data,
              }
            }),
          },
          onError: {
            target: 'failure',
            actions: assign({ error: (context, event) => 'Oops! Something went wrong' })
          }
        }
      },
      success: {
        type: 'final',
        data: {
          images: (context, event) => context.images
        }
      },
      failure: {
        on: {
          RETRY: {
            target: 'loading',
            actions: assign({
              retries: (context, event) => context.retries + 1
            })
          }
        }
      }
    },
  }
);