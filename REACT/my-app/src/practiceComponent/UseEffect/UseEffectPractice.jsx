import React, { useEffect, useState } from 'react'

const UseEffectPractice = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [count,count1]);
  useEffect(() => {
    console.log("Executes rendering in count increment ");
  }, [count]);
  useEffect(() => {
    console.log("Executes in first render");
  }, []);
  useEffect(() => {
    console.log("Executes in each render");
  });
  console.log("XXXXX");
  return (
    <div>
      count is {count}
      <br></br>
      <button onClick={(e) => setCount(count
        + 1)} >Increase</button>
    </div>
  )
}

export default UseEffectPractice