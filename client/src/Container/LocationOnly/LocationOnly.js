import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getDestination } from "../../actions/Search";
import { Route } from "react-router-dom";

class LocationOnly extends Component {
  constructor() {
    super();
    this.state = {
      res: [],
    };
  }

  async componentDidMount() {
    let locs = await this.props.getDestination(
      this.props.match.params.location
    );
    this.setState({ res: locs.payload });
    
  }

  render = () => {
    return (
      <div>
        <div>
          <h1 className="text-center p-5">
            Stays in {this.props.match.params.location}
          </h1>
          <div>{this.renderDestination(this.state.result)}</div>
        </div>
      </div>
    );
  };
  renderDestination() {
   
    if (this.state.res.length !== 0) {
      return this.state.res.map((res) => {
        return (
          <>
            <div className="row">
              <div className="searchResult container divIMG">
                <div className="col-sm-12 col-md-4 img-fluid">
                  <img
                    src={"http://localhost:5000/uploads/" + res.pictures[0]}
                    alt=""
                    className="imgSearchResult"
                  />
                </div>
                <div className="searchResult__info col-md-10 col col-sm-12">
                  <div className="searchResult__infoTop text-dark col-md-10 col">
                    <h6>{res.location}</h6>
                    <h3>{res.title}</h3>
                    <h6>____</h6>
                    <h6>{res.description}</h6>
                    <h4 className="d-inline mt-5">{res.price}$ / Night</h4>
                    <Route
                      render={({ history }) => (
                        <button
                          className="btn Detailsbtn btn-primary float-right"
                          onClick={() => {
                            history.push(`/post/${res._id}`);
                          }}
                        >
                          Show Details{" "}
                        </button>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    } else return <h2 className="text-center">No Results!</h2>;
  }
}
const mapStateToProps = (state) => {
  return { DestinationSearch: state.DestinationSearch };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getDestination }, dispatch);
};

export default connect(mapStateToProps, mapactionstoprops)(LocationOnly);
