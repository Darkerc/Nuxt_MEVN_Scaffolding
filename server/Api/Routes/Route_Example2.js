const express = require('express');
const router = express.Router();
const root = "../../../Models/";
const ExampleModel = require(root +'ExampleModel.js')

router.post('/Example2', async(req, res) => {
    try {
        let Model = await ExampleModel.create({
            name: "Example Name"
        })
        res.json({
            Code:200,
            Message:"Name created",
            Model
        })

    } catch (error) {
        res.json({
            Code:500,
            Message:"Something go wrong!!",
            Error: error
        })
    }    
});

module.exports = router;