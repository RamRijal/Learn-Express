import React, { useEffect, useState } from 'react'

const LearnCleanup = () => {
    let [count, setCount] = useState(0)
    useEffect(() => {
        console.log("UseEFFECT");
        return () => { console.log("HI from cleanup")}
    }, [count]
    )
    /* Cleanup function ==> returned by useEffect function */

    /* Doesnot execute in first render but executes from 2nd if useEffect fn runs */

    /* UseEffect function runs=>First cleanup i.e return part runs then only code above cleanup */

    /* When component unmounted nothing gets executed except cleanup function */
    return (
        <div>
             count is {count}
      <br></br>
      <button onClick={(e) => setCount(count
        + 1)} >Increase</button>
        </div>
    )
}

export default LearnCleanup