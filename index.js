// always keep expressApp.use(json()) at top


import express, { json } from "express";
import firstRouter from "./src/router/first-router.js";
import bikeRouter from "./src/router/bike-router.js";
import traineeRouter from "./src/router/trainees-router.js";
import schoolsRouter from "./src/router/schools-router.js";
import vehiclesRouter from "./src/router/vehicles-router.js";
import connectToMongoDB from "./src/connect-to-db/connect-to-mongodb.js";
import studentRouter from "./src/router/students-router.js";
import teacherRouter from "./src/router/teachers-router.js";
import bookRouter from "./src/router/books-router.js";
import userRouter from "./src/router/users-router.js";
import webuserRouter from "./src/router/webuser-router.js";
import productRouter from "./src/router/productRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import fileRouter from "./src/router/fileRouter.js";

// Ensures JSon acceptance

let expressApp = express();
expressApp.use(json())
expressApp.use(express.static("./public"))


expressApp.listen(8000, ()=>{
    console.log('express app is listening at port 8000');
});
connectToMongoDB();


expressApp.use("/firsts", firstRouter); // this means, the / in first router is localhost:8000/firsts
expressApp.use("/bike", bikeRouter);
expressApp.use("/trainees", traineeRouter);
expressApp.use("/schools", schoolsRouter);
expressApp.use("/vehicles", vehiclesRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/users", userRouter);

expressApp.use("/webusers",webuserRouter);
expressApp.use("/trainees", traineeRouter);

expressApp.use("/products",productRouter);
expressApp.use("/reviews",reviewRouter);

expressApp.use("/files",fileRouter);

 //////////  Hashing example  /////////////

 //HASH PASSWORD GENERATION ////////////////////////////////////////////////

// let password="ABC1000"
// let hashpassword=await bcrypt.hash(password,10)
// let hashpassword1= bcrypt.hash(password,10)
// console.log(hashpassword);
// console.log(hashpassword1);


 //HASH PASSWORD Validation ////////////////////////////////////////////////

// let hashpassword="$2b$10$xnIPpaFKrKEEaLCZmfSTQuHd.AQvWosr2mzojO0FTgJHVsKww44ki"
// let password="A00" // let password="ABC1000"

// let isValidPassword= await bcrypt.compare(password,hashpassword)
// console.log(isValidPassword);


// TOKEN GENERATION////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let infoObj={          ///////////////////////String/Object/Array
//     // name:"John",
//     // age:25,
//     id:"1233456789"
// }
// let secretKey="xyz12345" ///////////////////////String
// let expiryInfo={         /////////////////////// s/m/h fro sec/min/hr
//     expiresIn:"365d"
// }
// let token=jwt.sign(infoObj,secretKey,expiryInfo) 
// console.log(token); 





//TOKEN VERIFICATION///////////////////////////////////////////////////////////////////////////////////////////////////////////


// let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MjUsImlhdCI6MTcwMjAyMTk0NiwiZXhwIjoxNzMzNTU3OTQ2fQ.wPp-Lkz_KqhWVi2exwNIuw04rTU2h_1zPLDNE7ukAww"

// try {

// let infoObj=jwt.verify(token,"xyz2345") //checks if the given token is generated using the secretkey or not
// console.log(infoObj);      //The token must not be expired to give the output
// }    
//  catch (error) {   //If valid then infoObj else error
// console.log(error.message); 
// }
    
let files=[
    {
        destination:"./public",
        name:"a.png"
    },
    {
        destination:"./public",
        name:"b.png"
    },
    {
        destination:"./public",
        name:"c.png"
    }
]
// let local="http://localhost:8000/"
// let display=files.map((value,i)=>
// {
//     // return local+value.
//     return local+value.name
// })
// console.log(display);

let display=files.map((value,i)=>
{
    // return local+value.
    return `http://localhost:8000/${value.name}` //$ use garda backtick always
})
console.log(display);
