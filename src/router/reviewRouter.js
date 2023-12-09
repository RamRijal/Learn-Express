import { Router } from "express";

import { createReview, deleteReview, readReview, readReviewDetail, updateReview } from "../controller/reviewController.js";

let reviewRouter = Router();

reviewRouter
.route("/")
.post(createReview)

.get(readReview)

reviewRouter
.route("/:reviewId")
.delete(deleteReview)
.get(readReviewDetail)
.patch(updateReview)


export default reviewRouter;

// Review.create(reviewData)
// Review.find({}) - gives all data from database
// Review.findById(reviewData) - gives data of specific id
// Review.findByIdAndUpdate(reviewData)
// Review.findByIdAndDelete(reviewData)