import "./post.css";
import PostPictures from "../../Component/postPictures/postPictures";
import Comments from "../../Component/postComments/postComments";
import { connect } from "react-redux";
import { getPostById, toggleSavePost,CheckAvail } from "../../actions/posts";
import { getProfile } from "../../actions/profile";
import {WriteComment} from "../../actions/profile"
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      comments: [],
      profile: {},
      savedBtn: "Save",
      profileID: "",
      startDate:"",
      endDate:"",
      resultOfAvail:"",
      comment:""
    };
  }
  async componentDidMount() {
 
    let postArr = await this.props.getPostById(this.props.match.params.id);
    this.setState({ post: postArr.payload });
    // this.setState({ post: postArr.payload.Posts });
    let userData = await this.props.getProfile(localStorage.getItem("id"));
    this.setState({
      profile: userData.payload,
    });
    this.setState({
      profileID: localStorage.getItem("id"),
    });
    if (localStorage.getItem("token")) {
    if(this.state.profile.saved.includes(this.props.match.params.id)){
      this.setState({ savedBtn: "Saved" })
    }else{
      this.setState({ savedBtn: "Save" })
    }}
  }
  showAvailabilitlyMsg(){
    if(this.state.resultOfAvail==="Not Available"){
      return (<div> The place is not available at that date, choose another date for reservation.</div>)
    }
    else if(this.state.resultOfAvail==="Available"){
      return (<div> Place is available and reserved at that date , check your notifications for host details for the contact.</div>)
    }
    else return <div> </div>
  }
  render() {
    return <div>{this.showPostDetails(this.state.post)}</div>;
  }
  checkAmenities(type, value) {
    if (value === false) {
      return (
        <span style={{ textDecoration: "line-through", color: "black" }}>
          {type}
        </span>
      );
    } else return <span style={{ color: "black" }}>{type}</span>;
  }
  showPostDetails = (details) => {
    return details.map((details) => {
      return (
        <div className="container" key={details._id}>
          <div className="row">
            <div className="col-12 m-3">
              <h3 className="loc pt-3 text-center">{details.title}</h3>
              <button
                className="btn btn-outline-success sv mr-5"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    this.props.toggleSavePost(this.state.profileID,
                      this.props.match.params.id).then((res)=>{
                      if(res.payload === true ) {
                        this.setState({savedBtn: "Saved"})
                      }else{
                        this.setState({savedBtn: "Save"})
                      }
                    })
                   } else {
                    window.location.assign("/signin");
                  }
                }}
              >
                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;
                {this.state.savedBtn}
              </button>
            </div>
            <div className="col-12 mt-2 mb-3">
              <div className="row pictures m-auto ">
                <Carousel>
                  {details.pictures.map((src) => {
                    return <PostPictures picture={src} />;
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 mb-3">
              <div className="col-12">
                <p className="text-secondary text-left">
                  <span className="hotyp">
                    {details.type} hosted by {details.createdBy.firstname}
                  </span>
                  <br />
                  <span>{details.guests} &nbsp;Guests.&nbsp;&nbsp;</span>
                  <span>{details.bedrooms} &nbsp;Bedrooms.&nbsp;&nbsp;</span>
                  <span>{details.rooms} &nbsp;Rooms.&nbsp;&nbsp;</span>
                  <span>{details.beds} &nbsp;Beds.&nbsp;&nbsp;</span>
                  <span>{details.baths}&nbsp;Baths</span>
                </p>
              </div>
              <h2 className="text-left">{details.location}</h2>
              <h3 className="text-left">{details.address}</h3>
              <hr />
              <div className="row justify-content-between p-5">
                <div className="col-12 col-md-3 p-3 dt">
                  <h4>{details.type}</h4>
                  <i className="fa fa-home fa-3x pt-3" aria-hidden="true"></i>
                </div>
                <div className="col-12 col-md-3 p-3 dt">
                  <h3>Enhanced Clean</h3>
                  <i className="fa fa-star-half-o fa-3x" aria-hidden="true"></i>
                </div>
                <div className="col-12 col-md-3 p-3 dt">
                  <h3>Super Host</h3>
                  <i className="fa fa-empire fa-3x" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-12">
                <h3 className="text-left">Description</h3>
                <hr />
                <p className="description text-left">{details.description}</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center avail p-4 font-weight-bold">
              <p className="text-left price">&#36; {details.price} / Night</p>
              <hr />
              <form className="check-form p-4">
                <div className="form-group">
                  <label htmlFor="checkin">Check In</label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkin"
                    min={new Date().toISOString().split('T')[0]}
                    aria-describedby="dateHelp"
                    onChange={(event) => {this.setState({startDate: event.target.value})}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout">Check Out</label>
                  <input type="date" className="form-control" id="checkout"
                  min={new Date().toISOString().split('T')[0]} onChange={(event) =>{this.setState({endDate: event.target.value})}}/>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-75 mr-auto ml-auto"
                  onClick={async(e)=>{
                    e.preventDefault();
                    //console.log(this.state.startDate," ",this.state.endDate)
                    await this.props.CheckAvail(localStorage.getItem("id"),details._id,this.state.startDate,this.state.endDate)
                    .then(res=>{
                      this.setState({resultOfAvail:res.payload});
                    })}}
                >
                  Check Availability
                </button>
              </form>
              {this.showAvailabilitlyMsg()}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <h3 className="text-center">Amenities</h3>
            </div>
            <div className="col-12 text-center">
              <ul className="list-group list-group-horizontal mt-3 mb-3 mr-auto ml-auto p-0 border-0">
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp;{" "}
                  {this.checkAmenities("Wifi", details.wifi)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-gg-circle" aria-hidden="true"></i>&nbsp;
                  &nbsp; {this.checkAmenities("AC", details.ac)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-table" aria-hidden="true"></i>&nbsp;
                  &nbsp; {this.checkAmenities("Breakfast", details.breakfast)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-sun-o" aria-hidden="true"></i>&nbsp;
                  &nbsp; {this.checkAmenities("Heating", details.heating)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-fire" aria-hidden="true"></i>&nbsp;
                  &nbsp; {this.checkAmenities("Kitchen", details.kitchen)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-outdent" aria-hidden="true"></i>&nbsp;
                  &nbsp;{" "}
                  {this.checkAmenities("Smoke Alarm", details.smokeAlarm)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-tv"></i>&nbsp; &nbsp;{" "}
                  {this.checkAmenities("TV", details.tv)}
                </li>
                <li className="list-group-item p-3">
                  <i className="fa fa-2x fa-arrow-up" aria-hidden="true"></i>&nbsp;
                  &nbsp; {this.checkAmenities("Elevator", details.elevator)}
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <h3>Reviews</h3>
          <div className="row pb-5">
            {details.commentsDetails.map((comment) => {
              return <Comments comment={comment} />
            })}
          </div>
          <hr/>
            {localStorage.getItem("token")?(
              <div className="row ml-1 mt-3">
          <InsertCommentIcon className="m-2"/>
            <h5 className="pt-2">Add your comment:</h5>
          <textarea className="border ml-3 mb-3  w-50" onChange={(e)=>{
            this.setState({comment: e.target.value});
          }}>{this.state.comment}</textarea>
          <button className="btn btn-primary ml-3 mb-3 " onClick={()=>{
            this.props.WriteComment(this.props.match.params.id,this.state.profileID,this.state.comment)
            window.location.reload();
          }}>Comment</button>
          </div>
            ):(<></>)}
        </div>
      );
    }); //map end
  }; //showfunction end
}
const mapStateToProps = (state) => {
  return {
    details: state.postDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPostById, getProfile, toggleSavePost, WriteComment,CheckAvail }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);