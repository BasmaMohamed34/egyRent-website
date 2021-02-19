import "./sign.css";
import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { signIn, getProfile } from "../../actions/profile";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";

class SignIn extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      username: "",
      password: "",
      done: "",
      errMsg: "",
      userData: {},
      resultOfSignIn: "",
    };
  }

  checkUserAuth() {
    let payload;
    this.props
      .getProfile(this.state.done.id)
      .then((res) => {
        payload = res.payload;
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ userData: payload });
    if (payload !== null) return true;
  }

  render() {
    return (
      <div className="signInWrapper">
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

              <Route
                render={({ history }) => (
                  <button
                    type="button"
                    className="btn-signin btn-primary"
                    onClick={() => {
                      if (this.validator.allValid()) {
                        this.props
                          .signIn(this.state.username, this.state.password)
                          .then((res) => {
                            this.setState({
                              done: res.payload,
                              resultOfSignIn: res.payload.error,
                            });
                            if (this.state.done.token) {
                              localStorage.setItem(
                                "token",
                                this.state.done.token
                              );
                              localStorage.setItem("id", this.state.done.id);
                              let checkAuth = this.checkUserAuth();
                              if (checkAuth) {
                                history.push(`/home`);
                                window.location.reload();
                              }
                            }
                          });
                      } else {
                        this.validator.showMessages();
                      }
                    }}
                  >
                    Sign In
                  </button>
                )}
              />
            </form>
          </div>
          <h5 className="text-danger pt-4 lead">{this.state.resultOfSignIn}</h5>
        </div>
      </div>
    );
  }
}

const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn, getProfile }, dispatch);
};
export default connect(null, mapactionstoprops)(SignIn);
