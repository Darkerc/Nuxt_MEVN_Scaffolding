# Models

> Here is where the mongo models most be defined

## Usage

Make a new js file and require these packages

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

then make a Schema and import it for his use in any route, like this...

```javascript
const Example_Schema = new Schema({
    name: { type: String }
});

module.exports = mongoose.model("Example_Schema",Example_Schema);
```

Inside the route file require the model and handle like you need

```javascript
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
```

if you want to know more about the models visit [MongoDB](www.mongodb.com) and [Mongoose](https://mongoosejs.com)
