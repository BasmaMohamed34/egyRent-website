import { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import "./Home.css";
import Banner from "../../Component/Banner/Banner";
import { Card } from "../../Component/HomeCard/Card";
import Ecard from "../../Component/HomeCard/Card";
import Search from "../SearchForm/Search";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
    /*     if (posts) {
    console.log("done"); */
  }
  async componentDidMount() {
    //console.log('works')
    await this.props.getPosts();
    this.setState({
      posts: this.props.posts,
    });

    console.log("this.state.posts:", this.state.posts);
  }
  render = () => {
    return (
      <div className="home mb-3">
        {/* <br/> */}
        <Banner />
        <Search />
        <h1 className=" m-5 text-center">Top Destination</h1>
        <div className="row d-flex justify-content-center top-destination">
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="place"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            title="place"
            description="Spaces that are more than just a place to sleep."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="place"
            description="Comfortable private places, with room for friends or family."
          />
        </div>
        <h1 className="m-5 text-center">Explore</h1>
        <div className="row d-flex exlore ml-4 justify-content-center">
          <Ecard {...this.props} />

          <Link to="/search-result">
            <button className="btn btn-success mt-3 ">See more..</button>
          </Link>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  console.log(state.posts);
  return { posts: state.posts };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(Home);
