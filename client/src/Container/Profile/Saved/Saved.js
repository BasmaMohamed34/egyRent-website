import { Component } from "react";
import { connect } from "react-redux";
import { getProfileSaved } from "../../../actions/profile";
import { bindActionCreators } from "redux";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      profileSaved: [],
    };
  }
  async componentDidMount() {
    await this.props.getProfileSaved(window.location.pathname.split("/")[2]);
    this.setState({
      profileSaved: this.props.profileSaved,
    });
  }
  renderProfilePosts({ profileSaved }) {
    if (localStorage.getItem("token")) {
      if (profileSaved.length > 0) {
        return profileSaved.map((profileSaved) => (
          <>
            <div className="col col-md-12 imgg ">
              <img
                className=" rounded"
                src={
                  "http://localhost:5000/uploads/" + profileSaved.pictures[0]
                }
                alt="img"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body text-left  bg-light rounded ">
                <h4 className="card-title text-left">{profileSaved.title}</h4>
                <h5 className="card-title">{profileSaved.location}</h5>
                <p className="card-text">{profileSaved.description}</p>
                <h4 className="card-title">{profileSaved.price}$ / Night</h4>
                <a href={"/post/" + profileSaved._id} className="btn btn-primary mt-1">
                  More Details
                </a>
              </div>
              <hr />
            </div>
          </>
        ));
      } else {
        return <div>No Saved Posts</div>;
      }
    } else window.location.assign("/signin");
  }

  render = () => {
    return <div className="">{this.renderProfilePosts(this.props)}</div>;
  };
}
const mapStateToProps = (state) => {
  return { profileSaved: state.profileSaved };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getProfileSaved }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(Saved);