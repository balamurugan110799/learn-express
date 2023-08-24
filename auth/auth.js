const userDataModel = require("../model/userDataModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
exports.authController =async (req, res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.confromPassword,10);
        const newData =await userDataModel.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        })
        var token = jwt.sign({ id: newData._id }, process.env.SERECT);
        res.status(201).json({
            status:"success",
            data:newData
        })
    }catch(err){
        res.status(404).json({
            status:"failed",
            message:err.message
        })
    }
        
}