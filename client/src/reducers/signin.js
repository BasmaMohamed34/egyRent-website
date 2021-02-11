export default function signin(state = {}, action) {
  
  if (action.type === "SIGNIN") {
    console.log(action.payload.message);
    return action.payload.message;
  }
  return state;
}
