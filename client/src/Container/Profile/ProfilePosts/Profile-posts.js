/* function ProfilePosts() {
  return (
    <div className="container m-3">
      <h2 className="">Posts</h2>
      <p>
        Lorem text everyff t to make a type specip electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
  );
} */
import { Component } from "react";
import { connect } from "react-redux";
import { getProfilePosts } from "../../../actions/profile";
import { bindActionCreators } from "redux";

class ProfilePosts extends Component {
  /*   console.log(profile); */
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
/* export default ProfilePosts; */
const mapStateToProps = (state) => {
  console.log(state.profilePosts);
  return { profilePosts: state.profilePosts };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getProfilePosts }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(ProfilePosts);
