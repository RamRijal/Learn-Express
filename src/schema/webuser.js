import { Schema } from "mongoose";

let webuser = Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required."],
  },
  password: {
    type: String,
    required: [true, "password is required."],
  },
  dob: {
    type: Date,
    required: [true, "dob is required."]
  },
  gender: {
    type: String,
    required: [true, "gender is required."]
  },
  role: {
    type: String,
    required: [false, "role is required."]
  },
  //yo part paxi controller ma as an object pass garney
  isVerifiedEmail: {
    type: Boolean,
    required: [false, "isVerifiedEmail error."]
  },
},
  {
    timestamps: true
  });

export default webuser;
