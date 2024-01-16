import React, { useState } from 'react'

const LearnUseState1 = () => {
  let [name, setName] = useState("niha")
let [age,setAge]=useState("22")
  let handleClick = (e) => {
    setName("XYZ")
  }
  let handleAge = (e) => {
    setAge("21")
  }
  return (
    <div>
      Name:{name}
      Age:{age}
      <button onClick={handleClick}>Change Name</button>
      <button onClick={handleAge}>Change Age</button>

    </div>
  )
}

export default LearnUseState1