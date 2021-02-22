import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="row bgGray">
      <div className="container p-4 text-center">
        <div className="row">
          <div className=" col-md-4 mb-4 mb-md-0 col-sm-12 p-4">
            <Link
              className="link3reb h3"
              to={`/`}
              onClick={() => {
                let maxY = window.scrollMaxY;
                window.scrollTo(0, -maxY);
              }}
              style={{ textDecoration: "none" }}
            >
              EGYRENT
            </Link>
            <p> best travel agency </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 col-sm-12 bgGray">
            <h5>Link</h5>

            <ul className="list-unstyled col-12 mb-0 border-0 bgGray">
              <li>
                <Link
                  to="/"
                  className="nav-link text-dark col-12"
                  style={{ textDecoration: "none" }}
                  exact
                  onClick={() => {
                    let maxY = window.scrollMaxY;
                    window.scrollTo(0, -maxY);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link text-dark col-12"
                  style={{ textDecoration: "none" }}
                  exact
                  onClick={() => {
                    let maxY = window.scrollMaxY;
                    window.scrollTo(0, -maxY);
                  }}
                >
                  About Us
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 col-sm-12 bgGray">
            <h5>Contacts</h5>

            <ul className="list-unstyled mb-0 border-0 bgGray">
              <li>
                <a
                  href="#!"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  egyRent@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
