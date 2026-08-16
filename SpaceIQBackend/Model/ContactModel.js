const { Schema,model } = require("mongoose")


const ContactModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company :{
        type:String,
        required:true
    },
    subject :{
        type:String,
        required:true

    },
    message :{
        type:String,
        required:true
    }

})


module.exports = model("Contact",ContactModel)