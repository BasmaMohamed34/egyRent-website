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

    if (payload !== null) return true;
  }
  ErrorMessage() {
    // if(!localStorage.getItem('token')){
    //   this.setState({errMsg:JSON.stringify(this.state.done.error)})
    //   return(
    //     <div>
    //       {JSON.parse(this.state.errMsg)}
    //     </div>
    //   )
    // }
    // console.log(!localStorage.getItem('token'))
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
                            this.setState({ done: res.payload });
                            if (this.state.done.token) {
                              localStorage.setItem(
                                "token",
                                this.state.done.token
                              );
                              localStorage.setItem("id", this.state.done.id);

                              if (this.checkUserAuth()) {
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
              {/* {this.ErrorMessage()} */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ signIn, getProfile }, dispatch);
};
export default connect(null, mapactionstoprops)(SignIn);
