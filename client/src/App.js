import React from "react";
import "./App.css";
import Home from "./Container/Home/Home";
import Header from "./Component/Header/Header"
import Notify from "./Component/notify"
import Footer from "./Component/Footer/Footer";
import DateTime from "./Component/dateTime/DateTime";
import AboutUs from "./Component/aboutus/aboutus";
import CreatePost from "./Container/Create-Post/CreatePost";
import SearchByLocation from "./Container/searchByLocation/searchByLocation";
import LocationOnly from "./Container/LocationOnly/LocationOnly";
import SignIn from "./Container/form/signin";
import Signup from "./Container/form/signup";
import Profile from "./Container/Profile/Profile";
import NotFound from "./Component/NotFound/not-found";
import SearchPage from "./Container/SearchPage/SearchPage";
import Post from "./Container/Post/post";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promiseMW from "redux-promise";
import reducers from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const createStoreWithMW = applyMiddleware(promiseMW)(createStore);

function App() {
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/search-result/:location/:guests"
            component={SearchByLocation}
          />
          <Route
            exact
            path="/search-result/:location"
            component={LocationOnly}
          />
          <Route exact path="/search-result">
            {" "}
            <SearchPage />{" "}
          </Route>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/notify" component = {Notify}/> 
          <Route exact path="/:id/createpost" component={CreatePost} />

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/profile-posts">
            <Profile />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
        <DateTime/>
      </Router>
    </Provider>
  );
}
export default App;
