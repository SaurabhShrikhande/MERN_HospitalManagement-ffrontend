import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../main'
import axios from 'axios';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nabar() {
    const [show , setshow ] = useState(false);
    const { isAuthenticated, setisAuthenticated } = useContext(context);
    console.log(isAuthenticated);
   const [see ,setsee] = useState(isAuthenticated);
    const navigateto = useNavigate();
    const handleLogout = async () => {
        //  try{
                await axios.post("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/patient/logout", {withCredentials : true} )
           .then((res) => {
               setisAuthenticated(false)
              toast.success(res.data.message)
             
           })
           .catch((err) => {

            toast.error(err.responce.data.message)
           })
        //  }
        //   catch(err) {
             
        //  }
    };

    const gotoLogin = async () => {
      navigateto("/login")
    }
   return ( <>
    {/* <div>Nabar</div> */}
     <nav>
        <div style={{background:"black"}}>
            <div style={{display:"flex" , justifyContent:"space-around" ,alignItems:"center" , color:"white" }}>
                <div style={{display:"flex" , gap:"50px"}}>
                    <Link style={{color:"white" }} to={"/"} >HOME </Link>
                    <Link style={{color:"white" }} to={"/appointment"} > APPOINTMENT</Link>
                    <Link style={{color:"white" }} to={"/about"} > ABOUT US</Link>
                </div>
     
     {isAuthenticated ? (<button style={{background:"black", color:"white"}} onClick={handleLogout}> LOGOUT</button> ) : ( <button style={{background:"black", color:"white"}}  onClick={gotoLogin}>LOGIN</button>)} 
        
     {/* cookie automatically delete on page relode, dont know why  */}

      {/* nothing */}
            </div>
        </div>
       
       <div onClick={() => {setshow(!show)}}>
       {/* <GiHamburgerMenu/> */}
         </div>
     
     </nav>
    </>
  )
}
