import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import SignIn from "./Component/form/signin";
import Signup from "./Component/form/signup";
import Profile from "./Component/Profile/Profile";
import SearchPage from "./Container/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            {" "}
            <SearchPage />{" "}
          </Route>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/profile-posts">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
