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
        <div
          className="row d-flex justify-content-center top-destination
        "
        >
          <Card
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0a/11/98/alexandria.jpg?w=1000&h=600&s=1"
            title="Alexandria"
          />
          <Card
            src="https://media-cdn.tripadvisor.com/media/photo-s/19/bc/d4/96/rixos-sharm-el-sheikh.jpg"
            title="Sharm El Sheikh"
          />
          <Card
            src="https://media-cdn.tripadvisor.com/media/photo-s/19/48/b3/4b/continental-hotel-hurghada.jpg"
            title="Hurghada"
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
