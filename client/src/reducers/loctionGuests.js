export default function locationSearch(state = [], action) {
    if (action.type === "LOCATION_GUESTS") return action.payload;
  
    return state;
  }
  
  