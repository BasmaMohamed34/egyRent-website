import './App.css';
import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Posts from "./Profile/Posts"
import History from "./Profile/History"


function App() {
  return (
    <Router>
      <div>
          <ul>
          <button className="btn">
              <Link to = "/">Home</Link>
            </button>
            <button className="btn">
              <Link to = "/posts">posts</Link>
            </button>
            <button className="btn">
              <Link to = "/history">history</Link>
            </button>
          </ul>

       <Switch>
          <Route path="/posts" > <Posts/> </Route>
          <Route path="/history" > <History/> </Route>
      </Switch>
    </div>
    </Router>
    
   

  );
}

export default App;
