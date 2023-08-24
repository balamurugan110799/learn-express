const mongoose = require("mongoose")
const vaildator = require("validator")
const userData = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [vaildator.isEmail, "Vaild the Email"]
    },
    photo: {
        type: String,
    },
    password: {
        type: String,
        require: [true, "Enter the password"],
        minlenght: 8,
    },
    confromPassword: {
        type: String,
        require: [true, "Enter the confirm  password"],
        validate:{
            validator:function(val){
                return val === this.password
            },
            message:"Password & Confrom Password Not match"
        }
    }
})

module.exports = mongoose.model("userData", userData)