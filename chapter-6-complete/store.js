import React, { useContext } from 'react';
import { types, flow, applySnapshot } from "mobx-state-tree"
import { LikedImages } from "./src/models/LikedImages";
import { User } from './src/models/User';
import { requestBase } from "./src/utils/constants";
import { values } from 'mobx'

const RootStore = types
    .model({
        users: User,
        likedImages: LikedImages
    })
    .actions(self => ({
        afterCreate() {
            self.fetchImages();
        },
        // setLikedImages(newImages) {
        //     store.likedImages.imageList.replace(newImages)
            
        // },
        fetchImages: flow(function* fetchImages() {
            const response = yield fetch(requestBase + "/john_doe/likedImages.json");
            applySnapshot(self.likedImages.imageList, yield response.json());
        })
        // async fetchImages() {
        //     const response = await fetch(requestBase + "/john_doe/likedImages.json");
        //     const data = await response.json();
        //     store.setLikedImages(data);
        // }
    }))
    .views(self => ({
        getIsImageLiked(itemId) {
            return values(self.likedImages?.imageList).filter(
                    (favoritedImg) => favoritedImg.itemId === itemId
                  ).length > 0;
        }
    }))


export const store = RootStore.create({
    users: {},
    likedImages: {}
})

const RootStoreContext = React.createContext(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
    const store = useContext(RootStoreContext);
    
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}


