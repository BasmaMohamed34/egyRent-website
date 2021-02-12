import React from "react";
import "./SearchResult.css";
import { Route } from "react-router-dom";

function SearchResult({ id, img, location, title, description, price }) {
  return (
    <div className="row">
      <div className="searchResult container">
        <div className="col-sm-12 col-md-4 w-50 imgDIV">
          <img
            src={"http://localhost:5000/uploads/" + img[0]}
            alt=""
            className="imgSearchResult"
          />
        </div>
        <div className="searchResult__info col-md-10 col col-sm-12">
          <div className="searchResult__infoTop text-dark col-md-10 col">
            <h6>{location}</h6>
            <h3>{title}</h3>
            <h6>____</h6>
            <h6>{description}</h6>
            <h4 className="d-inline mt-5">{price}$ / Night</h4>
            <Route
              render={({ history }) => (
                <button
                  className="btn Detailsbtn btn-primary float-right"
                  onClick={() => {
                    history.push(`/post/${id}`);
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
  );
}

export default SearchResult;
