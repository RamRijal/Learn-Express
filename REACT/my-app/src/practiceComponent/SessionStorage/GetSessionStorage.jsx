import React from 'react'

const GetSessionStorage = () => {
let abc=sessionStorage.getItem("token")
console.log(abc);
  return (
    <div>
        SESSION STORAGE
    </div>
  )
}

export default GetSessionStorage