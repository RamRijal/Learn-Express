import React from 'react'
import { NavLink } from 'react-router-dom'

const Mylinks = () => {
  return (
    <div>
        Hello
        <NavLink to="/products/create">Create Product</NavLink>
        <NavLink to="/products"> Product</NavLink>
        <NavLink to="/students/create"> Create Student</NavLink>
        <NavLink to="/students"> Student</NavLink>
        
    
    </div>
  )
}

export default Mylinks