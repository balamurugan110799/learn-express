const Router = require("express").Router()
const {addUser, getAllUser, getAllUserID,} = require("../controller/userController")

Router.route("/addUser").post(addUser)
Router.route("/getAllUser").get(getAllUser)
Router.route("/getAllUser/:id").get(getAllUserID)


module.exports = Router