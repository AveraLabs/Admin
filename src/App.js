import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import './App.css'; 
// import Verification from './Pages/Verification';
// import Home from './Pages/Home'; 

// ccc
function App() {
  return (
    <BrowserRouter>
     <Routes>   
       <Route path="/" element={<Login />}/>  
        <Route path="login" element={<Login />}/>  
     </Routes>
    </BrowserRouter>
  );
} 

export default App; 
