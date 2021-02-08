export default function deleteUser(state = [], action) {
  if (action.type === "DELETE_USER") {
    state.filter((user) => {
      return user.action.payload !== action.payload;
    });
  }
  return state;
}
