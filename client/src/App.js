import React from "react";
import "./App.css";
import Home from "./Container/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import CreatePost from "./Component/createpost/createpost"
import SignIn from "./Container/form/signin";
import Signup from "./Container/form/signup";
import Profile from "./Container/Profile/Profile";
import SearchPage from "./Container/SearchPage/SearchPage";
import Post from "./Container/Post/post"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promiseMW from 'redux-promise'
import reducers from './reducers'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)

function App() {
  return (
    
    <Provider store={createStoreWithMW(reducers)}>
      <Router>
        <Header />
        <Switch>
          <Route path="/search-result">
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
          <Route exact path="/createpost" component={CreatePost} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/profile-posts">
            <Profile />
          </Route>
          <Route path="/post/:id" component={Post}/>
        </Switch>
        <Footer />
      </Router>
      </Provider>
  );
}
export default App;
