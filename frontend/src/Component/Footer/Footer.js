import React from 'react';
import './Footer.css'

function Footer() {
    return ( 
        <footer className="text-center border">
        <div className="container p-4">
          <div className="row">
          <div className=" col-md-4 mb-4 mb-md-0 col-sm-12">
            <br/><br/>
              <a style = {{textDecoration: "none"}} href="#"><h4>Tour <span>Nest</span></h4></a>
              <p> best travel agency </p>
            </div>
           <div className=" col-md-4 mb-4 mb-md-0 col-sm-12">
              <h5>Link</h5>
                  <br/>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#"style = {{textDecoration: "none"}} className="text-dark">Home</a>
                </li>
                <li>
                  <a href="#"style = {{textDecoration: "none"}} className="text-dark">About As</a>
                </li>
                <li>
                  <a href="#"style = {{textDecoration: "none"}} className="text-dark">Become  A Host</a>
                </li>
              </ul>
            </div>
            <div clasName="col-md-4 mb-4 mb-md-0 col-sm-12">
              <h5>Contacts</h5>
                  <br/>
              <ul className="list-unstyled mb-0">
                <li>
                      +1 (300) 1234 6543
                </li>
                <li>
                  <a href="#!"style = {{textDecoration: "none"}} className="text-dark">
                      Info@Tnest.com
                  </a>
                </li>
                <li>
                North Warnner Park<br/> 336/A
                </li>
                <li>
                   Newyork, USA
              </li>
              </ul>
            </div>
        
          </div>
        </div>
        <div class="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
        </footer>
            )
    

}

export default Footer
