import { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import "./Home.css";
import Banner from "../../Component/Banner/Banner";
import Ecard from "../../Component/HomeCard/Card";
import Search from "../SearchForm/Search";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      postsLocation: [],
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

    // console.log("this.state.posts:", this.props);
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
          <div className="col col-md-4 col-lg-3">
            <Link
              to="/search-result/Alexandria"
              className="text-decoration-none text-dark"
            >
              <div className="card">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0a/11/98/alexandria.jpg?w=1000&h=600&s=1"
                  alt=""
                  className="divIMG"
                />
                <div className="card__info">
                  <h2 className="text-center text-uppercase">Alexandria</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="col col-md-4 col-lg-3">
            <Link
              to="/search-result/sharmelsheikh"
              className="text-decoration-none text-dark"
            >
              <div className="card">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/19/bc/d4/96/rixos-sharm-el-sheikh.jpg"
                  alt=""
                  className="divIMG"
                />
                <div className="card__info">
                  <h2 className="text-center text-uppercase">
                    Sharm El Sheikh
                  </h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="col col-md-4 col-lg-3">
            <Link
              to="/search-result/hurghada"
              className="text-decoration-none text-dark"
            >
              <div className="card">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/19/48/b3/4b/continental-hotel-hurghada.jpg"
                  alt=""
                  className="divIMG"
                />
                <div className="card__info">
                  <h2 className="text-center text-uppercase">Hurghada</h2>
                </div>
              </div>
            </Link>
          </div>
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
