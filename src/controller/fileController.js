import { File } from "../schema/model.js";
import bcrypt from "bcrypt"

export let createFile = async (req, res) => {

    let fileData = req.body;

    let Password = fileData.password

    try {

        let hashPassword = await bcrypt.hash(Password, 10)
        fileData.password = hashPassword
        let result = await File.create(fileData);
        res.json({
            success: true,
            message: "file created successfully.",
            result: result
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export let readFile = async (req, res) => {
    try {
        let result = await File.find({});
        res.json(
            {
                success: true,
                message: "file read successfully",
                result: result
            });
    } catch (error) {
        res.json(
            {
                success: false,
                message: error.message
            });
    }
};

export let readFileDetail = async (req, res) => {
    let fileId = req.params.fileId;
    try {
        let result = await File.findById(fileId);
        res.json({
            success: true,
            message: "file read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateFile = async (req, res) => {
    let fileId = req.params.fileId;
    let update = req.body;
    try {
        let data = await File.findByIdAndUpdate(fileId, update);
        res.json({
            success: true,
            message: "file updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteFile = async (req, res) => {

    let fileId = req.params.fileId;

    try {
        let result = await File.findByIdAndDelete(fileId);
        res.json({
            success: true,
            message: "file deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};
//////////LOGIN//////////////////


// email password==>POST
// then get
//then check email
//if email correct check password else give error
//check password types with hashed password in database registered eaarlier
//if same ==>login successful
//else give error
export let loginFile = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    try {
        let file = await File.findOne({ email: email })
        console.log(file);
        //Output either null or object
        let hashPassword = file.password
        if (file === null) {
            res.json({
                success: false,
                message: "Email or Password doesn't match"
            })
        }
        else {
            let isValidPassword = await bcrypt.compare(password, hashPassword)
            if (isValidPassword) {
                res.json({
                    success: true,
                    message: "File login successful"
                })
            }
            else {
                res.json({
                    success: false,
                    message: "Email or Password doesn't match"
                })
            }

        }
    } catch (error) {
        res.json({
            success: false,
            message: "Email or Password doesn't match"
        })
    }
}