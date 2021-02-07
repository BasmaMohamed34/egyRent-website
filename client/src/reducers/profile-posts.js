export default function profilePosts(state = [], action) {
  //console.log("reducer profilePosts action ", action.type);
  if (action.type === "PROFILE_POSTS") return action.payload;
  //console.log(action.type);
  return state;
}
