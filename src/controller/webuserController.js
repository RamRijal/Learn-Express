import { Webuser } from "../schema/model.js";

export let createWebuser = async (req, res) => {

    let webuserData = req.body;

    try {
        let result = await Webuser.create(webuserData);
        res.json({
            success: true,
            message: "webuser created successfully.",

        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export let readWebuser = async (req, res) => {
    // let result = await Webuser.find({});  
    // let result = await Webuser.find({}).sort("name ");

    // let result = await Webuser.find({}).sort("name age");

    // let result = await Webuser.find({name}).select("age");  
    // let result = await Webuser.find({}).select("name age -_id"); eliminates id
    // let result = await Webuser.find({}).limit(5).skip(3);  
let query=req.query;
let brake=query.brake;
let page=query.page;

    // let result = await Webuser.find(query);  
    let result = await Webuser.find({}).limit(brake).skip(4);  

    try {
        res.json(
            {
                success: true,
                message: "webuser read successfully",
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

export let readWebuserDetail = async (req, res) => {
    let webuserId = req.params.webuserId;
    try {
        let result = await Webuser.findById(webuserId);
        res.json({
            success: true,
            message: "webuser read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateWebuser = async (req, res) => {
    let webuserId = req.params.webuserId;
    let update = req.body;
    try {
        let data = await Webuser.findByIdAndUpdate(webuserId, update);
        res.json({
            success: true,
            message: "webuser updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteWebuser = async (req, res) => {

    let webuserId = req.params.webuserId;

    try {
        let result = await Webuser.findByIdAndDelete(webuserId);
        res.json({
            success: true,
            message: "webuser deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};