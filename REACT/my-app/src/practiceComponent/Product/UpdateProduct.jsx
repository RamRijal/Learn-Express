import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(false);

  let params=useParams();

  let getProducts = async () => {
    const res = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET"
    })
    let data =(res.data.result)

    setName(data.name)
    setPrice(data.price)
    setQuantity(data.quantity)
  }
  useEffect(()=>{
    getProducts();
  },[])
  let onSubmit = async(e) => {
    e.preventDefault();

    let data = {
      name: name,
      price: price,
      quantity: quantity,
    };
    console.log(data);

    try {
      let result = await axios({
        url:`http://localhost:8000/products/${params._id}`,
        method : "PATCH",
        data : data ,

      })
      setName("");
      setPrice("");
      setQuantity("");

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


          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Eg : 200"
            id="price"
            value={price}
            onChange={(e) => {
              // console.log(e.target.value);
              setPrice(e.target.value);}}
          />
          <br />
          <br />


          <label htmlFor="q">Quantity:</label>
          <input
            type="number"
            placeholder="Eg : 1"
            id="q"
            value={quantity}
            onChange={(e) => {
              // console.log(e.target.value);
              setQuantity(e.target.value);
            }} />
          <br />
          <br />


          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
