import React from 'react'; 
import SideBar from '../../components/Sidebar'; 
import Header from '../../components/Header';
import { TableWithExport } from '../../components/Tables/TableWithExport';

// <<<<<<<< HEAD:src/Home/Pages/AddNewLaboratories.js

export const AddNewLab = () => {
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
                
                <TableWithExport  
                 title="Laboratories"/>

                {/* modal */}
        
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
