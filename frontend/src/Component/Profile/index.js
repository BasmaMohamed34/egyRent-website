import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Badge from './Profile/badge'
import Header from './Profile/Header'
import reportWebVitals from './reportWebVitals';
import Aside from './Profile/Aside';

ReactDOM.render(
  <React.StrictMode>

       <Header/> 
      <Aside/>
      <Badge/>
      <App/> 
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
