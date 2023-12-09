import { Router } from "express";

let vehiclesRouter = Router();

vehiclesRouter
.route("/")
.post((req,res)=>{
    res.json(
        {
            success: true,
            message: "vehicles are created successfully"
        }
    )
})

.get((req, res)=>{
    res.json(
        {
            success:true, 
            message:"vehicles read successfully"
        }
    )
})

.patch((req, res)=>{
    res.json(
        {
            success:true,
            message:"vehicles updated successfully"
        }
    )
})

.delete((req, res)=>{
    res.json(
        {
            success:true,
            message:"vehicles deleted successfully"
        }
    )
})

export default vehiclesRouter;