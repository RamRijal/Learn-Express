import { Student } from "../schema/model.js";

export let createStudent = async (req, res) => {

    let studentData = req.body;

    try {
        let result = await Student.create(studentData);
        res.json({
            success: true,
            message: "student created successfully.",

        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export let readStudent = async (req, res) => {
    let result = await Student.find({});  
   

    try {
        res.json(
            {
                success: true,
                message: "student read successfully",
                result: result
            })
    } catch (error) {
        res.json(
            {
                success: false,
                message: error.message
            });
    }
};

export let readStudentDetail = async (req, res) => {
    let studentId = req.params.studentId;
    try {
        let result = await Student.findById(studentId);
        res.json({
            success: true,
            message: "student read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateStudent = async (req, res) => {
    let studentId = req.params.studentId;
    let update = req.body;
    try {
        let data = await Student.findByIdAndUpdate(studentId, update);
        res.json({
            success: true,
            message: "student updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteStudent = async (req, res) => {

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
};