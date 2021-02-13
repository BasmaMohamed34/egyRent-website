export default function DestinationSearch(state = [], action) {
  //console.log(state);
  if (action.type === "DESTINATION") return action.payload;
  console.log(action.payload);
  return state;
}
