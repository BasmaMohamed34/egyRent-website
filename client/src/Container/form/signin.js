import "./sign.css";
import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
class SignIn extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div class="wrapper">
        <div class="sign-panels">
          <div class="login">
            <div class="title">
              <span>Sign In</span>
              <p>Welcome back, please login to your account.</p>
            </div>

            <form action="">
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
              <input type="checkbox" className="checkbox" id="remember" />
              <label for="remember">Keep me sign in</label>
              <a href="#s" class="btn-signin btn-primary">
                Sign In
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
