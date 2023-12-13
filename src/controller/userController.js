import { User } from "../schema/model.js";
import bcrypt from "bcrypt"
import { sendEmail } from "../utilities/sendemail.js";

export let createUser = async (req, res) => {

    let userData = req.body;

    let Password = userData.password

    try {

        let hashPassword = await bcrypt.hash(Password, 10)
        userData.password = hashPassword
        let result = await User.create(userData);

        await sendEmail({
            from:"Un <himalkixori@gmail.com>",
            to:[req.body.email],
            subject:"Email verification",
            html:`<h1>SUCCESSFULLY REGISTERED!</h1>`,
            // attachments:[{
            //     filename:"example.com",
            //     path:""
            // }]
        })
        res.json({
            success: true,
            message: "user created successfully.",
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


export let readUser = async (req, res) => {
    try {
        let result = await User.find({});
        res.json(
            {
                success: true,
                message: "user read successfully",
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

export let readUserDetail = async (req, res) => {
    let userId = req.params.userId;
    try {
        let result = await User.findById(userId);
        res.json({
            success: true,
            message: "user read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export let updateUser = async (req, res) => {
    let userId = req.params.userId;
    let update = req.body;
    try {
        let data = await User.findByIdAndUpdate(userId, update);
        res.json({
            success: true,
            message: "user updated successfully",
            result: data
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

export let deleteUser = async (req, res) => {

    let userId = req.params.userId;

    try {
        let result = await User.findByIdAndDelete(userId);
        res.json({
            success: true,
            message: "user deleted successfully",
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
export let loginUser = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    try {
        let user = await User.findOne({ email: email })
        console.log(user);
        //Output either null or object
        let hashPassword = user.password
        if (user === null) {
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
                    message: "User login successful"
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