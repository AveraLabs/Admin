import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import './App.css'; 

import { AddNewWorkers } from './Home/Pages/AddNewWorkers'; 
import { CreateTestCombos } from './Home/Pages/CreateTestCombos'; 
import { SeeBookings  } from './Home/Pages/SeeBookings'; 
import { DetailedPayment } from './Home/Pages/DetailedPayment'; 
import { AddLabTest } from './Home/Pages/AddLabTest'; 
import Verification from './Pages/Verification'; 
import {AddNewLab} from './Home/Pages/AddNewLab'; 
import { SeeMobileAppUser } from './Home/Pages/SeeMobileAppUser';
import DashBoard from './Home/Dashboard'
// ccc
function App() {
  return (
    <BrowserRouter>
     <Routes>   
       <Route path="/" element={<Login />}/>  
        <Route path="login" element={<Login />}/>    
        <Route path='verification' element={<Verification />} /> 
        <Route path="laboratories" element={<AddNewLab/>} /> 
        <Route path='addlabtest' element={<AddLabTest/>} /> 
        <Route path='createtestcombos' element={<CreateTestCombos/>} /> 
        <Route path='detailedpayments' element={<DetailedPayment/>} />  
        <Route path='mobileappusers' element={<SeeMobileAppUser/>} />  
        <Route path='addnewworkers' element={<AddNewWorkers/>} />  
        <Route path='seebookings' element={<SeeBookings/>} />  
        <Route path='labreports' element={<SeeBookings/>} />   
        <Route path='usersreports' element={<SeeBookings/>} />  
        <Route path='dashboard' element={<DashBoard/>} />  
     </Routes> 
    </BrowserRouter>
  );
} 

export default App; 
