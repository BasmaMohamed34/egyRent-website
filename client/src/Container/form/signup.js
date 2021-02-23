import "./sign.css";
import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { signUp } from "../../actions/profile";
import { bindActionCreators } from "redux";

import SimpleReactValidator from "simple-react-validator";

class Signup extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      user: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "phone",
        location: "",
        type: "Traveller",
        photo: "",
      },
      done: "",
      resStatus: "",
      userMsg: "",
      userExist: false,
    };
  }
  userExists() {
    if (this.state.userExist === true) {
      window.scrollTo(0, -window.scrollMaxY);
      return (
        <div className="pt-3 text-center w-75 m-auto ">
          <h3 className="text-danger">{this.state.done}</h3>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="wrapper">
        {this.userExists()}
        <div className="sign-panels">
          <div className="signup">
            <div className="title">
              <span>Sign Up</span>
              <p>Create a new account.</p>
            </div>
            <form action="" className="col-12">
              <input
                className=""
                type="text"
                placeholder="First Name"
                required
                id="first name"
                value={this.state.user.firstname}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, firstname: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("first name")}
              />
              <div className="validation">
                {this.validator.message(
                  "first name",
                  this.state.user.firstname,
                  "required|alpha_space"
                )}
              </div>
              <input
                className=""
                type="text"
                placeholder="Last Name"
                required
                id="last name"
                value={this.state.user.lastname}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, lastname: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("last name")}
              />
              <div className="validation">
                {this.validator.message(
                  "last name",
                  this.state.user.lastname,
                  "required|alpha_space"
                )}
              </div>
              <input
                type="text"
                placeholder="Username"
                required
                id="username"
                value={this.state.user.username}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, username: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("username")}
              />
              <div className="validation">
                {this.validator.message(
                  "username",
                  this.state.user.username,
                  "required|alpha_num_dash"
                )}
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                id="email"
                value={this.state.user.email}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, email: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("email")}
              />
              <div className="validation">
                {this.validator.message(
                  "email",
                  this.state.user.email,
                  "required|email"
                )}
              </div>
              <input
                type="number"
                placeholder="Phone Number"
                id="phone"
                value={this.state.user.phone}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, phone: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("phone")}
              />
              <div className="validation">
                {this.validator.message(
                  "phone",
                  this.state.user.phone,
                  "required|phone"
                )}
              </div>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={this.state.user.password}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, password: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("password")}
              />
              <div className="validation">
                {this.validator.message(
                  "password",
                  this.state.user.password,
                  "required|password|min:4"
                )}
              </div>
              <input
                type="location"
                placeholder="City"
                id="location"
                value={this.state.user.location}
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, location: e.target.value },
                  });
                }}
                onBlur={() => this.validator.showMessageFor("location")}
              />
              <div className="validation">
                {this.validator.message(
                  "location",
                  this.state.user.location,
                  "required|string"
                )}
              </div>
              <select
                className="text-center"
                defaultValue={this.state.user.type}
                onChange={(e) => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      type: e.target.value,
                    },
                  });
                }}
              >
                <option selected disabled>
                  Signup as
                </option>
                <option id="traveller">Traveller</option>
                <option id="host">Host</option>
              </select>
              <Route
                render={({ history }) => (
                  <button
                    className="btn-signin btn-primary"
                    type="button"
                    onClick={() => {
                      if (this.validator.allValid()) {
                        const formData = new FormData();
                        Object.keys(this.state.user).forEach((key) =>
                          formData.append(key, this.state.user[key])
                        );
                        this.props
                          .signUp(formData)
                          .then((res) => {
                            this.setState({ done: res.payload });
                            if (this.state.done.token) {
                              localStorage.setItem(
                                "token",
                                this.state.done.token
                              );
                              localStorage.setItem("id", this.state.done.id);
                              history.push(`/home`);
                              window.location.reload();
                            } else {
                              this.setState({ userExist: true });
                            }
                            console.log(this.state.user);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      } else {
                        this.validator.showMessages();
                      }
                    }}
                  >
                    Sign Up
                  </button>
                )}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signUp }, dispatch);
};
export default connect(null, mapactionstoprops)(Signup);
