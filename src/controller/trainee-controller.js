import { Trainee } from "../schema/model.js";

export let createTrainee = async(req, res)=>{
    let traineeData = req.body;
    try {
        let result = await Trainee.create(traineeData);
        res.json({
            success: true,
            message: "Trainee created successfully"
        })
    } catch (error) {
        res.json({
            success: true,
            message: error.message
        })
    }
};

export let readAllTrainee = async(req, res)=>{
    let result = await Trainee.find({});
    try {
        res.json({
            success: true,
            message: "Trainee read successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export let readTrainee = async (req, res)=>{
    let traineeId = req.params.traineeId;

    try {
        let result = await Trainee.findById(traineeId);
        res.json({
            success: true,
            message: "Trainee read successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateTrainee = async (req, res)=>{
    let traineeId = req.params.traineeId;
    let updateData = req.body;
    try {
        let result = await Trainee.findByIdAndUpdate(traineeId, updateData);
        res.json({
            success: true,
            message: "Trainee updated successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });      
    }
};

export let deleteTrainee = async(req, res)=>{
    let traineeId = req.params.traineeId;
    try {
        let result = await Trainee.findByIdAndDelete(traineeId);
        res.json({
            success: true,
            message: "Trainee deleted successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};