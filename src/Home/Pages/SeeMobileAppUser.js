import React from 'react'
import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import { DataTable } from '../../components/Tables/DataTable';


export const SeeMobileAppUser = () => { 


  const columns = [
    { title: "Avera ID", field: "name", },
    { title: "Avera Username", field: "email", },
    { title: "Gender", field: "year", type: "numeric" },
    { title: "Date Of Birth", field: 'fee', type: "currency" },
    { title: "Phone Number", field: 'fee', type: "currency" }
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
                <DataTable 
                  title={'Mobile App Users'} 
                  columns={columns}/>
            </div>
         </div>  

       </div> 

     </div> 

     </div>  

    </div> 

  </div>

</div>
  );
}
