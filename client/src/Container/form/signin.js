import "./sign.css";
import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { signIn } from "../../actions/profile";
import { bindActionCreators } from "redux";

class SignIn extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      //email: "",
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="sign-panels">
          <div className="login">
            <div className="title">
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
                  "required|alpha_num_dash"
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
                  "required|password|min:4" //will be 8 after editing users passwords in db
                )}
              </div>
              <input type="checkbox" className="checkbox" id="remember" />
              <label for="remember">Keep me sign in</label>
              <button
                type="button"
                className="btn-signin btn-primary"
                onClick={() => {
                  if (this.validator.allValid()) {
                    this.props.signIn(this.state.username, this.state.password);
                  } else {
                    this.validator.showMessages();
                  }
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};
export default connect(null, mapactionstoprops)(SignIn);
