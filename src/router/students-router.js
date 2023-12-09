import { Router } from "express";
import { Student } from "../schema/model.js";

let studentRouter = Router();

studentRouter
.route("/")
.post(async (req, res)=>{

    let studentData = req.body;

    try {
        let result = await Student.create(studentData);
        res.json({
            success: true,
            message: "Student created successfully."
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})
.get(async (req, res)=>{
    try {
        let result = await Student.find({});
        res.json(
        {
            success: true,
            message: "student read successfully",
            result: result
        });
    } catch (error) {
        res.json(
        {
            success: false,
            message: error.message
        });
    }
})

studentRouter
.route("/:studentId")
.delete(async (req, res)=>{

    let studentId = req.params.studentId;

    try {
        let result = await Student.findByIdAndDelete(studentId);
        res.json({
            success: true,
            message: "student deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }    
})
.get(async (req, res)=>{
    let studentId = req.params.studentId;
    try{
        let result = await Student.findById(studentId);
        res.json({
            success: true,
            message: "Student read successfully",
            result: result
        });
    } catch(error){
        res.json({
            success: false,
            message: error.message
        });
    }
})
.patch(async (req, res)=>{
    let studentId = req.params.studentId;
    let update = req.body;
    try {
        let data = await Student.findByIdAndUpdate(studentId, update);
        res.json({
            success: true,
            message: "Student updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


export default studentRouter;

// Student.create(studentData)
// Student.find({}) - gives all data from database
// Student.findById(studentData) - gives data of specific id
// Student.findByIdAndUpdate(studentData)
// Student.findByIdAndDelete(studentData)