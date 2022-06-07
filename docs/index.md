## Welcome to FunBook app data sets

On these pages you will find example data for the social media clone app - FunBook. The data included in here is purely a work of fiction and an example of how responses from a real API may look like.

### Dataset list

Each dataset is a representation of what would have been returned by an API endpoint in a real world app.
The datasets included in this repository are:
- a list of all users
- a detailed profile of the main user
- a list of items to be displayed on the main user's home surface
- a list of conversations of the main user
- detail of message exchanges of the main user

As this data is an example it is read-only


#### List of users

The shape of this dataset is as follows:

```
[
  {
    id: *user Id*,
    name: *user name*,
    url: *URL for the avatar image*
  }
]
```

Link to the file:


#### Detailed profile of the user


The shape of this dataset is as follows:

```
{
  {
    id: *user Id*,
    name: *user name*,
    url: *URL for the avatar image*,
    postsNumber: *number of posts*,
    followersNumber: *number of followers*,
    followsNumber: *number of users followed*,
    addedImages[
      {
        id: *image id*,
        url: *image url*
      }
    ],
    likedImages: [
      {
        id: *image id*,
        url: *image url*
      }
    ],
  }
}
```

Link to the file:


#### List of items on the home surface

The shape of this dataset is as follows:

```
{
  avatarList: [
    {
      id: *user Id*,
      url: *avatar url
    }
  ],
  listOfitems: [
    {
      itemId: *item id*,
      authorId: *user id of author*,
      authorUrl: *user avatar URL*,
      timeStamp: *time of publication*,
      url: *image url*,
      likes: *number of likes*,
      conversations: *number of conversations*
    }
  ]
}
```

Link to the file:


#### List of conversations

The shape of this dataset is as follows:

```
[
  {
    id: *user Id*,
    name: *user name*,
    url: *URL for the avatar image*
    text: *message to be displayed*
  }
]
```

Link to the file:



#### Message exchange

The shape of this dataset is as follows:

```
{
  id: *user Id*,
  name: *user name*,
  url: *URL for the avatar image*
  messages: [
    {
      id: *message id*,
      type: *message type - to or from*
      text: *message text*
    }
  ]
}
```

Link to the file:
