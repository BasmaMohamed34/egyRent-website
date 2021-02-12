import React from "react";
import { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/profile";
import { bindActionCreators } from "redux";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.props.signIn("samy123", "samy123").then((res) => {
      if (res.payload === "Valid Password") {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <nav className="navbar header bg-dark navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              className="header__icon rounded-circle d-block mb-3 w-50 "
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
                <Link className="nav-link" to="/home">
                  <b className="pr-2" style={{ color: "#fff" }}>
                    Home
                  </b>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link className="nav-link" to="/about">
                  <b style={{ color: "#fff" }}>About US</b>
                </Link>
              </li>
              {this.state.loggedIn ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Dropdown Example
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li className="md-mt-3 mb-3">
                        <NavLink to="/signin" exact>
                          <b>Profile</b>
                        </NavLink>
                      </li>
                      <li className="md-mt-3 mb-3">
                        <NavLink to="/signin" exact>
                          <b>LogOut</b>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
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
                      className="btn btn-pink"
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
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};
export default connect(null, mapactionstoprops)(Header);
