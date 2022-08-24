import React from 'react'; 
import SideBar from '../../components/Sidebar'; 
import Header from '../../components/Header';

// <<<<<<<< HEAD:src/Home/Pages/AddNewLaboratories.js

export const AddNewWorkers = () => {
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

                <h5 class="card-header">Add New Worker</h5>
                <form class="card-body">
                  <h6 class="fw-normal">1. Worker Info</h6>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-username">First Name</label>
                      <input type="text" id="multicol-username" class="form-control" placeholder="john.doe" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-email">Last Name</label>
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
                  </div>

                  <hr class="my-4 mx-n4" />
                  <h6 class="fw-normal">2. Personal Info</h6> 
                  
                  <div class="row g-3">
                   
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-last-name">Email</label>
                      <input type="text" id="multicol-last-name" class="form-control" placeholder="Doe" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-country">Work Category</label>
                      <select id="multicol-country" class="select2 form-select" data-allow-clear="true">
                        <option value="">Select</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                      </select>
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
