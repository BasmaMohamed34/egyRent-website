import { connect } from "react-redux";
import React from "react";
import { Route } from "react-router-dom";
import "./Card.css";

/* export function Card({ src, title }) {
  return (
    <Route
      render={({ history }) => (
        <div
          className="col col-md-4 col-lg-3 "
          onClick={() => {
            history.push(`/search-result/location=${title}`);
          }}
        >
          <div className="card">
            <img src={src} alt="" className="divIMG" />
            <div className="card__info">
              <h2 className="text-center text-uppercase">{title}</h2>
            </div>
          </div>
        </div>
      )}
    />
  );
} */
const Ecard = ({ posts }) => {
 
  if (posts) {
    return posts.slice(0, 6).map((post) => (
      <Route
        render={({ history }) => (
          <div
            className="col col-md-4"
            onClick={() => {
              history.push(`/post/${post._id}`);
            }}
          >
            <div className="card Ecard border-0">
              <img
                src={"http://localhost:5000/uploads/" + post.pictures[0]}
                alt=""
                className="imgDivEcard"
              />
              <div className="card__info">
                <h2>{post.title}</h2>
                <h2>{post.location}</h2>
                <h5 className="text-right">{post.price}$ / Night</h5>
              </div>
            </div>
          </div>
        )}
      />
    ));
  }
};
const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, null)(Ecard);
