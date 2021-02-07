export default function Search(state = [], action) {
  console.log("reducer Search action ", action.type);
  if (action.type === "SEARCH") return action.payload;
  console.log(action.type);
  return state;
}
