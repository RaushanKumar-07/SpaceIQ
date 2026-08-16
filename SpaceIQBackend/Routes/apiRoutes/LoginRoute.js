const Register = require("../../Controller/Register")
const Login = require("../../Controller/Login")
const Lift = require("express").Router()


Lift.use("/Register",Register)
 Lift.use("/Login",Login)




module.exports = Lift