const PostPictures=(pictures)=>{
    if(pictures){
        for(let i in pictures){
            return(
                <div className="col-12 col-md-6">
                <img src={pictures[i]} alt="..." />
            </div>
            )
        }
    }
}

export default PostPictures