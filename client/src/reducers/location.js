export default function DestinationSearch(state = [], action) {
  if (action.type === "DESTINATION") return action.payload;
  
  return state;
}
