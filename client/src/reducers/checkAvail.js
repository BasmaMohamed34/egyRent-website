export default function CheckAvailability(state = [], action) {
    if (action.type === "CHECK-AVAILABILITY") return action.payload;
    
    return state;
  }
  