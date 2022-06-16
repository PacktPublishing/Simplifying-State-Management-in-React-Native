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

#### Login data

The shape of this dataset is as follows:

```
{
  userName: "Joe",
  password: ""
}
```

Link to the file: [login.json](login.json)

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

User names were copied from a sample data set from the following website: https://www.briandunning.com/sample-data/
Link to the file: [users.json](users.json)

#### Detailed profile of the user

The shape of this dataset is as follows:

```
{
  id: *user Id*,
  postsNumber: *number of posts*,
  followersNumber: *number of followers*,
  followsNumber: *number of users followed*,
  addedImages: [
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
```

Link to the file: [john_doe.json](john_doe.json)

#### List of items on the home surface

The shape of this dataset is as follows:

```
{
  listOfitems: [
    {
      itemId: *item id*,
      authorId: *user id of author*,
      timeStamp: *time of publication*,
      url: *image url*,
      likes: *number of likes*,
      conversations: *number of conversations*
    }
  ]
}
```

Link to the file: [home.json](home.json)

#### List of conversations

The shape of this dataset is as follows:

```
[
  {
    id: *user Id*,
    text: *message to be displayed*
  }
]
```

Link to the file: [conversations.json](conversations.json)

#### Message exchange

The shape of this dataset is as follows:

```
{
  id: *user Id*,
  messages: [
    {
      id: *message id*,
      type: *message type - to or from*
      text: *message text*
    }
  ]
}
```

Link to the file: [messages/1.json](messages/1.json)
