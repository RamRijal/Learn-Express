import { Router } from "express";

import { createWebuser, deleteWebuser, readWebuser, readWebuserDetail, updateWebuser } from "../controller/webuserController.js";

let webuserRouter = Router();

webuserRouter
.route("/")
.post(createWebuser)

.get(readWebuser)

webuserRouter
.route("/:webuserId")
.delete(deleteWebuser)
.get(readWebuserDetail)
.patch(updateWebuser)


export default webuserRouter;

// Webuser.create(webuserData)
// Webuser.find({}) - gives all data from database
// Webuser.findById(webuserData) - gives data of specific id
// Webuser.findByIdAndUpdate(webuserData)
// Webuser.findByIdAndDelete(webuserData)