import './post.css'
import PostPictures from '../../Component/postPictures/postPictures'
import Comments from '../../Component/postComments/postComments';
import { connect } from "react-redux";
import { getPostById } from "../../actions/posts";
import { bindActionCreators } from "redux";
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Post extends Component{
    constructor(){
        super();
        this.state={
            post:[],
            comments:[]
        }
    }
     async componentDidMount() {
         console.log('works')
        let postArr=await this.props.getPostById(this.props.match.params.id)
        this.setState({post:postArr.payload})
    }
    
    render(){
        return(
            <div>
                {this.showPostDetails(this.state.post)}    
            </div>
        )
    }
    checkAmenities(type,value){
        if(value===false){
            return(<span style={{textDecoration:"line-through",color:"black"}}>{type}</span>)
        }
        else return(<span style={{color:"black"}}>{type}</span>)
    }
    showPostDetails = (details) => {
 
        return (details.map(details=>{
            return (
                <div className="container" key={details.id}>
                    <div className="row">
                        <div className="col-12 m-3">
                            <h3 className="loc p-3 text-center">{details.title}</h3>
                            <button className="btn btn-outline-success sv mr-5"><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;Save</button>
                        </div>
                        <div className="col-12 mt-2 mb-3">
                            <div className="row pictures m-auto">
                            <Carousel>
                            {details.pictures.map(src=>{
                               return(
                                <PostPictures picture={src}/>  
                               )
                            })}
                               </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 mb-3">
                            <div className="col-12">
                                <p className="text-secondary text-left">
                                    <span className="hotyp">{details.type} hosted by Mahmoud</span><br />
                                    <span>{details.guests} &nbsp;Guests.&nbsp;&nbsp;</span>
                                    <span>{details.bedrooms} &nbsp;Bedrooms.&nbsp;&nbsp;</span>
                                    <span>{details.rooms} &nbsp;Rooms.&nbsp;&nbsp;</span>
                                    <span>{details.beds} &nbsp;Beds.&nbsp;&nbsp;</span>
                                    <span>{details.baths}&nbsp;Baths</span>
                                </p>
                            </div>
                            <h3 className="text-left">{details.address}</h3>
                            <hr />
                            <div className="row justify-content-between p-5">
                                <div className="col-12 col-md-3 p-3 dt">
                                    <h4>{details.type}</h4>
                                    <i class="fa fa-home fa-3x pt-3" aria-hidden="true"></i>
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
                        <div className="col-12 col-md-4 text-center avail p-4 pb-1font-weight-bold">
                            <p className="text-left price">&#36; {details.price} / Night</p>
                            <hr />
                            <form className="check-form p-4">
                                
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
                                <button type="submit" className="btn btn-primary btn-lg w-75 mr-auto ml-auto">Check Availability</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <h3 className="text-center">Amenities</h3>
                        </div>
                        <div className="col-12 text-center">
                            <ul className="list-group list-group-horizontal mt-3 mb-3 mr-auto ml-auto p-0 border-0">
                                <li className="list-group-item p-3"><i className="fa fa-2x fa-wifi"></i>&nbsp; &nbsp; {this.checkAmenities("Wifi",details.wifi)}</li>
                                <li className="list-group-item p-3"><i class="fa fa-2x fa-gg-circle" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("AC",details.ac)}</li>
                                <li className="list-group-item p-3"><i className="fa fa-2x fa-table" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("Breakfast",details.breakfast)}</li>
                                <li className="list-group-item p-3"><i className="fa fa-2x fa-sun-o" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("Heating",details.heating)}</li>
                                <li className="list-group-item p-3"><i class="fa fa-2x fa-fire" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("Kitchen",details.kitchen)}</li>
                                <li className="list-group-item p-3"><i class="fa fa-2x fa-outdent" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("Smoke Alarm",details.smokeAlarm)}</li>
                                <li className="list-group-item p-3"><i className="fa fa-2x fa-tv"></i>&nbsp; &nbsp; {this.checkAmenities("TV",details.tv)}</li>
                                <li className="list-group-item p-3"><i class="fa fa-2x fa-arrow-up" aria-hidden="true"></i>&nbsp; &nbsp; {this.checkAmenities("Elevator",details.elevator)}</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                            <h3>Reviews</h3>
                    <div className="row pb-5">
                            {details.comments.map(comment=>{
                                console.log(comment)
                               return(
                         <Comments comment={comment}/> 
                                 
                               )
                            })}
                       
                 
                    </div>
                </div>
            ) 
        })//map end
        )} //showfunction end
}
 const mapStateToProps = (state) => {
     console.log(state)
     return {
         details: state.postDetails
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({ getPostById }, dispatch)
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Post)
