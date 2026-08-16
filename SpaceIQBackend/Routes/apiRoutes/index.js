const Lift = require ("express").Router()
const LoginRoute = require("./LoginRoute")
const ContactRoute = require("./ContactRoute")
const DemoRoute = require ("./DemoRoute")

Lift.use('/LoginRoute',LoginRoute)
Lift.use('/ContactRoute',ContactRoute)
Lift.use('/DemoRoute',DemoRoute)







module.exports =  Lift