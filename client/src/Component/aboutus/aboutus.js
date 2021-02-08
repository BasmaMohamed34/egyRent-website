import React from "react"
import './aboutus.css'
function AboutUs (){
    return (
      <section class="text-center about">
      <h1>About US</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
          <span class="fa fa-group mb-3"></span>
            <h2>OverView</h2>
            <p className="lead text-light">
           <h5> Egrent: An Overview</h5>
Egrent is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale. It currently covers more than city in Egypt. 
           <br/><br/>
           <b>For hosts</b>, participating in Egrent is a way to earn some income from their property, but with the risk that the guest might do damage to it. For guests, the advantage can be relatively inexpensive accommodations, but with the risk that the property won’t be as appealing as the listing made it seem.
            </p>
          </div>
          {/* section 2 */}
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-file mb-3"></span>
            <h2>Our Services</h2>
            <p className="lead text-light">
              <h5>Wide Selection:</h5>
              Egrent hosts list many different kinds of properties single rooms, a suite of rooms, apartments, moored yachts, houseboats, entire houses<br/><br/>
              <h5>Hosts Can Set Their Own Price:</h5>
              It’s up to each host to decide how much to charge per night, per week, or per month<br/><br/>
              <h5>Protections for Guests & Hosts:</h5>
              As a protection for guests, Airbnb holds the guest’s payment for 24 hours after check-in before releasing the funds to the host.
          </p>
          </div>
          {/* end section 2 */}


          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-info mb-3"></span>
            <h2>Contact Us</h2>
            <div id="utility-links">
              <div class="help">
                  <ul className = "type">
                      <h4 class="left">Need Help?</h4>
                      <li className='mt-3'>
                          <a href="#" className='text-light'>Check Order Status</a>
                      </li>
                      <li>
                          <a href="#" className='text-light'>Return Policy</a>
                      </li>
                      <li className='mt-3'>
                          <img className="help-img-icon" style = {{width:"25px",height:"20px"}}  src="https://www.flaticon.com/svg/vstatic/svg/1370/1370958.svg?token=exp=1612792166~hmac=e64a001390614ec21f5ee459d3651b56"/>
                          <a href="#" className='text-light ml-3'>Live Chat</a>
                      </li>
                      <li>
                          <img className="help-img-icon" style = {{width:"16px",height:"16px"}} 
                          // src="https://www.flaticon.com/premium-icon/phone-call_3059954?term=phone&related_id=3059954"/>
                           src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462243/phone_zfj4ey.svg"/>
                          <a href="#" className='text-light  ml-1'>1-888-922-2336</a>
                      </li>
                      <li>
                          <img className="help-img-icon" style = {{width:"16px",height:"16px"}} src="https://www.flaticon.com/svg/vstatic/svg/732/732200.svg?token=exp=1612791287~hmac=06de9ff3c1aaecb42c3129a62d765dc2"/>
                          <a href="#" className='text-light  ml-1'>
                              youremail.com
                          </a>
                      </li>
                      <li>
                          <img className="help-img-icon" style = {{width:"30px",height:"30px"}} src="https://www.flaticon.com/premium-icon/icons/svg/3128/3128304.svg"/>
                          <a href="#" className='text-light  ml-1'>facebook.com</a>
                      </li>
                      <li>
                          <img className="help-img-icon" style = {{width:"20px",height:"20px"}} src="https://www.flaticon.com/premium-icon/icons/svg/3670/3670211.svg"/>
                          <a href="#" className='text-light  ml-1'>twitter..com</a>
                      </li>
                      <li>
                          <img className="help-img-icon" style = {{width:"20px",height:"20px"}} src="https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1612792010~hmac=a243479851007c431b47e037fe502342"/>
                          <a href="#" className='text-light  ml-1'>instgram.com</a>
                      </li>
                  </ul>
              </div>
          </div> 
      </div>
          {/* <div class="clearfix visible-md-block visible-sm-block"></div> */}
        </div>
      </div>
    </section>
      
    );
}
export default AboutUs