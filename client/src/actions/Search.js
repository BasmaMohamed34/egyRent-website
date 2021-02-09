export async function getSearch() {
  let payload = null;
  try {
    let response = await fetch("/search-result");
    payload = await response.json();
    console.log("Payload", payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "SEARCH",
    payload,
  };
}

    // export async function getByLocation(​​location,guests) {
    //   let payload = null;
    //   try {
    //     let response = await fetch(`/search-result/${​​location}​​?guests=${guests}`);
    //     payload = await response.json();
    //     console.log("Payload", payload);
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   return {
    //     type: "LOCATION_GUESTS",
    //     payload,
    //   };
    // }



