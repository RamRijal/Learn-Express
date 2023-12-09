import { Router } from "express";

let schoolsRouter = Router();

schoolsRouter
.route("/")
.post((req, res, next)=>{
    res.json(
    {
        success:true, 
        message:"school created successfully"
    }
    );
})
.get((req, res, next)=>{
    res.json(
    {
        success:true, 
        message:"school read successfully"
    }
    );
})
.patch((req, res, next)=>{
    res.json(
    {
        success:true, 
        message:"school updated successfully"
    }
    );
})
.delete((req, res, next)=>{
    res.json(
    {
        success:true, 
        message:"school deleted successfully"
    }
    );
})


export default schoolsRouter;