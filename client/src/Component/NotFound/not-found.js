import { Route } from "react-router-dom";
import SentimentVeryDissatisfiedRoundedIcon from "@material-ui/icons/SentimentVeryDissatisfiedRounded";
const NotFound = () => {
  return (
    <div className="container-fluid text-center">
      <div className="px-5 py-5">
        <SentimentVeryDissatisfiedRoundedIcon style={{ fontSize: 100 }} />
        <h1 className="not-found ">404</h1>
        <span className="not-found-text text-secondary">
          Oops! page not found
        </span>
        <h4 className="not-found-text mt-4">
          The page you were looking for does not exist! you may have mistyped
          <br /> the address or the page may have moved
        </h4>
        <div className="text-center mt-4 mb-5">
          <Route
            render={({ history }) => (
              <button
                className="btn btn-success shadow px-3"
                onClick={() => {
                  history.push(`/`);
                }}
              >
                Return to main page
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
