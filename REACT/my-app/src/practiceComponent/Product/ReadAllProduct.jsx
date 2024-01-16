import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReadAllProduct = () => {
  let [products, setProduct] = useState([]);
  let navigate = useNavigate();

  let getAllProducts = async () => {
    const res = await axios({
      url: "http://localhost:8000/products",
      method: "GET"
    }) 

    console.log(res);
    setProduct(res.data.result);
  };
  //If initial site load hits API
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {
        products.map((product, i) => {
          return (
            <div>
              <p key={i}>
                {"Product: " + product.name + " Price: $" + product.
                  price + ", Quantity: " + product.quantity}
              </p>

              <button onClick={() => { navigate(`/products/${product._id}`) }}>View</button>

              <button onClick={() => { navigate(`/products/update/${product._id}`) }}>Edit</button>
              
              <button onClick={async()=>{
                 const res = await axios({
                  url: `http://localhost:8000/products/${product._id}`,
                  method: "DELETE"
                }) 
                getAllProducts();
              }}>Delete</button>
            </div>
          )
        })

      }
    </div>
  )
}

export default ReadAllProduct