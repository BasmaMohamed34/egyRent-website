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

export async function getPostById(id) {
  //fetch
  let payload = null;
  try {
    let response = await fetch(`/post/${id}`);
    payload = await response.json();
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POST_DETAILS",
    payload,
  };
}
export async function createPost(id, post) {
  //console.log(std)
  //console.log(post);
  let payload = null;
  try {
    let response = await fetch(`/${id}/createpost`, {
      method: "POST",
      /* headers: {
        "Content-Type": "application/json",
      }, */
      headers: { "Content-Type": "multipart/form-data" },
      body: new FormData(post),
      /* body: JSON.stringify(post), */
    });
    payload = response.json;
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "CREATE_POST",
    payload,
  };
}
