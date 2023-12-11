import { Router } from "express";

let firstRouter = Router();

firstRouter
.route("/") // localhost:8000/product
.post((req, res,next)=>{
    // console.log(req.body);
    // console.log(req.query);
    console.log('home post');
    res.json('home post'); // this displays on postman
    req.name="hari"
    req.age=13
    req.address="patan"
    next()

},
(req,res)=>{
    console.log(req.name);
    console.log(req.age);
    console.log(req.address);
    res.json("Welcome!")

}
)


firstRouter
.route("/name") // localhost:8000/product/name
.post((req, res)=>{
    res.json('name post'); 
});

// here we have static route parameter (product) and dynamic route parameter (name)
// in dynamic route parameter, we can write anything.
firstRouter
.route("/product/:name") // localhost:8000/product/product/name(can be anything)
.post((req, res)=>{
    console.log(req.params); // this gets value of dynamic parameter
    res.json("I'm product"); // url we took here is, localhost:8000/product/nitan
})


export default firstRouter;

// defining task for each request is called making api.