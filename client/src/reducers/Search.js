export default function Search(state = [], action) {
  if (action.type === "SEARCH") return action.payload;

  return state;
}
