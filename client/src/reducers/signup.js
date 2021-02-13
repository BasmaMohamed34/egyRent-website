export default function signup(state = null, action) {
  if (action.type === "SIGNUP") return action.payload;
  return state;
}
