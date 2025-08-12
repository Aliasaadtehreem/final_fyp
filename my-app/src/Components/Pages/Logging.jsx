import React from 'react'
import Navbar from '../Frontend/Navbar'
import {useState} from 'react'
import './Logging.css'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

const Logging = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  return (
    <>
    <Navbar/>
 
  <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

  
        <label style={{color:"#EAEBD0"}}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={{color:"#EAEBD0"}}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required

      
        />
 <button type="submit">Forget Password</button>
   <button type="submit">Login</button>
   <button type="submit">Sing up</button>

   
        
             <div class="col" style={{paddingLeft:"10px"}} >
        <a href="#" style={{ border:"1px solid #EAEBD0" ,color:"white"}} class="fb btn">
          <FaFacebookF />             Login with Facebook             
         </a>
         <br/>
         <br/>
        <a href="#"  style={{ border:"1px solid #EAEBD0" ,color:"white"}}  class="twitter btn">
         <CiTwitter /> Login with Twitter
         
        </a>
        <br/>
         <br/>
        <a href="#"  style={{ border:"1px solid #EAEBD0" ,color:"white"}}   class="google btn">
          <FaGoogle />  Login with Google  
        </a>
       
        
      </div>

       

     

     
   
      </form>
    </div>




    </>
  )
}

export default Logging
