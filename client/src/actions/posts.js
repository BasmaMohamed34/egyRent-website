/* export function getPosts() {
  let payload = null;
  console.log("before fetch");
  fetch("/home")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      payload = res;
      console.log("result ", res);
    })
    .catch((err) => console.log(err));

  console.log("after fetch");
  return {
    type: "POSTS",
    payload,
  };
} */

export async function getPosts() {
  let payload = null;
  try {
    let response = await fetch("/home");
    payload = await response.json();
    console.log("Payload", payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POSTS",
    payload,
  };
}
