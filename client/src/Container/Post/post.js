import { Component } from "react";
import './post.css'

class Post extends Component{
    constructor(props) {
        super()
    }
    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-3">
                        <h3 className="display-4 text-center">Location Name</h3>
                        <h4 className="display-5 text-center">Location</h4>
                        <button className="btn btn-success sv mr-5"><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;Save</button>
                    </div>
                    <div className="col-12 mt-2 mb-3 text-center">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src="./images/packages/p1.jpg" className="d-block w-100 x mr-1" alt="..." />
                            </div>
                            <div className="col-12 col-md-6">
                                <img src="./images/home/banner.jpg" className="d-block w-100 y ml-1" alt="..." />
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
                            <img className="reviewer rounded-circle" src='./images/packages/p1.jpg' alt='......' />
                            <h4>Group 5. <br /><span className="text-secondary">02/06/2021</span></h4>
                        </div>
                        <div className="col-12">
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 com">
                        <div className="col-12">
                            <img className="reviewer rounded-circle" src='./images/packages/p3.jpg' alt='......' />
                            <h4>Group 5. <br /><span className="text-secondary">02/06/2021</span></h4>
                        </div>
                        <div className="col-12">
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 com">
                        <div className="col-12">
                            <img className="reviewer rounded-circle" src='./images/packages/p4.jpg' alt='......' />
                            <h4>Group 5. <br /><span className="text-secondary">02/06/2021</span></h4>
                        </div>
                        <div className="col-12">
                            <p>
                                Quisque nec euismod leo, vel rutrum purus. Aenean non rutrum arcu. Proin pretium risus velit, et porta justo finibus non. Ut ex sapien, venenatis in molestie consectetur, interdum in sapien. Nullam pellentesque blandit nisl, quis egestas dui pretium consequat. Pellentesque quis lacus quis metus commodo tincidunt et eu ligula. Nunc mattis mi ut sem dignissim, eget volutpat lorem blandit. Integer eget auctor libero. In leo neque, malesuada tempus velit nec, sodales fermentum nibh.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 com">
                        <div className="col-12">
                            <img className="reviewer rounded-circle" src='./images/packages/p4.jpg' alt='......' />
                            <h4>Group 5. <br /><span className="text-secondary">02/06/2021</span></h4>
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

export default Post;