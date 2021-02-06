export async function getProfile(id) {
  console.log(id);
  let payload = null;
  try {
    let response = await fetch("/profile/" + id);
    console.log(id);
    payload = await response.json();
    console.log("get profile payload: ", payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "PROFILE",
    payload,
  };
}
export async function getProfilePosts(id) {
  let payload = null;
  try {
    let response = await fetch("/profile/" + id + "/profile-posts");
    payload = await response.json();
    console.log("get profile post payload: ", payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "PROFILE_POSTS",
    payload,
  };
}
