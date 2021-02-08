const Comments=(commentObj)=>{
    let comments=[commentObj]
    if(comments){
        for(let i in comments){
    return(  

        <div className="col-12 col-md-6 com">
            <div className="col-12">
                <div className="col-12 col-md-6">
                    <img className="reviewer rounded-pill img-fluid" src='https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FT9q2sGNvLY8VHfyZgV_yKw--%7EB%2FaD0xMDY3O3c9MTYwMDthcHBpZD15dGFjaHlvbg--%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5000%252C3333%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252F3dcf58ea3cb050781655277a8fae35c6%252F206497393%252Fevgeny-tchebotarev-founder-of-500px-attends-the-day-1-of-the-rise-picture-id812329684%26client%3Da1acac3e1b3290917d92%26signature%3D66baae45a48cd2e1da201d48c552f495925c90ce&client=amp-blogside-v2&signature=297d15dc7cca6f80c944cbbbcfd64664297e565d' alt='......' />
                </div>
                <div className="col-12 col-md-6">
                    <h4>Group 5. <br /><small className="text-secondary">02/06/2021</small></h4>
                </div>
            </div>
            <div className="col-12">
                <p>{comments[i]}</p>
            </div>
        </div>
        )
        }
    }
}

export default Comments