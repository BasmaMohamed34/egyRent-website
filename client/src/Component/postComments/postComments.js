const Comments = ({ comment }) => {
  if (comment) {
    return (
      <div className="col-md-6 col-12 mt-3">
        <div className="col-md-6 col-12">
          <img
            className=" user-img pr-3 mt-2"
            src={"http://localhost:5000/uploads/" + comment.commentedBy.photo}
            alt="UserPicture"
          />
          <p className="font-weight-bold comment d-inline">{comment.commentedBy.firstname} {comment.commentedBy.lastname}</p>
        </div>
        <div className="ml-5 pt-1 pl-3">
          <p className="comment pl-4">{comment.comment}</p>
        </div>
      </div>
    );
  }
};

export default Comments;
