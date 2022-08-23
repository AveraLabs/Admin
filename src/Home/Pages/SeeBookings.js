import React from 'react'; 
import SideBar from '../../components/Sidebar'; 
import Header from '../../components/Header';
import { DataTable } from '../../components/Tables/DataTable';


// <<<<<<<< HEAD:src/Home/Pages/AddNewLaboratories.js

const columns = [
  { title: "Booking ID", field: "name", },
  { title: "Client ID", field: "email", },
  { title: "Laboratory Booked", field: "year", type: "numeric" },
  { title: "Cost Of Lab", field: 'fee', type: "currency" }]

export const SeeBookings = () => {
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
                  <DataTable 
                   title={'See Bookings'}
                   columns={columns}/>
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
