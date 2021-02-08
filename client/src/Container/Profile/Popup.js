import { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/profile";
import { bindActionCreators } from "redux";
import { Route } from "react-router-dom";

class Popup extends Component {
  render() {
    return (
      <div className="modal fade" id="Modal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deletion Confirmation</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="float-md-right text-dark">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              {" "}
              Are You Sure You Want To Delete Your Account?
            </div>
            <div className="modal-footer">
              <Route
                render={({ history }) => (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.deleteUser(
                        window.location.pathname.split("/")[2]
                      );
                      history.push(`/`);
                      window.location.reload(false);
                    }}
                  >
                    Delete
                  </button>
                )}
              />
              <button
                type="button"
                className="btn btn-secondary"
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

const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ deleteUser }, dispatch);
};
export default connect(null, mapactionstoprops)(Popup);
