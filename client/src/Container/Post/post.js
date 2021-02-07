import { Component } from "react";
import './post.css'
// import { connect } from "react-redux";
// import { getPostById } from "../../actions/posts";
// import { bindActionCreators } from "redux";


class Post extends Component{

    // async componentDidMount() {
    //     console.log('works')
    //     await this.props.getPostById(this.props.match.params.id)
    // }
    

    render = () => {
        // console.log(details);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-3">
                        <h3 className="display-4 text-center">Location Name</h3>
                        <h3>Location Address</h3>
                        <button className="btn btn-success sv mr-5"><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;Save</button>
                    </div>
                    <div className="col-12 mt-2 mb-3 text-center">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src="https://lh3.googleusercontent.com/3Bc_SDMAQYQIiT06vie-YoEk4dYITmjKCq_pi2kppqeduEVwTP6oscOJTFfHPIN90i2n-cM_IRtfUAdQ9NU_Ao97itE=w640-h400-e365-rj-sc0x00ffffff" className="d-block w-100 x mr-1" alt="..." />
                            </div>
                            <div className="col-12 col-md-6">
                                <img src="https://iso.500px.com/wp-content/uploads/2019/04/500px_blog_lexar_global_photo_contest_winners-1500x1000.jpg" className="d-block w-100 y ml-1" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 mb-3">
                        <div className="col-12">
                            <p className="text-secondary text-left">
                                <span className="hotyp">Entire house hosted by Mahmoud</span><br />
                                <span>6 &nbsp;Guests.&nbsp;&nbsp;</span>
                                <span>3 &nbsp;Bedrooms.&nbsp;&nbsp;</span>
                                <span>5 &nbsp;Beds.&nbsp;&nbsp;</span>
                                <span>2 &nbsp;Baths</span>
                            </p>
                        </div>
                        <hr />
                        <div className="row justify-content-between p-5">
                            <div className="col-12 col-md-3 p-3 dt">
                                <h4>Entire house</h4>
                                <i class="fa fa-home fa-3x" aria-hidden="true"></i>
                            </div>
                            <div className="col-12 col-md-3 p-3 dt">
                                <h3>Enhanced Clean</h3>
                                <i class="fa fa-star-half-o fa-3x" aria-hidden="true"></i>
                            </div>
                            <div className="col-12 col-md-3 p-3 dt">
                                <h3>Super Host</h3>
                                <i class="fa fa-empire fa-3x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3 className="text-left">Description</h3>
                            <hr />
                            <p className="description">
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center avail p-4 font-weight-bold">
                        <p className="text-left text-success price">&#36; 50 / Night</p>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label for="checkin">Check In</label>
                                <input type="date" className="form-control" id="checkin" aria-describedby="dateHelp" />
                            </div>
                            <div className="form-group">
                                <label for="checkout">Check Out</label>
                                <input type="date" className="form-control" id="checkout" />
                            </div>
                            <div className="form-group">
                                <label for="guests">Guests</label>
                                <input type="number" className="form-control" id="guests" />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bolder btn-lg w-75 mr-auto ml-auto">Check Availability</button>
                        </form>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <h3 className="text-center">Amenities</h3>
                    </div>
                    <div className="col-12 text-center">
                        <ul className="list-group list-group-horizontal mt-3 mb-3 mr-auto ml-auto p-0 border-0">
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                            <li className="list-group-item p-3"><i class="fa fa-2x fa-gg-circle" aria-hidden="true"></i>&nbsp; &nbsp; AC</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-table" aria-hidden="true"></i>&nbsp; &nbsp; Breakfast</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-sun-o" aria-hidden="true"></i>&nbsp; &nbsp; Heating</li>
                            <li className="list-group-item p-3"><i class="fa fa-2x fa-fire" aria-hidden="true"></i>&nbsp; &nbsp; Kitchen</li>
                            <li className="list-group-item p-3"><i class="fa fa-2x fa-outdent" aria-hidden="true"></i>&nbsp; &nbsp; Smoke-Alarm</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-tv"></i>&nbsp; &nbsp; TV</li>
                            <li className="list-group-item p-3"><i class="fa fa-2x fa-arrow-up" aria-hidden="true"></i>&nbsp; &nbsp; Elevator</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 mb-5">
                        <h3>(16 Reviews)</h3>
                    </div>
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
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
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
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 com">
                        <div className="col-12">
                            <div className="col-12 col-md-6">
                                <img className="reviewer rounded-pill img-fluid" src='https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FT9q2sGNvLY8VHfyZgV_yKw--%7EB%2FaD0xMDY3O3c9MTYwMDthcHBpZD15dGFjaHlvbg--%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5000%252C3333%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252F3dcf58ea3cb050781655277a8fae35c6%252F206497393%252Fevgeny-tchebotarev-founder-of-500px-attends-the-day-1-of-the-rise-picture-id812329684%26client%3Da1acac3e1b3290917d92%26signature%3D66baae45a48cd2e1da201d48c552f495925c90ce&client=amp-blogside-v2&signature=297d15dc7cca6f80c944cbbbcfd64664297e565d' alt='......' />
                            </div>
                            <div className="col-12 col-md-6 text-left">
                                <h4>Group 5. <br /><small className="text-secondary">02/06/2021</small></h4>
                            </div>
                        </div>
                        <div className="col-12">
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
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
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-center mb-3">
                        <button className="btn btn-warning">See more</button>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         details: state.post.details
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ getPostById }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Post)
export default Post;