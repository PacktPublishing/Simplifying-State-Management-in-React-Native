import { types } from "mobx-state-tree"
import { requestBase } from "./src/utils/constants";

const LikedImage = types
    .model({
        itemId: types.number,
        authorId: types.number,
        timeStamp: types.string,
        url: types.string,
        likes: types.string,
        conversations: types.string,
    })
    // .actions((image) => {
    //     toggle = () => {
    //         image.liked = !image.liked;
    //     }
    // });

const User = types.model({
    name: types.optional(types.string, ""),
    loggedIn: types.optional(types.boolean, false),
})

const RootStore = types
    .model({
        users: types.map(User),
        likedImages: types.array(LikedImage)
    })
    .actions((store) => {
        function setLikedImages(newImages) {
            store.likedImages.replace(newImages)
        }

        return {
            setLikedImages
        }
    })
    .actions((store) => {
        async function fetchImages() {
            const response = await fetch(requestBase + "/john_doe/likedImages.json");
            const data = await response.json();
            store.setLikedImages(data);
        }

        return {
            fetchImages
        }
    })

export const store = RootStore.create({
    users: {}, // users is not required really since arrays and maps are optional by default since MST3
    likedImages: []
})

store.fetchImages();