import { Schema } from "mongoose";

let productSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "name field is required"]
        },
        price: {
            type: Number,
            required: [true, "price field is required"]
        },
        quantity: {
            type: Number,
            required: [true, "isMarried field is required"]
        }
    },
    {
     timestamps:true,   
    }
);

export default productSchema;