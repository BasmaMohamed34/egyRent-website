import React from 'react';
import './App.css';
import Home from './Component/Home/Home'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import SignIn  from "./Component/form/signin";
import Signup from "./Component/form/signup"
import SearchPage from './Container/SearchPage/SearchPage'
import Post from './Container/Post/post'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path="/search" component={SearchPage}/>
                <Route exact path="/signin" component = {SignIn}/> 
                <Route exact path="/signup" component = {Signup} />
                <Route path="/post" component={Post}/> 
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}
export default App;