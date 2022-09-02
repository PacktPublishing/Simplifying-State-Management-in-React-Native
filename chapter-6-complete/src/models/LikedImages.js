import { types } from "mobx-state-tree"

const LikedImageItem = types
    .model({
        itemId: types.number,
        authorId: types.number,
        timeStamp: types.string,
        url: types.string,
        likes: types.string,
        conversations: types.string,
    })

export const LikedImages = types
    .model({
        imageList: types.optional(types.array(LikedImageItem), []),
    })
    .actions(self => ({
        addLikedImage(newImage) {
            self.imageList.unshift(newImage)
        },
        removeLikedImage(imageToRemove) {
            const filteredData = self.imageList.filter(item => item.itemId !== imageToRemove.itemId);
            self.imageList = filteredData;
        },
       
    }))

