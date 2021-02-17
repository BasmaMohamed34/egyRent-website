export async function CheckAvail(id,post,checkin,checkout) {
  let payload = null;
  let i= checkin.split("-")
  let dayin=parseInt(i[2])+1;
  let checkIn=`${i[1]}/${dayin.toString()}/${i[0]}`
  let o= checkout.split("-")
  let dayout=parseInt(o[2])+1;
  let checkOut=`${o[1]}/${dayout.toString()}/${o[0]}`
  console.log("chechin= ",checkIn)
    console.log("chechout= ",checkOut)
     await fetch(`/post/${post}/checkAvail`, {
      method: "POST",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,  
        Accept: "application/json",
        "Content-Type": "application/json",   
      },
      body:JSON.stringify({ id,post,checkIn,checkOut}),
    })
    .then(res=>{
      return res.text();
    })
    .then(res=>{
      payload=res;
    })
    .catch (err=> {
    console.log(err);
    })

  return {
    type: "CHECK-AVAILABILITY",
    payload,
  };
}

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
 
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POST_DETAILS",
    payload,
  };
}

export async function createPost(id, post) {
  let payload = null;
  //console.log(post);
  // console.log(Object.fromEntries(post));
  try {
    let response = await fetch(`/${id}/createpost`, {
      method: "POST",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },
      body: post,
    });
    payload = response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "CREATE_POST",
    payload,
  };
}

export async function toggleSavePost(UserID, PostID) {
  let payload = null;
  console.log(UserID);
  try {
    let response = await fetch(`/post/${PostID}`, {
      method: "PATCH",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID, PostID }),
    });
    payload = response.json();
    
  } catch (err) {
    console.log(err);
  }
  return {
    type: "TOGGLE_SAVE",
    payload,
  };
}


