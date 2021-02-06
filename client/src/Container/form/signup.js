import "./sign.css";
import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";

class Signup extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: 0,
    };
  }
  render() {
    return (
      <div className="wrapper">
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
                value={this.state.firstName}
                onChange={(e) => {
                  this.setState({ firstName: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("first name")}
              />
              <div className="validation">
                {this.validator.message(
                  "first name",
                  this.state.firstName,
                  "required|alpha_space"
                )}
              </div>
              <input
                className=""
                type="text"
                placeholder="Last Name"
                required
                id="last name"
                value={this.state.lastName}
                onChange={(e) => {
                  this.setState({ lastName: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("last name")}
              />
              <div className="validation">
                {this.validator.message(
                  "last name",
                  this.state.lastName,
                  "required|alpha_space"
                )}
              </div>
              <input
                type="text"
                placeholder="Username"
                required
                id="username"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("username")}
              />
              <div className="validation">
                {this.validator.message(
                  "username",
                  this.state.username,
                  "required|alpha_space"
                )}
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                id="email"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("email")}
              />
              <div className="validation">
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </div>
              <input
                type="number"
                placeholder="Phone Number"
                id="phone"
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("phone")}
              />
              <div className="validation">
                {this.validator.message(
                  "phone",
                  this.state.phone,
                  "required|phone"
                )}
              </div>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                onBlur={() => this.validator.showMessageFor("password")}
              />
              <div className="validation">
                {this.validator.message(
                  "password",
                  this.state.password,
                  "required|password"
                )}
              </div>
              <select className="text-center">
                <option selected disabled>
                  Signup as
                </option>
                <option id="traveller">Traveller</option>
                <option id="host">Host</option>
              </select>

              <a
                href="#s"
                className="btn-signin btn-primary"
                onClick={(e) => {
                  if (this.validator.allValid()) {
                    alert("signed up");
                  } else {
                    this.validator.showMessages();
                  }
                }}
              >
                Sign Up
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
