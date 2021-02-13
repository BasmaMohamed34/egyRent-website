export default function editUser(state = [], action) {
  if (action.type === "EDIT_USER") {
    //console.log(action.payload + "-" + state);
    return action.payload;
  }

  return state;
}
