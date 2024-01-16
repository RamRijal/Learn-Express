import React, { useState } from 'react'

const Form2 = () => {

    let [isMarried,setIsMarried]=useState('')
    let onSubmit=(e)=>{
        e.preventDefault();
console.log("Submissionn successful");

let data={
    isMarried:isMarried
}
console.log(data);
    }
  return (
    <div>
<form onSubmit={onSubmit}>
    <label htmlfor="isMarried">isMarried:</label>
    <input type='checkbox' id='isMarried' checked={isMarried==true} onChange={(e)=>{
        setIsMarried(e.target.checked)
    }}/>
    <button type='submit'>Submit</button></form>  
    </div>
  )
}

export default Form2