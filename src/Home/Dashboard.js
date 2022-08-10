
import Sidebar from '../components/Sidebar'; 
import Header  from '../components/Header';

const Dashbaord = () => {  
    return ( 
 <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">   
        <Sidebar />

     <div class="layout-page">  
        <Header /> 

        <div class="content-wrapper"> 
        </div>
     </div>
      
    </div> 
 </div>
    );
} 

export default Dashbaord;