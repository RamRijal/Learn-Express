import React from 'react'

const ButtonClick = () => {
    let handleClick=(e)=>{
        console.log("Button Clicked");
    };
    return (
        <div>
            <button onClick={(e) => { console.log("Button clicked"); }}>
                Click me
            </button>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default ButtonClick