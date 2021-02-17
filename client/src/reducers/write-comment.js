export default function WriteComment(state = {}, action) {
    if (action.type === "WRITE_COMMENT") return action.payload;
    //console.log(action.payload)
    return state;
  }
  