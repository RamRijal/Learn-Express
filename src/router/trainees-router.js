import { Router } from "express";
import { createTrainee, deleteTrainee, readAllTrainee, readTrainee, updateTrainee } from "../controller/trainee-controller.js";

let traineeRouter = Router();

traineeRouter
.route("/")
.post(createTrainee)
.get(readAllTrainee)

traineeRouter
.route("/:traineeId")
.get(readTrainee)
.patch(updateTrainee)
.delete(deleteTrainee)

export default traineeRouter;



/*traineeRouter
.route("/")
.post((req, res, next)=>{
    // console.log(req.body);
    res.json({success: true,
    message: "trainees created successfully"
});
})

.get((req, res, next)=>{
    // console.log(req.body);
    res.json(
    {
        success: true,
        message: "trainees read successfully"
    });
})
.patch((req, res)=>{
    res.json(
    {
        success: true,
        message: "trainees updated successfully"
    });
})
.delete((req, res)=>{
    res.json(
    {
        success: true,
        message: "trainees deleted successfully"
    });
});
 */
// export default traineeRouter;
