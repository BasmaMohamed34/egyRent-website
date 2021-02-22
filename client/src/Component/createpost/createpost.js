import './createpost.css'


import React, { Component } from 'react';

class CreatePost extends Component {

  componentWillMount () {
    const script = document.createElement("script");

    script.async = true;

    document.body.appendChild(script);
  }
  render(){
      return (
        <div class="container py-5 ">
        <div class="row">
                <form className='p-5 col-12'>
                     <h1>Create post</h1>
                      <div class="form-group row">
                            <div class="col-sm-6">
                               <label for="Address">Address <span className="require">*</span></label>
                               <input type="text" className="form-control" name="Address" />
    
                            </div>
                            <div class="col-sm-6">
                               <label for="Location">Location <span className="require">*</span></label>
                               <input type="text" className="form-control" name="Location" />
                            </div>
                      </div>
                      <div class="form-group row">
                            <div class="col-sm-12">
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
                      </div>
                      <div class="form-group row">
                            <div class="col-sm-6">
                               <label for="quantity">Number of Guests<span className="require">*</span></label>
                               <input type="number" id="quantity" name="quantity" min="1" max="15"/>
    
                            </div>
                            <div class="col-sm-6">
                               <label for="quantity">Number of Room<span className="require">*</span></label>
                               <input type="number" id="quantity" name="quantity" min="1" max="15"/>
                            </div>
                      </div>
                      <div class="form-group row">
                            <div class="col-sm-6">
                               <label for="quantity">Number of Bath<span className="require">*</span></label>
                              <input type="number" id="quantity" name="quantity" min="1" max="15"/>
                            </div>
                            <div class="col-sm-6">
                               <label for="quantity">Number of Beds<span className="require">*</span></label>
                               <input type="number" id="quantity" name="quantity" min="1" max="15"/>
                            </div>
                      </div>
    
                      <div class="form-group row">
                            <div class="col-sm-6">
                               <label for="quantity">Number of BedRooms<span className="require">*</span></label>
                               <input type="number" id="quantity" name="quantity" min="1" max="15"/>
                            </div>
                            <div class="col-sm-6">
                               <label for="quantity">Price<span className="require">*</span></label>
                               <input type="number" id="quantity" name="quantity" min="1"/>
                            </div>
                      </div>
                      <div class="form-group row">
                         <div className='col-sm-12'>
                            <label for="Description">Description<span className="require">*</span></label>
                          <textarea id="Description" name="user_bio" row = "5"></textarea>
                         </div>
                      </div>
                      <div className='form-group row'>
                         <div className='col-sm-12'>
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
                          <label for="Comment">Comment<span className="require">*</span></label>
                          <textarea id="Comment" name="user_bio" row = "5"></textarea>
                      </div>
                   </div>
                   <div className='form-group row'>
                      <div className='col-sm-12'>
                          <label>Interests</label><br/>
                          <div class="checkboxes">
                            <label for="x"><input type="checkbox" id="x" /> <span className='text-dark'>WiFi</span></label>
                            <label for="y"><input type="checkbox" id="y" /> <span  className='text-dark'>kitchen</span></label>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>Heating</span></label>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>TV</span></label><br/>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>Elevator</span></label>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>Breakfast</span></label>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>AC</span></label>
                            <label for="z"><input type="checkbox" id="z" /> <span  className='text-dark'>smokeAlarm</span></label>
                         </div>
                      </div>
                   </div>
                      <button type="Creat " className="btn rounded btn-info ">Create an advertisement</button>
                </form>
          </div>
       </div>      );
  }
}
  export default CreatePost

