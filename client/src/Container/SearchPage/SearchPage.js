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
      bedrooms : "",
      beds : ""
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
      bedrooms: e.target.value
    });
  }

  handleClick1 =(e)=> {
    this.setState({
      beds: e.target.value
    });
  }


  listSearch (searchList){
   return (
    searchList.sort((a, b) => a.price > b.price ? 1 : -1).filter( (auto) =>  String(auto.price).includes(String(this.state.price))).map((item) =>{
      return(
        <div>
         </div>
      )
    }
   ) ,
   searchList.filter( (auto) =>  String(auto.bedrooms).includes(String(this.state.bedrooms)) 
   && String(auto.beds).includes(String(this.state.beds))).map((item) =>{
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
 )   
  )
  }

  render = () => {
    return (
      <div>
         <div>
         <h1 className="nearby1">Stays Nearby </h1>
         <form >
        <input  className="search1" type="number" onKeyUp={this.handleClick} placeholder="Search By Bedrooms... "/>
        <input  className="search1" type="number" onKeyUp={this.handleClick1} placeholder="Search By Beds..."/>
        <Link to="/search-result"></Link>
         </form>
       
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
