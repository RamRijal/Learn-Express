import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [age, set] = useState();
  const [isMarried, setIsMarried] = useState(false);

  let params=useParams();

  let getStudents = async () => {
    const res = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET"
    })
    let data =(res.data.result)

    setName(data.name)
    set(data.age)
    setIsMarried(data.isMarried)
  }
  useEffect(()=>{
    getStudents();
  },[])
  let onSubmit = async(e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
    };
    console.log(data);

    try {
      let result = await axios({
        url:`http://localhost:8000/products/${params._id}`,
        method : "PATCH",
        data : data ,

      })
      setName("");
      set("");
      setIsMarried("");

      // toast(`product successfully created.`)
      toast.success('ð¦ product successfully created.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    } catch (error) {
      console.log(error);
      toast.error('ð¦ Error!! ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }


  };

  return (
    <div>
      <div>
        <br />
        <br />
        <ToastContainer/>

        <form onSubmit={onSubmit}>
          
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your name."
            id="name"
            value={name}
            onChange={(e) => {
              // console.log(e.target.value);
              setName(e.target.value);}}
          />
          <br />
          <br />


          <label htmlFor="age">Age:</label>
          <input
            type="number"
            placeholder="Eg : 200"
            id="age"
            value={age}
            onChange={(e) => {
              // console.log(e.target.value);
              set(e.target.value);}}
          />
          <br />
          <br />


          <label htmlFor="q">IsMarried:</label>
          <input
            type="checkbox"
            placeholder="Eg : 1"
            id="q"
            value={isMarried}
            onChange={(e) => {
              // console.log(e.target.value);
              setIsMarried(e.target.value);
            }} />
          <br />
          <br />


          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
