const Comments = ({ comment }) => {
  if (comment) {
    return (
      <div className="col-md-6 col-12 ">
        <div className="col-md-6 col-12">
          <img
            className=" user-img pr-3"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="......"
          />
          <p className="font-weight-bold comment d-inline">username</p>
        </div>
        <div className="ml-5 pt-3">
          <p className="comment">{comment}</p>
        </div>
      </div>
    );
  }
};

export default Comments;
