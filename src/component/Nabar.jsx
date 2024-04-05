import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../main'
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Nabar() {
    const [show , setshow ] = useState(false);
    const { isAuthenticated, setisAuthenticated } = useContext(context);
    console.log(isAuthenticated);
   const [see ,setsee] = useState(isAuthenticated);
    const navigateto = useNavigate();
    const handleLogout =async () =>{
        //  try{
                await axios.post("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/patient/logout", {withCredentials : true} )
           .then(res => {
              toast.success(res.data.message)
              setisAuthenticated(false)
           })
           .catch((err) => {
            toast.error(err.responce.dada.message)
           })
        //  }
        //   catch(err) {
             
        //  }
    };

    const gotoLogin = async () => {
      navigateto("/login")
    }
   return ( <>
    <div>Nabar</div>
     <nav>
        <div>
            <div>
                <div style={{display:"flex" , gap:"50px"}}>
                    <Link to={"/"} >HOME </Link>
                    <Link to={"/appointment"} > APPOINTMENT</Link>
                    <Link to={"/about"} > ABOUT US</Link>
                </div>
     
     {isAuthenticated ? (<button onClick={handleLogout}> LOGOUT</button> ) : ( <button onClick={gotoLogin}>LOGIN</button>)} 
        
     {/* cookie automatically delete on page relode, dont know why  */}

      {/* nothing */}
            </div>
        </div>
     </nav>
    </>
  )
}
