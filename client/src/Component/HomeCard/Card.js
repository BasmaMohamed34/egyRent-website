import { connect } from "react-redux";
import React from "react";
import "./Card.css";

export function Card({ src, title, description, price }) {
  return (
    <div className="col col-md-4 col-lg-3">
      <div className="card border-0">
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{title}</h2>
          <p>{description}</p>
          <h5>{price}</h5>
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
            <p>{post.description}</p>
            <h5>{post.price}$ / Night</h5>
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
