export default function profile(state = {}, action) {
  console.log("reducer posts action ", action.type);
  if (action.type === "PROFILE") return action.payload;
  console.log(action.type);
  return state;
}
