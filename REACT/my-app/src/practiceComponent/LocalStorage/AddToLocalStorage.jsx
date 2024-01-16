import React from 'react'

const AddToLocalStorage = () => {

  let token="123341212231"
  localStorage.setItem("token",token)
  localStorage.setItem("name","anjali")
  localStorage.setItem("age","22")
  localStorage.setItem("isMarried","true")

  return (
    <div>
     AddToLocalStorage 
    </div>
  )
}

export default AddToLocalStorage

//localstorage is unique for each url in each browser i.e fb.com and localhost doesnt have the same data in localstorage
//Chromes localstorage data is not accessible in another browser and viceversa./.