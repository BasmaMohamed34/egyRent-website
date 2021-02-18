export default function WriteComment(state = {}, action) {
    if (action.type === "WRITE_COMMENT") return action.payload;
    return state;
  }
  