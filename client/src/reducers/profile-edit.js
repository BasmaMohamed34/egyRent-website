export default function editUser(state = [], action) {
  if (action.type === "EDIT_USER") {
    return action.payload;
  }

  return state;
}
