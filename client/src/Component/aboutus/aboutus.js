import React from "react";
import "./aboutus.css";
import gmail from "./gmail.png";
function AboutUs() {
  return (
    <section className="text-center about">
      <h1>About US</h1>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span className="fa fa-group mb-3"></span>
            <h2>OverView</h2>
            <p className="lead text-light">
              <h5> egyRent: An Overview</h5>
              <b>egyRent</b> is an online marketplace that connects people who
              want to rent out their homes with people who are looking for
              accommodations in that locale. It currently covers more than city
              in Egypt.
              <br />
              <br />
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span className="fa fa-file mb-3"></span>
            <h2>Our Services</h2>
            <p className="lead text-light">
              <h5>Wide Selection:</h5>
              <b>egyRent</b> hosts list many different kinds of properties
              single rooms, a suite of rooms, apartments, moored yachts,
              houseboats, entire houses
              <br />
              <br />
              <h5>Hosts Can Set Their Own Price:</h5>
              It’s up to each host to decide how much to charge per night, per
              week, or per month
              <br />
              <br />
            </p>
          </div>

          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200">
            <span className="fa fa-info mb-3"></span>
            <h2>Contact Us</h2>
            <div>
              <div>
                <ul className="type">
                  <h4 className="left">Need Help?</h4>

                  <li>
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={gmail}
                      alt=""
                    />
                    <p className="text-light d-inline ml-1">
                      <b>egyRent@gmail.com</b>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
