const mongoose = require("mongoose")
const validator = require("validator")
const user = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Name is Required"],
        unique:true,
        maxlength :[10,"Name must have more then 10 Characters"],
        minlength:[4,"Name should be atleast 4 Characters"],
        validate:[validator.isAfter,"Name should be in Alphabets"],
    }, age: {
        type: Number,
        require: [true,"Age is Required"],
    }, gender: {
        type: String,
        require: [true,"Gender is Required"],
        unique:true,
        enum:["Male","Female"]
    }
})

module.exports = mongoose.model("user", user)