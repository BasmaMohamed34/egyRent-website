import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// DATE PICKER COMPONENT
function Search() {
    return (
        
          <div className="row align-self-center ml-auto mr-auto border rounded p-3 w-75 m-5 shadow">
            <div className="card-body">            
            <div className="container">
                        <div className="row search-form justify-content-between ">
                            {/* <form className="form-row"> */}
                                <div className="col-md-3 col">
                                <h5>Location</h5>
                                    <input type="text" className="form-control rounded w-100" id="inlineFormInputGroup" placeholder="Location"/>
                                </div>
                                <div className="col-md-3 col ">
                                <h5>Check In</h5>
                                    <input className="form-control" type="date" />
                                </div>
                                <div className="col-md-3 col">
                                <h5>Check Out</h5>
                                    <input className="form-control" type="date"/>
                                </div>
                                <div className="col-md-3 search-btn">
                                    <button type="submit" className="form-control btn btn-block btn-primary">Search</button>
                                </div>
                            {/* </form> */}
                        </div>
            </div>

            </div>
            </div>     
    )
}
export default Search
