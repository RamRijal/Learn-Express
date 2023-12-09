import { Router } from "express";

import { createProduct, deleteProduct, readProduct, readProductDetail, updateProduct } from "../controller/productController.js";

let productRouter = Router();

productRouter
.route("/")
.post(createProduct)

.get(readProduct)

productRouter
.route("/:productId")
.delete(deleteProduct)
.get(readProductDetail)
.patch(updateProduct)


export default productRouter;

// Product.create(productData)
// Product.find({}) - gives all data from database
// Product.findById(productData) - gives data of specific id
// Product.findByIdAndUpdate(productData)
// Product.findByIdAndDelete(productData)