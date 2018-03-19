![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/Example.png)
--------------
# Archaic Tome

## About

Archaic Tome is a clone of Facebook that was started on March 6, 2018. It employs the following main features of Facebook: `login/signup`, `main feed`, `profile page`, `posts`, `comments`, `friending`, `profile images`, `profile details`, `edit/delete`, `friend search bar`. (more features are pending)

Link To Live [Site](ancient-tome.herokuapp.com/#/)

Link To Facebook [Site](facebook.com)

-----------

## About The Set Up

Archaic Tome (AT) is a rails backend, react-redux frontend structure utilizing speed of react and redux instead of rails html erb to quickly update different aspects of the webpages without having to re-render the whole page or constantly hit the database.

All features of the app were made from backend to frontend, starting from generating the models, controllers, and database in Rails and then moving the rendering to the frontend through actions.

All in all, it was a lot of fun to make!

-----------------

## Main Features:
----------------------------------------------------------

### Landing Page:

The landing page has a form for new users as well as current users.

--------------------
![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/landingpage.png)

------------------------------------------------------------
------------------------------------------------------------

### Main Feed:

The main feed page has a nice gif on the right that will be replaced with a news feed as well as a list of recommended friends.

The main features of this feed are: `creating posts`, `navigating to profile` (top right), `commenting on posts`, `editing both posts and comments`, `adding friends` (top right people button creates a dropdown to add friends), `user search`, `button to log out`

--------------------
Main Feed

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/mainfeed.png)
------------------------------------------------------------
Friend Notification

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/notificationfriend.png)
------------------------------------------------------------
Friend Dropdown Menu

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/dropdownfriend.png)
------------------------------------------------------------
User Search Dropdown Menu

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/usersearch.png)
------------------------------------------------------------

Live Examples:

Confirming a Friend

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/confirmfriend.gif)
------------------------------------------------------------
Finding Friends

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/findingfriend.gif)
------------------------------------------------------------
Commenting and Editing

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/commentingandedit.gif)
------------------------------------------------------------
Editing a Post

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/editposts.gif)
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------

## My Top Features

Posting (adding timestamps)

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/posting.gif)

and they update if you update!

![alt text](https://raw.githubusercontent.com/KaiFujimoto/ArchaicTome/master/PrepWork/_depreciated/editposttime.gif)

------------------------------------------------------------
Used Moment from react and created a util file

```
import moment from "moment";

// https://momentjs.com/

export function timeUtil(time) {
  if (moment(time).isAfter(moment().subtract(24,'hours'))) {
    return moment(time).startOf(time).fromNow();
  } else if (moment(time).isAfter(moment().subtract(24,'hours').startOf('day'))) {
    return moment(time).format('[Yesterday] [at] h:mma' );
  } else {
    return moment(time).format('MMMM D [at] h:mma');
  }
}

```
The Challenge: Figuring out a way to efficiently convert timestamps into actual dates and then knowing how to organize the date information in a way to reflect facebook's timestamps

The Solution: Employed simple logic to figure out how facebook does their timestamps and attempted to mimick them.

------------------------------------------------------------
Changed Modal Structure to display per Post ( for editing posts )

```
// ./components/main_page/posts_index/edit_posts/modal.jsx

function Modal({modal, props, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = null;
  if (modal.type === 'edit' && modal.postId === props.post.id) {
      component = <EditPostContainer post={props.post}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      );
  } else {
    return null;
  }
}

```
The Challenge: A normal modal would render for the buttons that pertain to opening it. But what if you had multiple buttons of the same type? Then, what happens is that the button would render the modal for every instance of that button (in my case, it would render the post of every post that has a button next to it). It creates an overlapping effect on the modal render.

The Solution: Implemented logic to check if the modal's postId was equal to the props post's id and put a conditional render so I can filter out the postIds of the modals that don't match the post that I want the modal to appear on.

------------------------------------------------------------
------------------------------------------------------------

## Features in progress:

### Main features:

1. Likes (for posts and comments)
2. Photo viewing modals for cover photos, normal photos, and profile photos

### Smaller features:
1. Making the description box editable via a click
2. Rending profiles based on if they are public or private.
