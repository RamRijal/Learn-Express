import mongoose from "mongoose"
import { databaseLink } from "../utilities/constant.js";

let connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(databaseLink);
        console.log('application is connected to mongodb database successfully.');
    } catch(error){
        console.log(error.message);
    }
}

export default connectToMongoDB;

//Asynchronous code runs without proper scheduling or in a pattern but random 
//So to make the code run synchronously we use Await in the function
//in order to use the await ,the function must be async always
// i.e if as above, the connection link has error the code belown will still run despite the error before it which is solved usimg async await concept
