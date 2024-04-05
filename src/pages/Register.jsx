import React, { useContext, useEffect, useState } from 'react'
import { context } from '../main'
import {Navigate , useNavigate , Link } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify';
export const Register = () => {
const {isAuthenticated , setisAuthenticated} = useContext(context);

const [firstName , setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");
const [nic, setnic] = useState("");
const [dob, setdob] = useState("");
const [gender, setgender] = useState("");
const [password, setpassword] = useState("");
const navigateto = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();
  try{
    console.log(1)
   const res = await axios.post("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/patient/register" ,
    {firstName, lastName , email, phone, nic, dob, gender, password , role : "patient" },
    {
      withCredentials: true,
      headers : {
        "Content-Type" : "application/json"
      },
    })
    console.log(2)
    // .then((res) => {     //not work , dont know why in message same logic work
      console.log(3)
      toast.success(res.data.message);
      setisAuthenticated(true);
      
      // setemail("");
      // setpassword("");
      // setconfirmPassword("");
        navigateto("/");
    // })
    
    


  } catch(error){
    console.log(4)
    alert(error)
    toast.error(error.response.data.message)
 
}

}

if(isAuthenticated){      //cookie automatically delete, its internal code error
  return <Navigate to={"/"}/>
}

return (<>
    <div>Register</div>

<div>
  <h2> Sign in</h2>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, natus officia sapiente, laborum placeat esse error impedit aut molestiae porro deleniti voluptate possimus quae, assumenda fuga quos quas enim pariatur.
  Quae eligendi ex maxime minus culpa magnam voluptates doloribus ut rerum quasi! Iure sapiente optio dolorem suscipit necessitatibus ipsa, quidem, tempore laudantium nostrum libero vitae vero? Iure optio quod repellat! </p>

<form onSubmit={handleRegister}>
<input type='text' placeholder='first name' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
<input type='text' placeholder='last name' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
<input type='email' placeholder='email' value={email} onChange={(e) => setemail(e.target.value)}/>
<input type='text' placeholder='phone' value={phone} onChange={(e) => setphone(e.target.value)}/>
<input type='text' placeholder='nic' value={nic} onChange={(e) => setnic(e.target.value)}/>
<input type='date' placeholder='dob' value={dob} onChange={(e) => setdob(e.target.value)}/>
<select value={gender} onChange={(e) => {setgender(e.target.value)}}>
  <option value="">Select Gender</option>
  <option value="male"> Male</option>
  <option value="femail">Female</option>
</select>
<input type='password' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}/>

<div>
  <p>Alredy Register? </p> <Link to={"/login"} > Log in Now</Link>
</div>
   
   <div>
       <button type='submit'>Register</button>
   </div>
</form>

</div>
       

    </>
  )
}
