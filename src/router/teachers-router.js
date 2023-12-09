// teacher -> with field name, age, isMarried, subject
// book -> name, author, price, isAvailable
// try to create, read all and delete and hit the api through postman

import { Router } from "express";
import { Teacher } from "../schema/model.js";

let teacherRouter = Router();

teacherRouter
.route("/")
.post(async(req, res)=>{
    let teacherData = req.body;
    try{
        let result = await Teacher.create(teacherData);
        res.json({
            success: true,
            message: "Teacher created successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})

.get(async(req, res)=>{
    try {
        let result = await Teacher.find({});
        res.json({
            success: true,
            message: "teacher read successfully",
            result: result
        });  
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})

teacherRouter
.route("/:teacherId")
.delete(async (req, res)=>{
    let teacherId = req.params.teacherId;
    try {
        let result = await Teacher.findByIdAndDelete(teacherId);
        res.json({
            success: true,
            message: "teacher deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})


export default teacherRouter;
