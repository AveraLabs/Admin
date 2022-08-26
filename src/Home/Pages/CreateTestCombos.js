import React from 'react'; 
import SideBar from '../../components/Sidebar'; 
import Header from '../../components/Header';
import { TableWithExport } from '../../components/Tables/TableWithExport';
import { ComboTable } from '../../components/Tables/ComboTable';

export const CreateTestCombos = () => {  

  const tableData = [ 
  ]

  const columns = [
    { title: "Name", field: "name", },
    { title: "Email", field: "email", },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: 'fee', type: "currency" }
  ]

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

           <div class="card">
               
               <ComboTable 
                title="Test Combos"/>

                {/* modal */}
                <div class="offcanvas offcanvas-end" id="add-new-record">
                  <div class="offcanvas-header border-bottom">
                   <h5 class="offcanvas-title" id="exampleModalLabel">New Laboratory</h5>
                   <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body flex-grow-1">
                  <form class="add-new-record pt-0 row g-2" id="form-add-new-record" onsubmit="return false">
                    <div class="col-sm-12">
                      <label class="form-label" for="basicFullname">Lab Name</label>
                      <div class="input-group input-group-merge">
                        <span id="basicFullname2" class="input-group-text"><i class="bx bx-user"></i></span>
                        <input
                          type="text"
                          id="basicFullname"
                          class="form-control dt-full-name"
                          name="basicFullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basicFullname2"
                        />
                      </div>
                    </div>
                   
                    <div class="col-sm-12">
                      <label class="form-label" for="basicEmail">Lab Email</label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                        <input
                          type="text"
                          id="basicEmail"
                          name="basicEmail"
                          class="form-control dt-email"
                          placeholder="john.doe@example.com"
                          aria-label="john.doe@example.com"
                        />
                      </div>
                      {/* <div class="form-text">You can use letters, numbers & periods</div> */}
                    </div> 

                    <div class="col-sm-12">
                      <label class="form-label" for="basicEmail">Lab Phone Contact</label>
                      <div class="col-sm-10">
                            <input
                              type="text"
                              id="basic-default-phone"
                              class="form-control phone-mask"
                              placeholder="658 799 8941"
                              aria-label="658 799 8941"
                              aria-describedby="basic-default-phone"
                            />
                      </div>
                      
                    </div>
                    <div class="col-sm-12">
                    <label class="form-label" for="basicPost">Lab Location</label>
                      <div class="input-group input-group-merge">
                        <span id="basicPost2" class="input-group-text"><i class="bx bxs-briefcase"></i></span>
                        <input
                          type="text"
                          id="basicPost"
                          name="basicPost"
                          class="form-control dt-post"
                          placeholder="Web Developer"
                          aria-label="Web Developer"
                          aria-describedby="basicPost2"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <label class="form-label" for="basicDate">Joining Date</label>
                      <div class="input-group input-group-merge">
                        <span id="basicDate2" class="input-group-text"><i class="bx bx-calendar"></i></span>
                        <input
                          type="text"
                          class="form-control dt-date"
                          id="basicDate"
                          name="basicDate"
                          aria-describedby="basicDate2"
                          placeholder="MM/DD/YYYY"
                          aria-label="MM/DD/YYYY"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <label class="form-label" for="basicSalary">Salary</label>
                      <div class="input-group input-group-merge">
                        <span id="basicSalary2" class="input-group-text"><i class="bx bx-dollar"></i></span>
                        <input
                          type="number"
                          id="basicSalary"
                          name="basicSalary"
                          class="form-control dt-salary"
                          placeholder="12000"
                          aria-label="12000"
                          aria-describedby="basicSalary2"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1">Submit</button>
                      <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
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

    </div>

  </div>
  )
}
