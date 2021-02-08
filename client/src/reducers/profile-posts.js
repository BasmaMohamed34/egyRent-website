export default function profilePosts(state = [], action) {
  if (action.type === "PROFILE_POSTS") return action.payload;
  return state;
}
