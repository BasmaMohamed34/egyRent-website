export default function signin(state = {}, action) {
  if (action.type === "SIGNIN") {
    //console.log(action.payload);
    return action.payload;
  }
  return state;
}
