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
              setemail("");
              setpassword("");
              setconfirmPassword("");
             await setisAuthenticated(true);
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
    <div>Login page</div>
         <h2>Sign In</h2>
         <p>Please Login to continue</p>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id eveniet exercitationem ipsum nobis modi totam voluptatibus accusamus. Distinctio doloremque neque, impedit debitis tenetur nam cupiditate nisi quam ad ab?
         Inventore dignissimos repudiandae porro, et saepe impedit libero. Maxime dolorem excepturi repudiandae ratione nam? Nostrum facere nesciunt alias vero, consequuntur amet quas deserunt optio in modi impedit ullam et omnis?
         Illo, nam. Dolorum obcaecati non perferendis doloremque molestias minus porro ad et minima! Aperiam obcaecati soluta tempore ex? Voluptates vel ipsam commodi reprehenderit ad veritatis cupiditate molestias praesentium repudiandae mollitia.
         Hic earum tempora accusamus quibusdam est mollitia commodi quis autem reprehenderit? Iusto provident dolor sit? Error laborum quo odio corporis facilis possimus voluptate eos non sint, deserunt nemo veniam id?
         Architecto nihil et fugiat! Veritatis fuga numquam neque dolorem saepe a, delectus velit aliquid! Cumque, quibusdam! Dolor aliquid ut ex blanditiis perferendis aperiam, vitae expedita est ratione aut, laboriosam delectus?
         Nostrum optio sit id animi atque dolorum enim culpa nemo ipsam laboriosam, voluptatem magni numquam, hic asperiores laudantium eos cumque dolorem commodi consectetur quisquam. Earum animi reiciendis magni praesentium voluptatibus.
         Adipisci autem, consequatur enim natus accusamus quis numquam ut fuga molestiae id voluptatibus iure, vel aliquam aliquid doloribus omnis facilis! Sit harum eos accusantium exercitationem optio delectus impedit consectetur molestias.
         Vel ipsam maiores et quaerat cumque modi nam eaque doloremque officiis debitis? Dolorem blanditiis inventore fugiat in ex quis esse nihil optio recusandae, similique eligendi reiciendis ipsum facere sapiente nisi!
         Ratione ab quam mollitia quod dicta debitis perspiciatis fugiat iure architecto culpa odit recusandae illum neque a odio, et necessitatibus quas quis eaque blanditiis. Sequi voluptas temporibus necessitatibus vero hic?
         Dicta exercitationem eos veniam similique autem repudiandae, facere ab qui optio? Ipsum ratione corporis soluta mollitia, impedit deserunt dicta porro? Vitae impedit eligendi illo temporibus voluptate dolores cum distinctio deleniti!
         Optio ea accusamus, temporibus, placeat commodi aspernatur mollitia maiores iure atque aliquid esse dignissimos ad! Explicabo optio exercitationem officiis ratione necessitatibus voluptatibus eaque? Odio sed sunt perferendis distinctio ipsa eos.
         Provident rerum delectus quisquam quia voluptate veritatis! Voluptatem officia voluptates, eius nam aut eligendi voluptate quo odit enim tempora sed quam itaque architecto commodi hic, velit quia beatae necessitatibus temporibus.
         Numquam praesentium, suscipit beatae iste repellat assumenda culpa cupiditate. Rem magnam ducimus, hic qui ratione vitae? Praesentium cupiditate tenetur quasi repellat rerum aperiam unde ratione iure beatae, vitae iste iusto.
         Excepturi doloremque asperiores corporis aspernatur atque nihil fugit, quasi beatae ad. Sapiente, voluptas harum. Recusandae illum libero sequi labore accusamus, neque laboriosam omnis reiciendis porro nihil, fugit maiores quae vel.
         Quidem sed, eum est voluptatum, libero blanditiis quae dolorum et beatae dolore distinctio incidunt? Beatae ullam doloribus iste deserunt veniam, dignissimos obcaecati. Accusantium expedita, doloremque unde consectetur optio distinctio deleniti? </p>
  
  <form onSubmit={handleLogin}>
 <input type="email" placeholder='email' value={email} onChange={(e) => {setemail(e.target.value) }}/>
 <input type="text" placeholder='password' value={password} onChange={(e) => {setpassword(e.target.value) }}/>
 <input type="text" placeholder='confirm  password' value={confirmpassword} onChange={(e) => {setconfirmPassword(e.target.value) }}/>
<div>
  <p>Not Register </p> <Link to={"/register"} >Register Now</Link>
</div>
   
   <div>
       <button type='submit'>Login</button>
   </div>
  </form>
  
    </>
  )
}
