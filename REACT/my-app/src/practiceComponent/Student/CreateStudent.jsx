import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isMarried, setIsMarried] = useState(false);

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
    };
    console.log(data);
    try {
      let result = await axios({
        url: `http://localhost:8000/students`,
        method: "POST",
        data: data,

      })
      setName("");
      setAge("");
      setIsMarried("");

      // toast(`product successfully created.`)
      toast.success('ð¦ student successfully created.', {
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
  }
    return (
      <div>
        <div>
          <br />
          <br />
          <ToastContainer />

          <form onSubmit={onSubmit}>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name."
              id="name"
              value={name}
              onChange={(e) => {
                // console.log(e.target.value);
                setName(e.target.value);
              }}
            />
            <br />
            <br />


            <label htmlFor="age">Age:</label>
            <input
              type="number"
              placeholder="Eg : 20"
              id="age"
              value={age}
              onChange={(e) => {
                // console.log(e.target.value);
                setAge(e.target.value);
              }}
            />
            <br />
            <br />


            <label htmlFor="isMarried">IsMarried:</label>
            <input
              type="checkbox"
              id="isMarried"
              value={isMarried}
              onChange={(e) => {
                // console.log(e.target.value);
                setIsMarried(e.target.value);
              }} />
            <br />
            <br />


            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    )

  }

  export default CreateStudent