import React from 'react'

const RemoveLocalStorage = () => {
    let num=Math.floor(Math.random()*100);
  return (
    <div>
        LOCAL STORAGE
        <button style={{margin:"5px"}} onClick={()=>{localStorage.removeItem("token")}}>Remove token</button>
        <button style={{margin:"5px"}} onClick={()=>{localStorage.setItem("token",num)}}>Add token</button>
    </div>
  )
}

export default RemoveLocalStorage