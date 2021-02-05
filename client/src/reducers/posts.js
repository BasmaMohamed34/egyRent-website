export default function posts(state = [], action) {
  console.log("reducer posts action ", action.type);
  if (action.type === "POSTS") return action.payload;
  console.log(action.type);
  return state;
}
