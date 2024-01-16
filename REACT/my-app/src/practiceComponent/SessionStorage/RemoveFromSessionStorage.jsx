import React from 'react'

const RemoveFromSessionStorage = () => {
    return (
        <div> 
           <button onClick={()=>{sessionStorage.removeItem("token")}}>Reomve Token</button> 
       </div>
  )
}

export default RemoveFromSessionStorage