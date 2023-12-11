import { Router } from "express";

import { createFile, deleteFile, loginFile, readFile, readFileDetail, updateFile } from "../controller/fileController.js";
import upload from "../middleware/upload.js";

let fileRouter = Router();
let handlefile=(req,res)=>{};
fileRouter
.route("/")
.post(upload.array("document",4),handlefile)

.get(readFile)


export default fileRouter;

// File.create(fileData)
// File.find({}) - gives all data from database
// File.findById(fileData) - gives data of specific id
// File.findByIdAndUpdate(fileData)
// File.findByIdAndDelete(fileData)