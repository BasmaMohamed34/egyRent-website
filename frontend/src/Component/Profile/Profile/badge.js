import "./Badge.css"

const Badge = () => {
    const names = [{name:"User", name2:"mahmoud"}]


    return (
        <div className="badge">
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png" alt="new"/>
            
            
            <h2>
                Hi, I'm {names.map((el)=>(
                       <h2>{el.name}</h2> 
                ))}
            </h2> 
        </div>
      
    );
  }
  
  export default Badge;
  