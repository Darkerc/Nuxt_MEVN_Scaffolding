const express = require('express');
const router = express.Router();

router.post('/Example', async(req, res) => {
    res.json({
        Code:200,
        Message:"Hello world from Route_Example"
    })
});

module.exports = router;