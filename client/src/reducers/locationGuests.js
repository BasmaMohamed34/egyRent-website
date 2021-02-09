export default function locationSearch(state = [], action) {
  console.log(state);
  if (action.type === "LOCATION_GUESTS") return action.payload;
  console.log(action.payload);
  return state;
}
