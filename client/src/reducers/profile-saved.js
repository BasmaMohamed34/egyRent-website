export default function profileSaved(state = [], action) {
  if (action.type === "PROFILE_SAVED") return action.payload;
  return state;
}
