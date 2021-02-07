import { combineReducers } from "redux";
import posts from "./posts";
import profile from "./profile";
import profilePosts from "./profile-posts";
import postDetails from "./post-details";
import createPost from "./create-post";
export default combineReducers({
  posts,
  profile,
  profilePosts,
  postDetails,
  createPost,
});
