// import React from 'react'
import './createpost.css'


import React, { Component } from 'react';

class CreatePost extends Component {

  componentWillMount () {
    const script = document.createElement("script");

    // script.src = "";
    script.async = true;

    document.body.appendChild(script);
  }
  render(){
      return (
        <div id="container">
        <div className="row m-3">
        <div className="col-lg-6  col-md-12 mt-1" style = {{backgroundColor:"#FFF"}} >
            <form action="index.html" method="post">
            <h1>Create post</h1>
            <fieldset>
            <legend><span class="number">1</span> Details</legend>
            <div className="form-group has-error">
    		        <label for="Address">Address <span className="require">*</span></label>
    		        <input type="text" className="form-control" name="Address" />
    		    </div>
                <div className="form-group has-error">
    		        <label for="Location">Location <span className="require">*</span></label>
    		        <input type="text" className="form-control" name="Location" />
    		    </div>
                <div className="form-group has-error">
                <label for="job">Type Of Rent</label>
  <select id="job" name="user_job">

            <optgroup label="Apartment">
                <option value="Apartment">Apartment</option>
            </optgroup>
            <optgroup label="Bed and Breakfast">
                 <option value="Bed and Breakfast">
                        Bed and Breakfast
                 </option>
            </optgroup>
            <optgroup label="Boutique">
                <option value="Boutique">
                Boutique
                </option> 
            </optgroup>
            <optgroup label="House">
                <option value="House">House</option>        
                    </optgroup>
            </select>
    		    </div>
                <fieldset>
                <label for="quantity">Number of Guests<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="15"/>
            </fieldset>
                <fieldset>
                <label for="quantity">Number of Room<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="15"/>
            </fieldset>
            <fieldset>
                <label for="quantity">Number of Bath<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="15"/>
            </fieldset>
            <fieldset>
                <label for="quantity">Number of Beds<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="15"/>
            </fieldset>
            
            <fieldset>
                <label for="quantity">Number of BedRooms<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="15"/>
            </fieldset>
            <fieldset>
                <label for="quantity">Price<span className="require">*</span></label>
                <input type="number" id="quantity" name="quantity" min="1"/>
            </fieldset>
            </fieldset>
            <fieldset>
                <legend><span class="number">2</span> Your Post</legend>
                <div className="form-group has-error">
    		        <label for="Title">Title <span className="require">*</span></label>
    		        <input type="text" className="form-control" name="Title" />
    		    </div>
                <label for="Description">Description<span className="require">*</span></label>
                <textarea id="Description" name="user_bio" row = "5"></textarea>
            </fieldset>
            <fieldset>
            <br/>
            <div class="file-input mb-5">
                <input type="file" id="file" class="file"/>
                <label for="file">
                     file one
                </label>
                <input type="file" id="file" class="file"/>
                <label for="file">
                     file Two
                </label>
                <input type="file" id="file" class="file"/>
                <label for="file">
                     file Three
                </label>
            </div>
            </fieldset>
            <fieldset>
                <legend><span class="number">3</span> Write Comment</legend>
                <label for="Comment">Comment:</label>
                <textarea id="Comment" name="user_bio" row = "5"></textarea>
            </fieldset>
            <label>Interests</label><br/>
            <input type="checkbox" id="development" value="interest_development" name="user_interest"/><label class="light" for="development">WiFi</label><br/>
            <input type="checkbox" id="design" value="interest_design" name="user_interest"/><label class="light" for="design">kitchen</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">Heating</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">TV</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">Elevator</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">Breakfast</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">AC</label><br/>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">smokeAlarm</label><br/><br/>
            <button type="Creat " className="btn rounded btn-info">Create an advertisement</button>
        </form>
        </div>
        
        <div className="col-lg-6 mt-5 p-5 col-md-12" style = {{backgroundColor:"#FFF"}}>
            <div className="text-dark text-center offset-2 p-5 text-light bg-secondary h-25">
                <h2>
                Welcome in Egrent<br/><br/>
                Earn up to a  month hosting in Cairo

                </h2><br/>
                <p>
                No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host travelers. You’re in full control of your availability, prices, house rules, and how you interact with guests.


                </p>
            </div>
        </div>
    </div>
</div>  
      );
  }
}
  export default CreatePost

