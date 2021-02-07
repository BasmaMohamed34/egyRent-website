import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// DATE PICKER COMPONENT
function Search() {
    return (
        
          <div className="row align-self-center ml-auto mr-auto border  pb-0 search-body rounded m-5 shadow">
            <div className="card-body">            
            <div className="container">
                        <div className="row search-form justify-content-between ">
                            {/* <form className="form-row"> */}
                                <div className="col-md-4 col">
                                <h5>Location</h5>
                                    <input type="text" className="form-control w-100"  placeholder="Location"/>
                                </div>
                                <div className="col-md-4 col">
                                    <h5>No. of Guests</h5>
                                    <input type="number" className="form-control w-100 m-auto" placeholder="1"/>
                                </div>
                                <div className="col-md-4 search-btn">
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
