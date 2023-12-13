
export let imagefile = (req, res) => {
    let images = req.files.map((value, i) => {
        return (`http://localhost:8000/${value.filename}`);
    })
    res.json({
        success: true,
        message: "Images uploaded successfully",
        result: images
    })
};

