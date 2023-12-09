import { Router } from "express";

let bikeRouter = Router();

bikeRouter
  .route("/")
  .post(
    (req, res, next)=>{
        console.log("post bike");
        res.json("bike post response");
        next("a");
    },
    (err, req, res, next)=>{
        console.log("I'm error middleware 1");
        next();
    },
    (req, res, next)=> {
        console.log("middleware 2");
        res.json("bike post response 2");
        next("a");
    },
    (err, req, res, next)=>{
        console.log("I'm error middleware 2");
        next();
    },
    (req, res)=>{
        console.log("middleware 3");
    }
    );

export default bikeRouter;


