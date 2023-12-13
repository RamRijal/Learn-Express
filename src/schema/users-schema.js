import { Schema } from "mongoose";

let userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "name field is required"]
        },
        email: {
            type: String,
            unique: true,
            required: [true, "email field is required"]
        },
        isMarried: {
            type: Boolean,
            required: [true, "isMarried field is required"]
        },
        password:{
            type:String,
            required:[true,"password field is required"]
        },
        profileImage:{
            type:String,
            required:[true,"profileImage is required"]
        },
        resume:
        {
            type:String,
            required:[true,"resume is required"]
        }
    },
    {
     timestamps:true,   
    }
);

export default userSchema;