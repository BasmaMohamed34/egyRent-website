export default function signin(state = {}, action) {
  if (action.type === "SIGNIN") return action.payload;
  console.log(action.payload);
  return state;
}
