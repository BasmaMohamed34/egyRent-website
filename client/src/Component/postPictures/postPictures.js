import "./postPictures.css";
const PostPictures = ({ picture }) => {
  if (picture) {
    return (
      <div>
        <img
          src={"https://fathomless-stream-04225.herokuapp.com/uploads/" + picture}
          alt=""
          className="picsDiv"
        />
      </div>
    );
  }
};

export default PostPictures;
