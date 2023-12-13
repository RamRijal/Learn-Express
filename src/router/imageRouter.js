import { Router } from "express";
import upload from "../middleware/upload.js";
import { imagefile } from "../controller/imageController.js";

let imageRouter = Router();
imageRouter
    .route("/")
    .post(upload.array("images", 4), imagefile)
export default imageRouter;

