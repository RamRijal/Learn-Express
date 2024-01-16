import { User } from "../schema/model.js";
import bcrypt from "bcrypt"
import { sendEmail } from "../utilities/sendemail.js";
import jwt from "jsonwebtoken"
import { secretKey } from "../utilities/constant.js";


export let createUser = async (req, res) => {

    let userData = req.body;

    let Password = userData.password

    try {

        let hashPassword = await bcrypt.hash(Password, 10)
        userData.password = hashPassword
        let result = await User.create(userData);

        await sendEmail({
            from: "Un <prajadi14@gmail.com>",
            to: [req.body.email],
            subject: "Email verification",
            html: `<h1>SUCCESSFULLY REGISTERED!</h1>`,
            // attachments:[{
            //     filename:"example.com",
            //     path:""
            // }]
        })
        res.status(201).json({
            success: true,
            message: "user created successfully.",
            result: result
        });
    }
    catch (error) {
        res.status(409).json({
            success: false,
            message: error.message
        });
    }
};


export let readUser = async (req, res) => {
    try {
        let result = await User.find({});
        res.status(200).json(
            {
                success: true,
                message: "user read successfully",
                result: result
            });
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            });
    }
};

export let readUserDetail = async (req, res) => {
    let userId = req.params.userId;
    try {
        let result = await User.findById(userId);
        res.status(200).json({
            success: true,
            message: "user read successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export let updateUser = async (req, res) => {
    let userId = req.params.userId;
    let update = req.body;
    try {
        let data = await User.findByIdAndUpdate(userId, update);
        res.status(201).json({
            success: true,
            message: "user updated successfully",
            result: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

export let deleteUser = async (req, res) => {

    let userId = req.params.userId;

    try {
        let result = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success: true,
            message: "user deleted successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
//////////LOGIN//////////////////


// email password==>POST
// then get
//then check email
//if email correct check password else give error
//check password types with hashed password in database registered eaarlier
//if same ==>login successful
//else give error

export let loginUser = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    try {
        let user = await User.findOne({ email: email })
        console.log(user);
        //Output either null or object
        let hashPassword = user.password
        if (user === null) {
            res.json({
                success: false,
                message: "Email or Password doesn't match"
            })
        }
        else {
            let isValidPassword = await bcrypt.compare(password, hashPassword)
            if (isValidPassword) {
                //token generation and given at postman
                let infoObj = {         
                    id: user._id
                }
                //secretkey imported from 
                let expiryInfo = {   
                    expiresIn: "365d"
                }
                let token = jwt.sign(infoObj, secretKey, expiryInfo)
                console.log(token);
                res.json({
                    success: true,
                    message: "User login successful",
                    result:token
                })
            }
            else {
                res.json({
                    success: false,
                    message: "Email or Password doesn't match"
                })
            }

        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message //catch error must be error.message because the error needs to be known 
        })
    }
    
}
export let myProfile = async (req, res) => {
  let bearertoken= req.headers.authorization;
  console.log(bearertoken);
  let token=bearertoken.split(" ")[1]
  console.log(token);
  
try {

let infoObj=jwt.verify(token,secretKey) //checks if the given token is generated using the secretkey or not
console.log(infoObj);      //The token must not be expired to give the output

let id=infoObj.id;
let result=await User.findById({id})
res.json({
    success:true,
    message:"Profile read successfully",
    result:result
})
}    
 catch (error) {   //If valid then infoObj else error
console.log(error.message); 
res.json({
    success:false,
    message:error.message
})
}
};

// export let updateProfile = async (req, res) => {
//     let bearertoken= req.headers.authorization;
//     console.log(bearertoken);
//     let token=bearertoken.split(" ")[1]
//     console.log(token);
    
//   try {
  
//   let infoObj=jwt.verify(token,secretKey) //checks if the given token is generated using the secretkey or not
//   console.log(infoObj);      //The token must not be expired to give the output
  
//   let id=infoObj.id;
//   let result=await User.findByIdAndUpdate({id})
  
//   await User.updateOne({_id : id},{$set:{...req.body}})
//   .then((result)=>{
//     if(!result){
//         res.josn({
//             success:false,
//             message:"User_id did not match"
//         })

//   }})
//   res.json({
//     success:true,
//     message:"Profile updated successfully",
// })
// }   
//    catch (error) {   //If valid then infoObj else error
//   console.log(error.message); 
//   res.json({
//       success:false,
//       message:error.message
//   })
//   }
//   };