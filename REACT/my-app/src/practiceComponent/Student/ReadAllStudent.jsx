import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ReadAllStudent = () => {
  let [students, setStudent] = useState([]);
  let navigate = useNavigate();

  let getAllStudents = async () => {
    const res = await axios({
      url: "http://localhost:8000/students",
      method: "GET"
    })
    setStudent(res.data.result);
  };
  //If initial site load hits API
  useEffect(
    () => {
      getAllStudents();
    }, []
  );
  const Deletestudent = async (studentId) => {
   try{ const res = await axios({
      url: `http://localhost:8000/students/${studentId}`,
      method: "DELETE"
    })
    getAllStudents();
   }
   catch(error){
    console.log(error.message);

   }
  }
  return (
    <div>
      {
        students.map((student, i) => {
          return (
            <div>
              <p key={i}>
                {"Student: " + student.name + " Price: $" + student.
                  price + ", Quantity: " + student.quantity}
              </p>

              <button onClick={() => { navigate(`/students/${student._id}`) }}>View</button>

              <button onClick={()=>{navigate(`/products/update/${student._id}`)}}>Edit</button>
              <button onClick={()=>{Deletestudent(student._id)}}>Delete</button>
            </div>
          )
        })

      }
    </div>
  )
}

export default ReadAllStudent