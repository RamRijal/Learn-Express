import { Router } from "express";

import { createWebuser, deleteSpecificUser, loginUser, myProfile, passwordUpdate, profileUpdate, readAllWebusers, readSpecificWebuser, updateSpecificUser, verifyEmail } from "../controller/webuserController.js";

let webuserRouter = Router();

webuserRouter
.route("/")
.post(createWebuser)
.get(readAllWebusers)

webuserRouter.route("/verify-email").patch(verifyEmail)
webuserRouter
.route("/login")
.post(loginUser)
// // webuserRouter.route("/logout").post(logoutUser)
// webuserRouter.route("/my-profile").get(isAuthenticated,myProfile);
// webuserRouter.route("/update-profile").patch(isAuthenticated,profileUpdate);
// webuserRouter.route("/update-password").patch(isAuthenticated,passwordUpdate);

webuserRouter
.route("/:webuserId")
.delete(deleteSpecificUser)
.get(readSpecificWebuser)
.patch(updateSpecificUser)
.delete(deleteSpecificUser)

export default webuserRouter;

// Webuser.create(webuserData)
// Webuser.find({}) - gives all data from database
// Webuser.findById(webuserData) - gives data of specific id
// Webuser.findByIdAndUpdate(webuserData)
// Webuser.findByIdAndDelete(webuserData)