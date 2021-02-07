import React from "react"
import './aboutus.css'
function AboutUs (){
    return (
        <section class="text-center about">
        <h1>About US</h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
              <span class="fa fa-group"></span>
              <h2>Welcome</h2>
              <p className="lead text-light">Hi Smiles Davis,

Congratulations on starting your Relaxing Private 2BR Apartment - walk to downtown. With just a few more steps, you’ll be ready to receive your first booking requests. And we’ll help you every step of the way.</p>
            </div>
            <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span class="fa fa-info"></span>
              <h2>History</h2>
              <p className="lead text-light">Our History is new millennium structures and features. Rooms, restaurants, and other facilities are introduced with some new flavor. Our motto is “Good food for a good mood”. We all believe that food is an important part of one’s life, but great food is essential.</p>
            </div>
            <div class="clearfix visible-md-block visible-sm-block"></div>
            <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span class="fa fa-file"></span>
              <h2>Our Services</h2>
              <p className="lead text-light">It's our services that make us special and unique. We believe in delivering the best to our clients. Experience our services to make the best from what we offer!

</p>
            </div>
            
          </div>
          
        </div>
      </section>
        
    );
}
export default AboutUs