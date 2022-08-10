import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import './App.css'; 
import Dashbaord from './Home/Dashboard';
import Verification from './Pages/Verification'; 

import {AddNewHospitals} from './Home/Pages/AddNewHospitals'; 
// import Verification from './Pages/Verification';
// import Home from './Pages/Home'; 

// ccc
function App() {
  return (
    <BrowserRouter>
     <Routes>   
       <Route path="/" element={<Login />}/>  
        <Route path="login" element={<Login />}/>    
        <Route path='verification' element={<Verification />} /> 
        <Route path="dashboard" element={<Dashbaord />} /> 
        <Route path="laboratories" element={<AddNewHospitals/>} />
     </Routes>
    </BrowserRouter>
  );
} 

export default App; 
