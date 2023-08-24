const AuthRouters = require("express").Router()
const { authController } = require("../auth/auth")

AuthRouters.route("/signup").post(authController)

module.exports = AuthRouters