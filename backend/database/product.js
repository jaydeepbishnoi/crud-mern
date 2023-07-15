const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    post:String,
    address:String
})
module.exports = mongoose.model("Products", productschema);