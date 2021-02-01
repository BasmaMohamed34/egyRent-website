import React from 'react';
import './App.css';
import Home from './Component/Home/Home'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import SearchPage from './Container/SearchPage/SearchPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          < Header/>
          <Switch>
                <Route path="/search"> <SearchPage/> </Route>
                <Route path ="/"> <Home/> </Route>
          </Switch>
          <Footer/>
      </Router>


     </div>
  );
}

export default App;
