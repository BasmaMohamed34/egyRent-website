import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

function SearchResult({ img, location, title, description, price }) {
  return (
    <div className="row">
      <div className="searchResult container">
        <div className="col-sm-12 col-md-4 img-fluid">
          <img src={img} alt="" className="" />
        </div>
        <div className="searchResult__info col-md-10 col col-sm-12">
          <div className="searchResult__infoTop text-dark col-md-10 col">
            <h6>{location}</h6>
            <h3>{title}</h3>
            <h6>____</h6>
            <h6>{description}</h6>
            <h4 className="d-inline mt-5">{price}</h4>
            <button className="btn Detailsbtn btn-primary float-right">
              <Link
                to="/searsh/resultDetailes"
                className="text-light detailBtn"
              >
                Show Detailes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
