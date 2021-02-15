export default function toggleSavePost(state = [], action) {
    if (action.type === "TOGGLE_SAVE") return action.payload;
    return state;
  }
  