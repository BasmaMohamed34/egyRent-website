import { connect } from "react-redux";
import React from "react";
import { Route } from "react-router-dom";
import "./Card.css";

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
                src={"https://fathomless-stream-04225.herokuapp.com/uploads/" + post.pictures[0]}
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
  return { posts: state.posts };
};

export default connect(mapStateToProps, null)(Ecard);
