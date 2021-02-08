import React from "react";
import { Component } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSearch} from "../../actions/Search"
import SearchResult from './SearshResult/SearchResult'
class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      Search: []
    };
  }
  async componentDidMount() {
    let x = await this.props.getSearch();
    console.log("sdddd",x.payload);
    this.setState({
      Search: x.payload,
    });
  }


  listSearch (searchList){
   return (
    searchList.map((item) =>{
      return(
        <div className="container1">
          <SearchResult
              img={item.pictures}
              location={item.location}
              title={item.title}
              description={item.description}
              price={item.price}
      />
         </div>
      )
    }

   ) )
  }


  render = () => {
    return (
      <div>
         <div>
         <h1 className="nearby1">Stays Nearby </h1>
         <div className="nearby">
        <Button className=" border-bottom rounded">Type of place</Button>
        <Button className=" border-bottom rounded">Price</Button>
        <Button className=" border-bottom rounded">Rooms and beds</Button>
        <Button className=" border-bottom rounded">More filters</Button>
         </div>
       
      </div>
      <div >
        {this.listSearch(this.state.Search)}
      </div>


      </div>
     
    )
    }}

    
      const mapStateToProps = (state) => {
      console.log(state.Search);
      return { Search: state.Search  };
      };
      const mapactionstoprops = (dispatch) => {
      return bindActionCreators({ getSearch }, dispatch);
      };

      export default  connect(mapStateToProps, mapactionstoprops)(SearchPage) ;
