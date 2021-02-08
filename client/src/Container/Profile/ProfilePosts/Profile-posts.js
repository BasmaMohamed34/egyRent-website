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
    console.log(this.props);
    await this.props.getProfilePosts(window.location.pathname.split("/")[2]);
    this.setState({
      profilePosts: this.props.profilePosts,
    });
    /*  console.log("this.state.profile:", this.state.profile); */
    //console.log(window.location.pathname.split("/")[2]);
  }
  renderProfilePosts({ profilePosts }) {
    return profilePosts.map((profilePosts) => (
      <>
        <div className="col col-md-12p-2 ">
          <img
            className=" rounded"
            src={profilePosts.pictures[0]}
            alt="img"
            style={{ width: "100%", height: "50%" }}
          />
          <div className="card-body text-left  bg-light rounded ">
            <h4 className="card-title text-left">{profilePosts.title}</h4>
            <h5 className="card-title">{profilePosts.location}</h5>
            <p className="card-text">{profilePosts.description}</p>
            <h4 className="card-title">{profilePosts.price}$ / Night</h4>
            <a href="#!" className="btn btn-primary mt-1">
              More Details
            </a>
          </div>
          <hr />
        </div>
      </>
    ));
  }

  render = () => {
    return <div className="">{this.renderProfilePosts(this.props)}</div>;
  };
}
const mapStateToProps = (state) => {
  console.log(state.profilePosts);
  return { profilePosts: state.profilePosts };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getProfilePosts }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(ProfilePosts);
