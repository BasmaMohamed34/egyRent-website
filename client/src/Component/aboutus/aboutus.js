import React from "react";
import "./aboutus.css";
import gmail from "./gmail.png";
function AboutUs() {
  return (
    <section class="text-center about">
      <h1>About US</h1>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span class="fa fa-group mb-3"></span>
            <h2>OverView</h2>
            <p className="lead text-light">
              <h5> egyRent: An Overview</h5>
              <b>egyRent</b> is an online marketplace that connects people who
              want to rent out their homes with people who are looking for
              accommodations in that locale. It currently covers more than city
              in Egypt.
              <br />
              <br />
              {/* <b>For hosts</b>, participating in Egrent is a way to earn some income from their property, but with the risk that the guest might do damage to it. For guests, the advantage can be relatively inexpensive accommodations, but with the risk that the property won’t be as appealing as the listing made it seem. */}
            </p>
          </div>
          {/* section 2 */}
          <div
            class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span class="fa fa-file mb-3"></span>
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
              {/* <h5>Protections for Guests & Hosts:</h5>
                As a protection for guests, <b>Egrent</b> holds the guest’s payment for 24 hours after check-in before releasing the funds to the host. */}
            </p>
          </div>
          {/* end section 2 */}

          <div class="col-lg-4 col-sm-6 col-ex-12 ">
            <span class="fa fa-info mb-3"></span>
            <h2>Contact Us</h2>
            <div>
              <div>
                <ul className="type">
                  <h4 class="left">Need Help?</h4>

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
