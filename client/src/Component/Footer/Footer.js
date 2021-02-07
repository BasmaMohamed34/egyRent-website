import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="row bgGray">
      <div className="container p-4 text-center">
        <div className="row">
          <div className=" col-md-4 mb-4 mb-md-0 col-sm-12 p-4">
            <a
              className="link3reb h3"
              href="#s"
              style={{ textDecoration: "none" }}
            >
              EGYRENT
            </a>
            <p> best travel agency </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 col-sm-12 bgGray">
            <h5>Link</h5>

            <ul className="list-unstyled mb-0 border-0 bgGray">
              <li>
                <a href="/home" className="text-dark aLink">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-dark aLink">
                  About As
                </a>
              </li>
              <li>
                <a href="#s" className="text-dark aLink">
                  Become A Host
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 col-sm-12 bgGray">
            <h5>Contacts</h5>

            <ul className="list-unstyled mb-0 border-0 bgGray">
              <li>+1 (300) 1234 6543</li>
              <li>
                <a href="#s!" className="text-dark  aLink">
                  Info@egyRent.com
                </a>
              </li>
              <li>North Warnner Park 336/A</li>
              <li>Newyork, UbgGray</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  <div className="text-center p-3 col-12 justify-content-center">
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
