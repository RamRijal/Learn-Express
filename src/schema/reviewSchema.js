import { Schema } from "mongoose";

let reviewSchema = Schema(
    {
        productId: {
            type: Schema.ObjectId,
            ref: "Product",
            required: [true, "name field is required"],

        },
        userId: {
            type: Schema.ObjectId,
            ref: "User",
            required: [true, "price field is required"]
        },
        ratings: {
            type: Number,
            required: [true, "isMarried field is required"]
        },
        description: {
            type: String,
            required: [true, "isMarried field is required"]
        }

    },
    {
        timestamps: true,
    }
);

export default reviewSchema;