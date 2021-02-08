export default function createPost(state = null, action) {
  if (action.type === "CREATE_POST") return action.payload;

  return state;
}
