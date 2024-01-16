import { serverLink } from "../utilities/constant.js";

  export let handlefile = (req, res) => 
{ 
    //handelfile function takes file's names from the postman's document field which was stored in public folder using upload(multar)  and after mapping gives the output as a link and a success message
    let links = req.files.map((value, i) => {
        return (`${serverLink}/${value.filename}`);

    })
    res.json({
        success: true,
        message: "File uploaded successfully",
        result: links
    })
};




///