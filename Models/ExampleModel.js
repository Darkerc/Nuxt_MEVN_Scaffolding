const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Example_Schema = new Schema({
    name: { type: String }
});

module.exports = mongoose.model("Example_Schema",Example_Schema);