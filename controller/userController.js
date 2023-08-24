const user = require("../model/useerModel")

exports.addUser = (req, res) => {
    user.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    })
        .then((data) => {
            res.status(200).json({
                data: data
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(404).json({
                status: "failed",
                message: err.message
            })
        })
}

exports.getAllUser = async (req, res) => {
    const getData = await user.find()
    res.status(200).json({
        status: "succes",
        data: getData
    })
}

exports.getAllUserID = async (req, res) => {
    try {
        const findData = await user.find({ _id: req.params.id })
     
        res.status(200).json({
            status:"success",
            data:findData
        })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:"404 "
        })
    }



}