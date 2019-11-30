# Routes

> Here is all the routes of express app

## Index

> Here is the route root scaffolding


## Usage

Index.js is the config file with express 

Routes folder is the directory with express routes

Create a route with:

```javascript
const express = require('express');
const router = express.Router();
```

an use a router instance like this

```javascript
router.post('/Example', async(req, res) => {
    res.json({
        Code:200,
        Message:"Hello world from Route_Example"
    })
});
```

finally export the script using

```javascript
module.exports = router;
```




