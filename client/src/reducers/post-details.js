// post details
export default function postDetails(state = {}, action) {
    console.log("reducer post details action ", action.type);
    
    if (action.type === "POST_DETAILS") return action.payload;

    console.log(action.type);
    return state;
}