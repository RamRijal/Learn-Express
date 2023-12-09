import { Product } from "../schema/model.js";

export let createProduct = async (req, res) => {

    let productData = req.body;

    try {
        let result = await Product.create(productData);
        res.json({
            success: true,
            message: "product created successfully.",

        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export let readProduct = async (req, res) => {
    let result = await Product.find({});  
   

    try {
        res.json(
            {
                success: true,
                message: "product read successfully",
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

export let readProductDetail = async (req, res) => {
    let productId = req.params.productId;
    try {
        let result = await Product.findById(productId);
        res.json({
            success: true,
            message: "product read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateProduct = async (req, res) => {
    let productId = req.params.productId;
    let update = req.body;
    try {
        let data = await Product.findByIdAndUpdate(productId, update);
        res.json({
            success: true,
            message: "product updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteProduct = async (req, res) => {

    let productId = req.params.productId;

    try {
        let result = await Product.findByIdAndDelete(productId);
        res.json({
            success: true,
            message: "product deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};