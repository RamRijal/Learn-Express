import { Review } from "../schema/model.js";

export let createReview = async (req, res) => {

    let reviewData = req.body;

    try {
        let result = await Review.create(reviewData);
        res.json({
            success: true,
            message: "review created successfully.",

        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export let readReview = async (req, res) => {
    let result = await Review.find({})
    .populate("productId", "name price -_id")
    .populate("userId", "name -_id")



    try {
        res.json(
            {
                success: true,
                message: "review read successfully",
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

export let readReviewDetail = async (req, res) => {
    let reviewId = req.params.reviewId;
    try {
        let result = await Review.findById(reviewId);
        res.json({
            success: true,
            message: "review read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateReview = async (req, res) => {
    let reviewId = req.params.reviewId;
    let update = req.body;
    try {
        let data = await Review.findByIdAndUpdate(reviewId, update);
        res.json({
            success: true,
            message: "review updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteReview = async (req, res) => {

    let reviewId = req.params.reviewId;

    try {
        let result = await Review.findByIdAndDelete(reviewId);
        res.json({
            success: true,
            message: "review deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};