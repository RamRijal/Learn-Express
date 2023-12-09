import { Schema } from "mongoose";

let webuserSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "name field is required"],
            //lowercase:true,
            //Uppercase:true,
            //trim:true, eliminates whitespaces 
            //minLength:2,
            //maxlength:20
            // validate: (value) => { 

            // }
        },
    age: {
            type: Number,
            required: [true, "age field is required"]
            //for numbers:
            //min:16,
            //max:77,


            //validate:(value)=>{....................Logic.............
            //     // if(value<18)
            //     {
            //         throw new Error("Age must be 18 or above")
            //     }
            // }
        // 
    },

        isMarried: {
            type: Boolean,
            required: [true, "Marriage field is required"]

        }


    },
    {
        timestamps: true
    }
    );
    
    export default webuserSchema;




    
//ALT + SHIFT + f ==Format document




    // password: {
    //     type: String,
    //     required: [true, "password field is required"]
    // },
    // roll: {
    //     type: Number,
    //     required: [true, "roll field is required"]
    // },
    // phoneNumber: {
    //     type: Number,
    //     required: [true, "phone field is required"],
    //     // min: 1000000000,
    //     // max: 9999999999
    // },
    // spouseName: {
    //     type: String,
    //     required: [true, "spouseName field is required"]
    // },
    // email: {
    //     type: String,
    //     required: [true, "email field is required"],
    //     // unique: true,
    // },
    // gender: {
    //     type: String,
    //     required: [true, "email field is required"]
    //     //default:"male",
    // },
    // location: {
    //     country: {
    //         type: String,
    //         required: [true, "country field is required"]
    //     },
    //     exactLocation: {
    //         type: String,
    //         required: [true, "exactLocation field is required"]
    //     },
    // },