import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Appointment } from './pages/Appointment';
import { AboutUs } from './pages/AboutUs';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import Navbar from "./component/Nabar"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { context } from './main';
import axios from 'axios';

function App() {
 const {isAuthenticated, setisAuthenticated, user, setuser } = useContext(context)

 useEffect (()=> {
     const fetchUser = async() => {
      try{        
        console.log("app.jss try block 1")                
        const responce = await axios.get("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/patient/me" ,{withCredentials : true} )
                             //on local host its working fine , join the doubt class 3 times in a day , whole night and day gone bt issue not resolve, so removed isAuthenticated dependency from useEffect
        console.log("app.jss try block 2 ") 
        setisAuthenticated(true);
        setuser(responce.data);
        console.log("app.jss try block 3") 
      }catch(err){
        console.log("app.jss try block 4") 
          setisAuthenticated(false);
          setuser({});
      }
     };
     fetchUser();

 } , [])  //need dependency isAuthenticated  //due to this issue not able to take aapointment


  return (
    <>
       <Router>
        <Navbar/>
         <Routes>
          <Route path='/' element ={ <Home/> }/>
          <Route path='/appointment' element ={ <Appointment/> }/>
          <Route path='/about' element ={ <AboutUs/> }/>
          <Route path='/register' element ={ <Register/> }/>
          <Route path='/login' element ={ <Login/>  }/>
         </Routes>
         <ToastContainer position='top-right'/>
       </Router>
     
    </>
  )
}

export default App
