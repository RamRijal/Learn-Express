import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
      let navigate =useNavigate()
      let onSubmit = async(e) => {
            e.preventDefault();
            let data = {
              email: email ,
              password:password,
            }
            try {
                  let result = await axios({
                    url:`http://localhost:8000/webusers/login`,
                    method : "POST",
                    data : data
                  })
                  console.log(result)
                  let token = result.data.data;
                  localStorage.setItem("token",token);
                //  sessionStorage.setItem("token",token);
                  navigate("/admin")
                  // setEmail("")
                  // setPassword("")
                  // toast.success("login successful.")
                } catch (error) {
                  toast.error(error.message)
                }
                };
  return (
    <div>AdminLogin:
      <ToastContainer/>
       <form onSubmit={onSubmit}>
        <br />
        {/* email */}
        <div>
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Eg : abc123@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </div>
        {/* pw */}
        <div>
          <br />
          <label htmlFor="pw">Password:</label>
          <input
            type="text"
            placeholder="Eg : 12323355@#$%^&*"
            id="pw"
            value={password}
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Login</button>
        <div style={{cursor:"pointer"}} onClick={()=>{
          navigate("/admin/forgot-password")
        }}>
          <u style={{color:"purple"}}>Forgot Password</u>
          </div>
      </form>
    </div>
  )
}
export default AdminLogin
//login : make form-> hit api(token)->save token to local storage->navigate (admin)