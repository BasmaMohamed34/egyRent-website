import { connect } from "react-redux";
import React from "react";
import "./Card.css";

export function Card({ src, title}) {
  return (
    <div className="col col-md-4 col-lg-3">
      <div className="card">
        <img src={src} alt=""/>
        <div className="card__info">
          <h2 className="text-center text-uppercase">{title}</h2>
        </div>
      </div>
    </div>
  );
}

const Ecard = ({ posts }) => {
  console.log(posts);
  if (posts) {
    return posts.slice(0, 6).map((post) => (
      <div className="col col-md-4">
        <div className="card Ecard border-0">
          <img src={post.pictures[0]} alt="" />
          <div className="card__info">
            <h2>{post.title}</h2>
            <h2>{post.location}</h2>
            <h5 className="text-right">{post.price}$ / Night</h5>
          </div>
        </div>
      </div>
    ));
  }
};
const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};
export default connect(mapStateToProps, null)(Ecard, Card);
