import React from 'react'; 
import SideBar from '../../components/Sidebar'; 
import Header from '../../components/Header';

// <<<<<<<< HEAD:src/Home/Pages/AddNewLaboratories.js

export const AddLabTest = () => { 

  return (

    <div className='layout-wrapper layout-content-navbar '>  
    
     <div className='layout-container'> 
         <SideBar /> 

        <div className="layout-page">   
          <Header /> 

       <div className='content-wrapper'> 
           
        <div class="container-xxl flex-grow-1 container-p-y">

          <div className='content-wrapper '> 
       
            <div class="container-xxl flex-grow-1 container-p-y top-space">
              <div class="card mb-4"> 

                <h5 class="card-header">Add New Lab test</h5> 

                <form class="card-body">
                  <h6 class="fw-normal">1. LAB INFO</h6>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-username">Name Of Lab Test</label>
                      <input type="text" id="multicol-username" class="form-control" placeholder="john.doe" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-email">Test ID</label>
                      <div class="input-group input-group-merge">
                        <input
                          type="text"
                          id="multicol-email"
                          class="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="multicol-email2"
                        />
                        <span class="input-group-text" id="multicol-email2">@example.com</span>
                      </div>
                    </div>
                    {/* <div class="col-md-6">
                      <div class="form-password-toggle">
                        <label class="form-label" for="multicol-password">Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="multicol-password"
                            class="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="multicol-password2"
                          />
                          <span class="input-group-text cursor-pointer" id="multicol-password2"
                            ><i class="bx bx-hide"></i
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-password-toggle">
                        <label class="form-label" for="multicol-confirm-password">Confirm Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="multicol-confirm-password"
                            class="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="multicol-confirm-password2"
                          />
                          <span class="input-group-text cursor-pointer" id="multicol-confirm-password2"
                            ><i class="bx bx-hide"></i
                          ></span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <hr class="my-4 mx-n4" />
                  <h6 class="fw-normal">2. Personal Info</h6>
                  <div class="row g-3">
                    {/* <div class="col-md-6">
                      <label class="form-label" for="multicol-first-name">First Name</label>
                      <input type="text" id="multicol-first-name" class="form-control" placeholder="John" />
                    </div> */}
                    {/* <div class="col-md-6">
                      <label class="form-label" for="multicol-last-name">Last Name</label>
                      <input type="text" id="multicol-last-name" class="form-control" placeholder="Doe" />
                    </div> */}
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-country">Category</label>
                      <select id="multicol-country" class="select2 form-select" data-allow-clear="true">
                        <option value="">Select</option>
                        <option value="Australia">Australia</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea, Republic of</option>
                      
                      </select>
                    </div>
                    {/* <div class="col-md-6 select2-primary">
                      <label class="form-label" for="multicol-language">Language</label>
                      <select id="multicol-language" class="select2 form-select" multiple>
                        <option value="en" selected>English</option>
                        <option value="fr" selected>French</option>
                        <option value="de">German</option>
                        <option value="pt">Portuguese</option>
                      </select>
                    </div> */}
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-birthdate">ACCURATE FROM</label>
                      <input
                        type="text"
                        id="multicol-birthdate"
                        class="form-control dob-picker"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-phone">Turn around time</label>
                      <input
                        type="text"
                        id="multicol-phone"
                        class="form-control phone-mask"
                        placeholder="658 799 8941"
                        aria-label="658 799 8941"
                      />
                    </div>
                  </div>
                  <div class="pt-4">
                    <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                    <button type="reset" class="btn btn-label-secondary">Cancel</button>
                  </div>
                </form>
              </div> 
            </div>
         </div>  

       </div> 
       </div>  

      </div> 

    </div>

  </div>
  )
}
