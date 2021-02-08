export default function profile(state = {}, action) {
  if (action.type === "PROFILE") return action.payload;

  return state;
}
