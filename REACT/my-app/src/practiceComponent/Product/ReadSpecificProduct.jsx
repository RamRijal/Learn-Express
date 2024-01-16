import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ReadSpecificProduct = () => {

  // let params =useParams();
  // let [query] =useSearchParams();
  // console.log(query.get("name"));
  // console.log(query.get("isMarried"));

  // let navigate=useNavigate();
  let params = useParams();
  let [products, setProduct] = useState({})
  let getProducts = async () => {
    const res = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET"
    })
    return (
      <div>ReadSpecificProduct
        {/* <button onClick={()=>{
        navigate("/product/update/1231312")
      }}>CLICK ME</button> */}
      </div>
    )
  }
}
  export default ReadSpecificProduct