import { Schema } from "mongoose";

let traineeSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "name field is required"]
        },
        age: {
            type: Number,
            required: [true, "age field is required"]
        },
        email: {
            type: String,
            unique: true,
            required: [true, "email field is required"]
        },
        isMarried: {
            type: Boolean,
            required: [true, "isMarried field is required"]
        }
    }
);

export default traineeSchema;