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
      <div className="col col-md-12">
        <div className="pp bg-light Ecard border-0 ">
          <img src={profilePosts.pictures[0]} alt="" />
          <div className="card__info text-left">
            <h2>{profilePosts.title}</h2>
            <h2>{profilePosts.location}</h2>
            <p>{profilePosts.description}</p>
            <h5>{profilePosts.price}$ / Night</h5>
          </div>
        </div>
        <hr />
      </div>
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
