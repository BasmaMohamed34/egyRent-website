// post details
export default function postDetails(state = {}, action) {
    if (action.type === "POST_DETAILS") return action.payload;
    return state;
}