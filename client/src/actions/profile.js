export async function signIn(username, password) {
  let payload = null;
  try {
    let response = await fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, password }),
    });
    payload = await response.json();
    console.log(payload)
  } catch (err) {
    console.log(err);
  }
 
  return {
    type: "SIGNIN",
    payload,
  };
}
export async function signUp(user) {
  let payload = null;
  try {
    let response = await fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: /* JSON.stringify({ user }) */ JSON.stringify(user),
    });
    payload = await response.json();
    // console.log("check");
  } catch (err) {
    console.log(err);
  }
  return {
    type: "SIGNUP",
    payload,
  };
}
export async function getProfile(id) {
  let payload = null;
  try {
    let response = await fetch("/profile/" + id,{
      method: "GET",
      headers:{
        authorization:localStorage.getItem('token'),
      }
    })  
    payload = await response.json();
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

export async function getProfileSaved(id) {
  let payload = null;
  try {
    let response = await fetch("/profile/" + id + "/profile-saved");
    payload = await response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "PROFILE_SAVED",
    payload,
  };
}

export async function deleteUser(id) {
  let payload = null;
  try {
    let response = await fetch("/profile/" + id, { method: "DELETE" });
    payload = await response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "DELETE_USER",
    payload,
  };
}

export async function editUser(id, userInfo) {
  let payload = null;
  try {
    let response = await fetch(`/profile/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userInfo),
    });
    payload = response.json;
  } catch (err) {
    console.log(err);
  }
  return {
    type: "EDIT_USER",
    payload,
  };
}
