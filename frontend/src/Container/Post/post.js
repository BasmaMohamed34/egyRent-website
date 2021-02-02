import { Component } from "react";
import './post.css'
class Post extends Component{
    constructor(props) {
        super()
    }

    render = () => {
        return (
            <div>
                <div className="row">
                    <div className="col-12 mt-2 mb-5 text-center">
                        <div id="carouselExampleSlidesOnly" className="carousel slide w-75 mr-auto ml-auto" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./images/gallary/g1.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/home/banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/gallary/g6.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 m-3">
                        <h3 className="display-3 text-center">Location Name</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7 mb-3">
                        <div className="col-12">
                            <h4 className="display-4">Description</h4>
                        </div>
                        <div className="col-12">
                            <p className="text-secondary">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-center">
                        <form>
                            <div className="form-group">
                                <label for="checkin">Check In</label>
                                <input type="date" className="form-control" id="checkin" aria-describedby="dateHelp" />
                            </div>
                            <div className="form-group">
                                <label for="checkout">Check Out</label>
                                <input type="date" className="form-control" id="checkout" />
                            </div>
                            <button type="submit" className="btn btn-danger btn-lg w-75 mr-auto ml-auto">Check Availability</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4 className="display-4 text-center">Amenities</h4>
                    </div>
                    <div className="col-12 text-center">
                        <ul className="list-group list-group-horizontal mt-3 mb-3 d-flex justify-content-center mr-auto ml-auto">
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-arrow-circle-o-down" aria-hidden="true"></i>&nbsp; &nbsp; AC</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-table" aria-hidden="true"></i>&nbsp; &nbsp; Breakfast</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-sun-o" aria-hidden="true"></i>&nbsp; &nbsp; Heating</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                            <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; WiFi</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;