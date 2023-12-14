import { Router } from "express";

import { createUser, deleteUser, loginUser, myProfile, readUser, readUserDetail, updateUser } from "../controller/userController.js";

let userRouter = Router();

userRouter
.route("/")
.post(createUser)

.get(readUser)

userRouter
.route("/login")
.post(loginUser)

userRouter
.route("/myProfile")
.get(myProfile)

userRouter
.route("/:userId")
.delete(deleteUser)
.get(readUserDetail)
.patch(updateUser)


export default userRouter;

// User.create(userData)
// User.find({}) - gives all data from database
// User.findById(userData) - gives data of specific id
// User.findByIdAndUpdate(userData)
// User.findByIdAndDelete(userData)