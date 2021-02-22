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
      // <div className="col-12 col-md-6 ">
      //     <img src={picture} alt="..." className="w-25"/>
      //     {/* {picture} */}
      // </div>
    );
  }
};

export default PostPictures;
