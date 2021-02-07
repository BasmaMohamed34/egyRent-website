import React from "react";
import { Component } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearshResult/SearchResult";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import Ecard from "../../Component/HomeCard/Card";





class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }
  async componentDidMount() {
    console.log('worksjjjj')
    await this.props.getPosts();
    this.setState({
      posts: this.props.posts,
    });

    console.log("serch:", this.state.posts);
  }
  render = () => {
    return (
      <div>
         <div>
         <h1>Stays Nearby </h1>
        <Button className=" border-bottom rounded">Type of place</Button>
        <Button className=" border-bottom rounded">Price</Button>
        <Button className=" border-bottom rounded">Rooms and beds</Button>
        <Button className=" border-bottom rounded">More filters</Button>
      </div>

      <div className="row d-flex ml-5 justify-content-center">
          <Ecard {...this.props} />
        </div>

      
      </div>
     
    )
    }}

      const mapStateToProps = (state) => {
      console.log(state.posts);
      return { posts: state.posts };
      };
      const mapactionstoprops = (dispatch) => {
      return bindActionCreators({ getPosts }, dispatch);
      };

      export default  connect(mapStateToProps, mapactionstoprops)(SearchPage) ;
