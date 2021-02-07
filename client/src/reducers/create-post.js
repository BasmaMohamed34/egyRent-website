export default function createPost(state = null, action) {
  console.log("reducer createPost action ", action.type);
  if (action.type === "CREATE_POST") return action.payload;
  console.log(action.payload);

  // console.log(action.type);
  return state;
}
