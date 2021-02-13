import React from "react";
import { Component } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import  getByLocation  from "../../actions/Search";
import { Link } from "react-router-dom";
// DATE PICKER COMPONENT

class Search extends Component {
  constructor() {
    super();

    this.state = {
      loction: "",
      guests: 0,
    };
  }
  //   async componentDidMount() {
  //     console.log(this.props);
  //     await this.props.getProfile(window.location.pathname.split("/")[2]);
  //     this.setState({
  //       profile: this.props.profile,
  //     });
  //     console.log("this.state.profile:", this.state.profile);
  //     //console.log(window.location.pathname.split("/")[2]);
  //   }

  render() {
    return (
      <div className="row align-self-center ml-auto mr-auto border  pb-0 search-body rounded m-5 shadow">
        <div className="card-body">
          <div className="container">
            <div className="row search-form justify-content-between ">
              {/* <form className="form-row"> */}
              <div className="col-md-4 col">
                <h5>Location</h5>
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Location"
                  value={this.state.location}
                  onChange={(e) => {
                    this.setState({
                      location: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="col-md-4 col">
                <h5>No. of Guests</h5>
                <input
                  type="number"
                  className="form-control w-100 m-auto"
                  placeholder="guest number"
                  value={this.state.guests}
                  onChange={(e) => {
                    this.setState({
                      guests: e.target.value,
                    });
                  }}
                />
              </div>

              {/* <Route path={`/search-result/${this.state.location}/${this.state.guests}`}><input value="Search By Location" type="submit" className="searchBtn btn-primary " onClick={()=>{}}/>
                                    <i className="fa fa-search"/></Route> */}

              <Link
                to={`/search-result/${this.state.location}/${this.state.guests}`}
              >
                <button className="btn btn-success mt-3 ">
                  Search By Location
                </button>
              </Link>

              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     console.log(state.location);
//     return { location: state.location };
//   };
//   const mapactionstoprops = (dispatch) => {
//     return bindActionCreators({ getByLocation }, dispatch);
//   };
//   export default connect(mapStateToProps, mapactionstoprops)(Search);

export default Search;
