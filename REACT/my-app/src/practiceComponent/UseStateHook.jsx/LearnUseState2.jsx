import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count, setcount] = useState(0)
    let [showImage, setShowImage] = useState(true)

    let increment = (e) => {
        count >= 10 ? <div>setcount(9)</div> : setcount(count + 1)
    }

    let decrement = (e) => {
        count <= 0 ? <div>setcount(0)</div> : setcount(count - 1)

    }

    let reset = (e) => {
        setcount(0)

    }

    // let showImg = (e) => {
    //     setShowImage(true)
    // }

    // let hideImg = (e) => {
    //     setShowImage(false)

    // }

    let handleImg=(display)=>{
      return( (e)=>{
        setShowImage(display)
      })
    }

    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Delete</button>
            <button onClick={reset}>Reset</button>

            <br></br>
            {
                showImage ?
                    <div>
                        <img
                            src='./cover.png'
                            alt='cover.png'
                            style={{ height: "200px", width: "auto" }}
                        />
                    </div>
                    : null
            }
            <button onClick={handleImg(true)}>Show Image</button>
            <button onClick={handleImg(false)}>Hide Image</button>

        </div >
    )
}


export default LearnUseState2