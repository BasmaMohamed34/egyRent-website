import React from "react";
import { Component } from "react";
import "./SearchPage.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSearch } from "../../actions/Search";
import SearchResult from "./SearshResult/SearchResult";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      Search: [],
      bedrooms: "",
      beds: "",
      type: "",
      price: "",
    };
  }

  async componentDidMount() {
    let x = await this.props.getSearch();
    console.log("sdddd", x.payload);
    this.setState({
      Search: x.payload,
    });
  }

  handleClick = (e) => {
    this.setState({
      bedrooms: e.target.value,
    });
  };

  handleClick1 = (e) => {
    this.setState({
      beds: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  handleReset = (e) => {
    this.setState({
      type: "",
      bedrooms: "",
      beds: "",
      price: "",
    });
  };

  handlePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  listSearch(searchList) {
    return (
      searchList
        .sort((a, b) => (a.price > b.price ? 1 : -1))
        .map((item) => {
          return <div></div>;
        }),
      searchList
        .filter(
          (auto) =>
            String(auto.bedrooms).includes(String(this.state.bedrooms)) &&
            String(auto.price).startsWith(String(this.state.price)) &&
            String(auto.beds).includes(String(this.state.beds)) &&
            String(auto.type).includes(String(this.state.type))
        )
        .map((item) => {
          return (
            <div className="container1">
              <SearchResult
                id={item._id}
                img={item.pictures}
                location={item.location}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            </div>
          );
        })
    );
  }

  render = () => {
    return (
      <div>
        <div>
          <h1 className="nearby1">Stay Nearby </h1>
          <div className="contain w-100 p-2">
            {/* <label className="label">bedrooms Number ==></label> */}
            <select
              className="search1 "
              value={this.state.bedrooms}
              onChange={this.handleClick}
            >
              <option value="" disabled>
                Select bedrooms Number
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {/* <label className="label">beds Number ==></label> */}
            <select
              className="search1"
              value={this.state.beds}
              onChange={this.handleClick1}
            >
              <option value="" disabled>
                Select Beds Number
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4 </option>
            </select>
            {/* <label className="label">Type ==></label> */}
            <select
              className="search1"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="room">room</option>
              <option value="house">house</option>
              <option value="Boutique">Boutique</option>
              <option value="Bed">Bed </option>
            </select>
            <input
              className="search1 search-price"
              type="text"
              onKeyUp={this.handlePrice}
              placeholder="Enter Price..."
            />
            <input
              className="reset btn btn-lg"
              onClick={this.handleReset}
              value="Reset"
            />
          </div>
          <Link to="/search-result"></Link>
        </div>
        <div className="pt-5">{this.listSearch(this.state.Search)}</div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  console.log(state.Search);
  return { Search: state.Search };
};
const mapactionstoprops = (dispatch) => {
  return bindActionCreators({ getSearch }, dispatch);
};

export default connect(mapStateToProps, mapactionstoprops)(SearchPage);
