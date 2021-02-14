import "./Profile.css";
import { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
import { bindActionCreators } from "redux";
import { Route, Switch, Link } from "react-router-dom";
import ProfilePosts from "./ProfilePosts/Profile-posts";
import Saved from "./Saved/Saved";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Popup from "./Popup";
import EditUser from "./EditUser";
class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {},
      fName: "",
      lName: "",
    };
  }
  async componentDidMount() {
    await this.props.getProfile(localStorage.getItem("id"));
    this.setState({
      profile: this.props.profile,
    });
    this.setState({
      fName:
        this.props.profile.firstname.charAt(0).toUpperCase() +
        this.props.profile.firstname.slice(1),
      lName:
        this.props.profile.lastname.charAt(0).toUpperCase() +
        this.props.profile.lastname.slice(1),
    });
  }

  checkType(profile) {
    if (this.state.profile.type === "Host") {
      return (
        <Route exact path={`/profile/${profile}`}>
          <ProfilePosts />
        </Route>
      );
    } else {
      return (
        <Route exact path={`/profile/${profile}`}>
          <Saved />
        </Route>
      );
    }
  }
  renderProfile({ profile }) {
    if (localStorage.getItem("token")) {
      return (
        <>
          <div className="col-md-4 rightBorder">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    src={"http://localhost:5000/uploads/" + profile.photo}
                    alt="content"
                    className="rounded-circle w-75 bg-dark imgCenter border-0"
                  ></img>
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"></div>
                      <div className="flex flex-col items-center  text-left justify-center">
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                          <p className="d-block">
                            <PhoneRoundedIcon
                              className="fa1 mr-1"
                              style={{ color: "#4169E1" }}
                            />
                            {profile.phone}
                          </p>
                          <p className="d-block">
                            <EmailRoundedIcon
                              className="fa1 mr-1"
                              style={{ color: "#4169E1" }}
                            />
                            {profile.email}
                          </p>
                          {/*  <p className="d-block">
                    <InfoRoundedIcon className="fa1 mr-1" />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p> */}
                        </div>
                        <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4 text-left">
                          <p className="text-base  mb-4">
                            <LocationOnIcon
                              className="fa1 mr-1"
                              style={{ color: "#4169E1" }}
                            />
                            {profile.location}
                          </p>
                          <button
                            class="btn btn-light border col-md-6"
                            data-toggle="modal"
                            data-target="#EditModal"
                          >
                            Edit Info
                          </button>
                          <EditUser />
                          <button
                            class="btn btn-danger border rounded col-md-6"
                            data-toggle="modal"
                            data-target="#Modal"
                          >
                            Delete Account
                          </button>
                          <Popup />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="jumbotron col-md-8 row h-25 justify-content-between">
            <h1 className="font-medium title-font mt-4 ml-3 text-gray-900 text-lg col-8 text-left">
              {/* {`${profile.firstname
                .charAt(0)
                .toUpperCase()}${profile.firstname.slice(
                1
              )} ${profile.lastname
                .charAt(0)
                .toUpperCase()}${profile.lastname.slice(1)}`} */}
              {`${this.state.fName} ${this.state.lName}`}
            </h1>
            {/* <NotificationsRoundedIcon
          className="ico rounded-circle p-2"
          style={{ color: "white", fontSize: 50 }}
        /> */}
            <div className="col-md-8  outerElem p-2">
              <hr />
              <div className="d-flex justify-content-between text-center SaveBtn1 rounded">
                {this.state.profile.type === "Host" ? (
                  <>
                    <Link
                      to={`/profile/${profile._id}/profile-posts`}
                      className="btn w-100 SaveBtn1  text-dark "
                    >
                      Posts
                    </Link>
                    <Link
                      to={`/profile/${profile._id}/profile-saved`}
                      className="btn w-100 SaveBtn1 text-dark"
                    >
                      Saved
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={`/profile/${profile._id}/profile-saved`}
                      className="btn w-100 SaveBtn1 text-dark"
                    >
                      Saved
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-10 outerElem p-2">
              <Switch>
                {this.checkType(profile._id)}
                <Route exact path={`/profile/${profile._id}/profile-posts`}>
                  <ProfilePosts />
                </Route>
                <Route exact path={`/profile/${profile._id}/profile-saved`}>
                  <Saved />
                </Route>
              </Switch>
            </div>
          </div>
        </>
      );
    } else {
      window.location.assign("/signin");
    }
  }

  render = () => {
    return (
      <div className="row text-gray-600 body-font m-5 jumbotron">
        {this.renderProfile(this.props)}
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  console.log(state.profile);
  return { profile: state.profile };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getProfile }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(Profile);
