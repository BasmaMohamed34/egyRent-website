import React from "react";
import { Component } from "react";
import BellIcon from "react-bell-icon";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, logOut, getProfile } from "../../actions/profile";
import { bindActionCreators } from "redux";
import { Dropdown } from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      profile: {},
      count:1,
      badgeNum:0 
    };
  }

  async componentDidMount() {
    await this.props.getProfile(localStorage.getItem("id"));
    this.setState({
      profile: this.props.profile,  
    });
  }
  checkType() {
    if (this.state.profile.type === "Host") {
      return (
        <>
          <NavLink
            to={`/${this.state.profile._id}/createpost`}
            exact
            className=" text-decoration-none "
          >
            <b>Create Post</b>
          </NavLink>
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
                <>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Hello {this.state.profile.firstname}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="text-center w-100">
                        <Dropdown.Item>
                          <NavLink
                            to={`/profile/${this.state.profile._id}`}
                            exact
                            className=" text-decoration-none "
                          >
                            <b>Profile</b>
                          </NavLink>
                          <hr />
                        </Dropdown.Item>
                        <Dropdown.Item>{this.checkType()}</Dropdown.Item>
                        <Dropdown.Item>
                          <NavLink
                            to="/signin"
                            exact
                            className="text-decoration-none"
                          >
                            <b
                              onClick={() => {
                                this.props.logOut();
                              }}
                            >
                              LogOut
                            </b>
                          </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li
                    className="smooth-menu ml-3"
                    data-toggle="tooltip"
                    title="Notification"
                  >
                    <NavLink to="/notify" exact>
                      <BellIcon width="30" active={true} color="#fff"/>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item bg mr-3 mb-3">
                    <Link
                      to="/signup"
                      className="btn btn-primary"
                      exact
                      style={{
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
  return { profile: state.profile };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn, logOut, getProfile }, dispatch);
};
export default connect(mapStateToProps, mapactionstoprops)(Header);
