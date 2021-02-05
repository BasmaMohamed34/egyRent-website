 export  function getPosts(){
    let payload=null;
    console.log("before fetch")
    fetch("/home")
    .then(res=>{
        return res.json();
     })
    .then(res=>{
        payload=res;
        console.log("result ",res)
    })
    .catch(err=> console.log(err))
    
    console.log("after fetch");    
    return {
         type: 'POSTS',
         payload
    }
 }

// export async function getPosts(){
//      let payload=null;
//      try{
//          let response=await fetch("http://localhost:5000/home")
//          payload=await response.json()
//      }
//      catch(err){
//          console.log(err)
//      }
//     return{
//         type: 'POSTS',
//         payload
//     }
// }