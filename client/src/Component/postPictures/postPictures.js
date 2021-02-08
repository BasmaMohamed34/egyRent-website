const PostPictures=({picture})=>{
    if(picture){
        return(
            <div>
                    <img src={picture} />
                    
                </div>
            // <div className="col-12 col-md-6 ">
            //     <img src={picture} alt="..." className="w-25"/>
            //     {/* {picture} */}
            // </div>
        )
    }
}

export default PostPictures