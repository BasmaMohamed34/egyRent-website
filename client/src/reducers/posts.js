export default function posts(state = [], action) {
  if (action.type === "POSTS") return action.payload;

  return state;
}


