const mongoose = require('mongoose');
const consola = require('consola')
const URL_BBDD ='mongodb://localhost:27017/ExampleBBDD';
const options = {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}

async function initConnection(){
    try {
        await mongoose.connect(URL_BBDD,options)
        consola.success({
            message: "Connection with MongoDB success",
            badge: true
        })
    }catch(e){
        consola.error({
            message: "Something go wrong!!",
            badge: true
        })
        consola.error({
            message: e
        })
    }
}

module.exports = initConnection;
