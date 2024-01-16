import React from 'react'

// const Detail1 = (props) => {
//   return (
//     <div>Its me {props.name} from {props.address} and i am {props.age} years of age!</div>
//   )
// }
const Detail1 = ({name,age,address}) => {
    return (
      <div>Its me {name} from {address} and i am {age} years of age!</div>
    )
  }
//Destructured Format for props//
export default Detail1