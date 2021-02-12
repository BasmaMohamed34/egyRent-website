export default function signup(state = null, action) {
  if (action.type === "SIGNUP") return action.payload;
  console.log(action.payload);
  return state;
}
