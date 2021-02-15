export default function CheckAvailability(state = [], action) {
    if (action.type === "CHECK-AVAILABILITY") return action.payload;
    console.log(action.payload)
    return state;
  }
  