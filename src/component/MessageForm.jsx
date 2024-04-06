import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const MessageForm = () => {

  const [firstName , setfirstName ] = useState("");
  const [lastName , setlastName] = useState("");
  const [email, setemail ] = useState("");
  const [phone, setphone ] = useState("");
  const [ message , setmessage] = useState("");

  
 const handleMessage = async (e) => {
     e.preventDefault();
     try{
      await axios.post("https://mern-hospital-management-backend-1.onrender.com/api/v1/message/send" ,
      {firstName, lastName,email,phone,message },
      {
        withCredentials: true,
        headers : {
          "Content-Type" : "application/json"
        },
      }

      )
      .then((res) => {
        toast.success(res.data.message);
        setemail("");
        setfirstName("");
        setlastName("");
        setemail("");
        setmessage("");
      })

     } catch(err){
          toast.error(err.response.data.message)
     }
 }

 return (<>
    {/* <div>MessageForm</div> */}
    <div>
      <h2>Send Us Message</h2>
      <form onSubmit={handleMessage}>
         <div>
          <div style={{margin:"15px"}}>
          <input style={{margin:"15px"}} type='text' placeholder='First Name' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
          <input style={{margin:"15px"}} type='text' placeholder='Last Name' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
          </div >
          <div style={{margin:"15px"}}>
          <input style={{margin:"15px"}} type='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)}/>
          <input style={{margin:"15px"}} type='text' placeholder='Phone' value={phone} onChange={(e) => setphone(e.target.value)}/>
          </div>
          <textarea rows={7} cols={40} placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)} ></textarea>
         </div>

         <div  style={{justifyContent: "center" , alignItems: "center", margin:"15px" }}>
             <button type='submit'>Send</button>
         </div>
      </form>
    </div>
    </> 
  )
}


