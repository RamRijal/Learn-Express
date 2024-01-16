import React from 'react'
import { NavLink } from 'react-router-dom'

const ReactLink = () => {
  let token=localStorage.getItem("token")

  return (
    <div>
      <NavLink to="/products/create" style={{ margin: "10px" }}>Create Product</NavLink>
      <NavLink to="/products" style={{ margin: "10px" }}> Product</NavLink>

      <NavLink to="/students/create" style={{ margin: "10px" }}> Create Student</NavLink>
      <NavLink to="/students" style={{ margin: "10px" }}> Student</NavLink>

      <NavLink to="/webuser/admin/register" style={{ margin: "10px" }}> Admin Register</NavLink>
      <NavLink to="/webuser/admin/login" style={{ margin: "10px" }}> Admin Login</NavLink>

      <NavLink to="/webuser/admin/logout" style={{ margin: "10px" }}> Logout</NavLink>

      {token?(
        <NavLink to="/webuser/admin/my-profile" style={{ margin: "10px" }}> MyProfile</NavLink>
      ):null
      }
      
      <NavLink to="/webuser/admin/update-password" style={{ margin: "10px" }}> Update Password</NavLink>
      <NavLink to="/webuser/admin/read-all-users" style={{ margin: "10px" }}> Read all users</NavLink>

    </div>
  )
}

export default ReactLink