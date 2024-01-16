import React from 'react'

const LearnMap1 = ({ }) => {
    let names = ["Sita", "Janaki", "Sundari"]
    let printName =()=>{
        let baby=names.map((item, i) => {
            return (
                <div>{item} is my baby</div>
            )
        }
        )
        return (baby)
    }
    // let rank = ["first", "second", "third"]
    return (
        <div>
            {
             printName()
            }
        </div>
    )
}

export default LearnMap1