const Demo =require("../../Controller/Demo")

const Lift = require("express").Router()



Lift.use("/Demo",Demo)




module.exports  = Lift