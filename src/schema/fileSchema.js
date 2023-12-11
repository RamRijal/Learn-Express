import { Schema } from "mongoose";

let fileSchema = Schema(
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
        }
    },
    {
     timestamps:true,   
    }
);

export default fileSchema;