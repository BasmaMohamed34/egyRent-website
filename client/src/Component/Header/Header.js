import React from 'react'
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
function Header() {
        return (
            <nav className="navbar header bg-dark navbar-expand-lg">
         <div className="container-fluid "> 
             <a className="navbar-brand" href="#" target="_blank">
             <Link to='/'>
                    <img
                        className="header__icon rounded-circle d-block mb-3 w-50 "
                        src="./ourLogo.png"
                        alt=""
                    />
                </Link>
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" navbar-nav ml-auto pl-3 bg-dark borderNav">
             <li className="nav-item active">
                 <a className="nav-link" href="#">
                 <b className = "pr-2" style={{color:"#aaa"}}>Home</b>
                   <span className="sr-only">(current)</span>
                 </a>
             </li>
             <li className="nav-item">
                 <a className="nav-link" href="#" target="_blank">
                   <b style={{color:"#aaa"}}>About US</b>
                 </a>
             </li>
             <li className="nav-item">
                 <a className="nav-link" href="#" target="_blank">
                   <b className = "pr-3" style={{color:"#aaa"}}>Become A Host</b>
                 </a>
             </li>
             <li className="nav-item bg mr-3 mb-3">
             <Link 
                    to="/signup"
                    activeClassName="btn"
                    className="btn btn-pink"
                    exact
                    style={{backgroundColor:"#007bff",padding:"7px", borderRadius: "5px",color:"#fff"}}
                    ><b>sign Up</b>
                           </Link>
              </li>
              <li className="nav-item bg md-mt-3 mb-3">
              <NavLink 
                    to="/signin"
                    activeClassName="btn"
                    className="btn btn-pink"
                    exact
                    style={{backgroundColor:"#007bff",padding:"7px", borderRadius: "5px",color:"#fff"}}
                    ><b>sign In</b>
                           </NavLink>
              </li>
          <li className="smooth-menu nav-item" data-toggle="tooltip" title="Languages" >
          <a href="#">
          <LanguageIcon className='ml-3 mt-2'style={{color:"white"}} />
             </a>
          </li>
          </ul>
          </div>
            {/* </nav> */}
            </div>
            </nav>
          )
}
export default Header