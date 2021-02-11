import { combineReducers } from "redux";
import posts from "./posts";
import profile from "./profile";
import profilePosts from "./profile-posts";
import profileSaved from "./profile-saved";
import postDetails from "./post-details";
import createPost from "./create-post";
import deleteUser from "./profile-delete";
import editUser from "./profile-edit";
import Search from "./Search";
import signin from "./signin";
import signup from "./signup";
import locationSearch from "./locationGuests";
export default combineReducers({
  posts,
  profile,
  profilePosts,
  postDetails,
  createPost,
  deleteUser,
  profileSaved,
  editUser,
  Search,
  locationSearch,
  signin,
  signup,
});
