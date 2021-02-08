import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editUser, getProfile } from "../../actions/profile";
import { Route } from "react-router-dom";

class EditUser extends Component {
  constructor() {
    super();

    this.state = {
      //profile: {},
      user: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  async componentDidMount() {
    //console.log(this.props);
    await this.props.getProfile(window.location.pathname.split("/")[2]);
    this.setState({
      user: this.props.profile,
    });
    //console.log(this.state.profile);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  }
  render() {
    return (
      <div className="modal fade" id="EditModal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title p-2">Edit Your Information</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="float-right text-dark">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form className="bg-white">
                <div class="row">
                  <div className="col-4">
                    <label for="firstname" className="mt-3 ">
                      First Name
                    </label>
                    <input
                      class="form-control col-12 "
                      name="firstname"
                      type="text"
                      placeholder="your new first name"
                      value={this.state.user.firstname}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-4">
                    <label for="lastname" className=" mt-3">
                      Last Name
                    </label>
                    <input
                      class="form-control col-12"
                      type="text"
                      name="lastname"
                      placeholder="your new last name"
                      value={this.state.user.lastname}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-4">
                    <label for="username" className=" mt-3">
                      User Name
                    </label>
                    <input
                      class="form-control"
                      name="username"
                      type="text"
                      value={this.state.user.username}
                      placeholder="your new username"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label for="email" className="mt-3">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      value={this.state.user.email}
                      placeholder="your new email address"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label for="password" className="mt-3">
                      Password
                    </label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      value={this.state.user.password}
                      placeholder="your new password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label for="location" className="mt-3">
                      Location
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      name="location"
                      value={this.state.user.location}
                      placeholder="your new location"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label for="phone" className=" mt-3">
                      Phone
                    </label>
                    <input
                      class="form-control"
                      name="phone"
                      type="number"
                      value={this.state.user.phone}
                      placeholder="your new phone"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Route
                render={({ history }) => (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => {
                      this.props.editUser(
                        window.location.pathname.split("/")[2],
                        this.state.user
                      );
                      /* history.push(
                        "/profile/" + window.location.pathname.split("/")[2]
                      ); */
                      window.location.reload(false);
                    }}
                  >
                    Update
                  </button>
                )}
              />

              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { profile: state.profile };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editUser, getProfile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
