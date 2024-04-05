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
        const res = await axios.get("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/patient/me" ,{withCredentials : true} )
        setisAuthenticated(true);
        setuser(responce.data.user);
      }catch(err){
          setisAuthenticated(false);
          setuser({});
      }
     };
     fetchUser();

 },[isAuthenticated])


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
