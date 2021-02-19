import "./postComments.css"
const Comments = ({ comment }) => {
  if (comment) {
    return (
      <div className="col-md-6 col-12 mt-3">
        <div className="col-md-6 col-12 d-inline pt-4">
          <img
            className="img-user rounded-circle"
            src={"http://localhost:5000/uploads/" + comment.commentedBy.photo}
            alt="UserPicture"
          />
        </div>
          <p className="font-weight-bold  comment d-inline">{comment.commentedBy.firstname} {comment.commentedBy.lastname}</p>
        <div className="ml-5 pl-5">
          <p className="comment d-inline pl-5">{comment.comment}</p>
        </div>
      </div>
    );
  }
};

export default Comments;
