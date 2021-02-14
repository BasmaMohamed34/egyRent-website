import React from "react";
import { Component } from "react";
import BellIcon from "react-bell-icon";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, logOut, getProfile } from "../../actions/profile";
import { bindActionCreators } from "redux";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      profile: {},
    };
  }

  // componentDidMount() {
  //   this.props.signIn("samy123", "samy123").then((res) => {
  //     if (res.payload === "Valid Password") {
  //       this.setState({ loggedIn: false });
  //     }
  //   });
  // }
  async componentDidMount() {
    await this.props.getProfile(localStorage.getItem("id"));
    this.setState({
      profile: this.props.profile,
    });
    // console.log(this.state.profile);
  }
  checkType() {
    if (this.state.profile.type === "Host") {
      return (
        <>
          <li className="md-mt-3 mb-3 text-center">
            <NavLink
              to={`/${this.state.profile._id}/createpost`}
              exact
              className=" text-decoration-none "
            >
              <b>Create Post</b>
            </NavLink>
          </li>
          <hr />
        </>
      );
    }
  }
  render() {
    return (
      <nav className="navbar header bg-dark navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              className="header__icon d-block mb-1 w-50"
              src="./ourLogo.png"
              alt=""
            />
          </Link>
          
          <li className="nav-item bg md-mt-3 mb-3">
            <NavLink
              to="/chat"
              className="btn btn-pink"
              exact
              style={{
                backgroundColor: "#007bff",
                padding: "7px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <b>Live Chat</b>
            </NavLink>
          </li>

          {/*  */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav ml-auto pl-3 bg-dark borderNav">
              <li className="nav-item active">
                <Link className="nav-link " to="/home">
                  <b className="pr-2" style={{ color: "#fff" }}>
                    Home
                  </b>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link className="nav-link " to="/about">
                  <b style={{ color: "#fff" }}>About US</b>
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                //  window.location.reload()
                <>
                   <li
                    className="smooth-menu"
                    data-toggle="tooltip"
                    title="Notification"
                  >
                    <NavLink to="notify" exact>
                       
                      <BellIcon
                        width="30"
                        active={true}
                        color="#fff"
                      /> 
                       
                    </NavLink>
                  </li>
                  <li> 
                  <div className=" dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Hello {this.state.profile.firstname}
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu w-100">
                      <li className="md-mt-3 dropdown-item mb-3 text-center">
                        <NavLink
                          to={`/profile/${this.state.profile._id}`}
                          exact
                          className=" text-decoration-none "
                        >
                          <b>Profile</b>
                        </NavLink>
                      </li>
                      <hr />
                      {this.checkType()}
                      <li className="md-mt-3 mb-3 text-center ">
                        <NavLink
                          to="/signin"
                          exact
                          className="text-decoration-none"
                        >
                          <b
                            onClick={() => {
                              this.props.logOut();
                              //window.location.reload()
                            }}
                          >
                            LogOut
                          </b>
                        </NavLink>
                      </li>
                    </ul>
                    
                  </div>
                 </li>
                </>
              ) : (
                <>
                  <li className="nav-item bg mr-3 mb-3">
                    <Link
                      to="/signup"
                      className="btn btn-pink"
                      exact
                      style={{
                        backgroundColor: "#007bff",
                        padding: "7px",
                        borderRadius: "5px",
                        color: "#fff",
                      }}
                    >
                      <b>Sign Up</b>
                    </Link>
                  </li>
                  <li className="nav-item bg md-mt-3 mb-3">
                    <NavLink
                      to="/signin"
                      className="btn"
                      exact
                      style={{
                        backgroundColor: "#007bff",
                        padding: "7px",
                        borderRadius: "5px",
                        color: "#fff",
                      }}
                    >
                      <b>Sign In</b>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.profile);
  return { profile: state.profile };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn, logOut, getProfile }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(Header);
