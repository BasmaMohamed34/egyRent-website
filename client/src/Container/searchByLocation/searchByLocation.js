import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getByLocation } from "../../actions/Search";
import { Route } from "react-router-dom";

class SearchByLocation extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      loc: "",
    };
  }

  async componentDidMount() {

    let x = await this.props.getByLocation(
      this.props.match.params.location.toString().toLowerCase(),
      this.props.match.params.guests
    );
    this.setState({ result: x.payload });
  }

  render = () => {
    return (
      <div>
        <div>
          <h1 className="text-center p-5">
            Stays in {this.props.match.params.location}
          </h1>
          <div>{this.renderSearch(this.state.result)}</div>
        </div>
      </div>
    );
  };
  renderSearch(Search) {
    if (Search.length !== 0) {
      return Search.map((res) => {
        return (
          <>
            <div className="row">
              <div className="searchResult container">
                <div className="col-sm-12 col-md-4 img-fluid">
                  <img
                    src={"https://fathomless-stream-04225.herokuapp.com/uploads/" + res.pictures[0]}
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
  return { Search: state.locationSearch };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getByLocation }, dispatch);
};

export default connect(mapStateToProps, mapactionstoprops)(SearchByLocation);
