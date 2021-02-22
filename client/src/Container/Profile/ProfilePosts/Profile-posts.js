import { Component } from "react";
import { connect } from "react-redux";
import { getProfilePosts } from "../../../actions/profile";
import { bindActionCreators } from "redux";

class ProfilePosts extends Component {
  constructor() {
    super();
    this.state = {
      profilePosts: [],
    };
  }
  async componentDidMount() {
    await this.props.getProfilePosts(window.location.pathname.split("/")[2]);
    this.setState({
      profilePosts: this.props.profilePosts,
    });
 
  }
  renderProfilePosts({ profilePosts }) {
    if (localStorage.getItem("token")) {
      if (profilePosts.length > 0) {
        return profilePosts.map((profilePost) => (
          <>
            <div className="col col-md-12p-2 ">
              <img
                className=" rounded"
                src={"https://fathomless-stream-04225.herokuapp.com/uploads/" + profilePost.pictures[0]}
                alt="img"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body text-left  bg-light rounded ">
                <h4 className="card-title text-left">{profilePost.title}</h4>
                <h5 className="card-title">{profilePost.location}</h5>
                <p className="card-text">{profilePost.description}</p>
                <h4 className="card-title">{profilePost.price}$ / Night</h4>
                <a
                  href={"/post/" + profilePost._id}
                  className="btn btn-primary mt-1"
                >
                  More Details
                </a>
              </div>
              <hr />
            </div>
          </>
        ));
      } else {
        return <div>No Posts</div>;
      }
    } else {
      window.location.assign("/signin");
    }
  }

  render = () => {
    return <div className="">{this.renderProfilePosts(this.props)}</div>;
  };
}
const mapStateToProps = (state) => {
  return { profilePosts: state.profilePosts };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getProfilePosts }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(ProfilePosts);
