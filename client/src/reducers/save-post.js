export default function savePost(state = [], action) {
  if (action.type === "SAVE_POST") return action.payload;
  return state;
}
