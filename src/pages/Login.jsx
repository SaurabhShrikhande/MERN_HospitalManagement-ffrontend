import React, { useContext, useState } from 'react'
import { context } from '../main'
import { useNavigate , Navigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
export const Login = () => {
  const { isAuthenticated  , setisAuthenticated } = useContext(context)

  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const navigateto = useNavigate();

 const handleLogin = async (e) => {
           e.preventDefault();

           try{
            console.log(1)
           const res = await axios.post("https://mern-hospital-management-backend-1.onrender.com/api/v1/user/login" ,
            {email , password , confirmpassword , role : "patient" },
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

  if(isAuthenticated){
    return(<Navigate to="/" />)
  }

  return (
    <>
    {/* <div>Login page</div> */}
         <h2>Sign In</h2>
         <p>Please Login to continue</p>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id eveniet exercitationem ipsum nobis modi totam voluptatibus accusamus. Distinctio doloremque neque, impedit debitis tenetur nam cupiditate nisi quam ad ab?
         eum est voluptatum, libero blanditiis quae dolorum et beatae dolore distinctio incidunt? Beatae ullam doloribus iste deserunt veniam, dignissimos obcaecati. Accusantium expedita, doloremque unde consectetur optio distinctio deleniti? </p>
  
  <form onSubmit={handleLogin} style={{display:"flex" , flexDirection:"column" , justifyContent:"center", alignItems:"center", gap:"15px" , }}>
 
 <input type="email" placeholder='email' value={email} onChange={(e) => {setemail(e.target.value) }}/>
 <input type="text" placeholder='password' value={password} onChange={(e) => {setpassword(e.target.value) }}/>
 <input type="text" placeholder='confirm  password' value={confirmpassword} onChange={(e) => {setconfirmPassword(e.target.value) }}/>
<div style={{display:"flex" , alignItems:"center" , gap:"10px"}}> 
  <p>Not Register? </p> <Link to={"/register"} >Register Now</Link>
</div>
   
   <div>
       <button type='submit'>Login</button>
   </div>
  </form>
  
    </>
  )
}
