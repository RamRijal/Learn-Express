import React from 'react'

const AddtoSessionStorarge = () => {
    sessionStorage.setItem("name","Hanthi")
    sessionStorage.setItem("dob",2020)
    return (
        <div>
       <button onClick={sessionStorage.setItem("token",1)}>Add token</button> 
        </div>
  )
}

export default AddtoSessionStorarge