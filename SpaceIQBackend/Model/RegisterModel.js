const {Schema, model} = require("mongoose")


const RegisterModel =  new Schema({
     name:{
        type: String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },

}) 



module.exports = model("users",RegisterModel)