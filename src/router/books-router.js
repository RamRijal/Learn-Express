// teacher -> with field name, age, isMarried, subject
// book -> name, author, price, isAvailable
// try to create, read all and delete and hit the api through postman

import { Router } from "express";
import { Book } from "../schema/model.js";

let bookRouter = Router();

bookRouter
.route("/")
.post(async (req, res)=>{
    let bookData = req.body
    try{
        let result = await Book.create(bookData);
        res.json({
            success: true,
            message: "Book created successfully."
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
        let result = await Book.find({});
        res.json({
            success: true,
            message: "Book read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})

bookRouter
.route("/:bookId")
.delete(async (req, res)=>{
    let bookId = req.params.bookId
    try {
        let result = await Book.findByIdAndDelete(bookId);
        res.json({
            success: true,
            message: "book deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
})

export default bookRouter;