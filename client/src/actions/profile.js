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
  await fetch("/signup", {
      method: "POST",
      body: user,
    })
    .then(res=>{
      if(res.status!==200){
      payload="This username already exists"
    }
    else
      payload=res.json()
    })
    .catch (err=>{
      console.log(err);
    })
    return {
      type: "SIGNUP",
      payload,
    };
}
export async function logOut() {
  localStorage.removeItem("token");
  window.location.href = "/signin";
}

export async function getProfile(id) {
  let payload = null;
  try {
    let response = await fetch(`/profile/${id}`, {
      method: "GET",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },
    });
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
    let response = await fetch("/profile/" + id + "/profile-posts", {
      method: "GET",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },
    });
    payload = await response.json();
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
    let response = await fetch("/profile/" + id + "/profile-saved", {
      method: "GET",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },
    });
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
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },

      body: userInfo,
    });
    payload = response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "EDIT_USER",
    payload,
  };
}
export async function WriteComment(postID, userID, comment) {
  let payload = null;
  try {
    let response = await fetch(`/post/${postID}`, {
      method: "POST",
        headers: {
          Authorization: `auth-token ${localStorage.getItem("token")}`,
            Accept: "application/json",
           "Content-Type": "application/json",
         },

      body: JSON.stringify({ userID, comment }),
    });
    payload = response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "WRITE_COMMENT",
    payload,
  };
}