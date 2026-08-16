const Contact =  require("../../Controller/Contact")

const Lift = require ("express").Router()




Lift.use("/Contact",Contact)




module.exports = Lift