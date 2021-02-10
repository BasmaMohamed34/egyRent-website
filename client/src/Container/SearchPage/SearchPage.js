import React from "react";
import { Component } from "react";
import "./SearchPage.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSearch} from "../../actions/Search"
import SearchResult from './SearshResult/SearchResult'
import { Link } from "react-router-dom";


class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      Search: [],
      location : ""
    };
  }
  async componentDidMount() {
    let x = await this.props.getSearch();
    console.log("sdddd",x.payload);
    this.setState({
      Search: x.payload,
      
    });
  }

  handleClick =(e)=> {
    this.setState({
      // location: e.target.value.charAt(0).toUpperCase()
      location: e.target.value


    });
  }

  
  listSearch (searchList){
   return (
    searchList.filter( (auto) =>  auto.location.includes(this.state.location) ).map((item) =>{
      return(
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
      )
    }

   ) )
  }


  render = () => {
    return (
      <div>
         <div>
         <h1 className="nearby1">Stays Nearby </h1>
         <div >
        <input  className="search" type="text" onKeyUp={this.handleClick} placeholder="Search By Location...(For Example : Cairo, Alexandria)"/>
        <Link to="/search-result"></Link>
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
