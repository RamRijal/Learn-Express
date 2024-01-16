import React, { useRef } from 'react'

const UseRef1 = () => {
let ref1=useRef();
let ref2=useRef();

let refInput=useRef();
  return (
    <div>
        Hello from USEREF
        <div ref={ref1}>This is me now</div>
        <div ref={ref2}>He is him now</div>

        <button style={{margin:"5px"}} onClick={()=>{ref1.current.style.backgroundColor="yellow";ref1.current.style.fontSize="50px"}}>Yellow button</button>
        <button style={{margin:"5px"}} onClick={()=>{ref2.current.style.backgroundColor="pink";ref2.current.style.fontSize="100px"}}>Pink button</button>
<br></br>
        <button style={{margin:"5px"}} onClick={()=>{refInput.current.focus()}}>Focus INPUT</button>
        <button style={{margin:"5px"}} onClick={()=>{refInput.current.blur()}}>Blur INPUT</button>

        <input ref={refInput}></input>
    </div>
  )
}

export default UseRef1
