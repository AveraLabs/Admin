
import SideBar from '../components/Sidebar'; 
import Header  from '../components/Header';
import DashboardOverview from '../components/dashboards/DashboardOverview';

const Dashbaord = () => {  
    return (  

   <div class="layout-wrapper layout-content-navbar"> 

    <div class="layout-container">   
        <SideBar />

      <div class="layout-page">   

         <Header /> 

        <div class="content-wrapper">    

         <div class="container-xxl flex-grow-1 container-p-y">
            
            <DashboardOverview />
             
         </div>

        </div>

       </div>
      
    </div> 
 </div>
    );
} 

export default Dashbaord;