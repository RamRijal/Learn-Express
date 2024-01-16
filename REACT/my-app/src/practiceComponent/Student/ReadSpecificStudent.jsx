import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ReadSpecificStudent = () => {

  // let params =useParams();
  // let [query] =useSearchParams();
  // console.log(query.get("name"));
  // console.log(query.get("isMarried"));

  // let navigate=useNavigate();
  let params = useParams();
  let [students, setStudent] = useState({})
  let getStudents = async () => {
    const res = await axios({
      url: `http://localhost:8000/students/${params.id}`,
      method: "GET"
    })
    return (
      <div>ReadSpecificStudent
        {/* <button onClick={()=>{
        navigate("/student/update/1231312")
      }}>CLICK ME</button> */}
      </div>
    )
  }
}
  export default ReadSpecificStudent