export default function signup(state = {}, action) {
  if (action.type === "SIGNUP") return action.payload;
  //console.log(action.payload);
  return state;
}
