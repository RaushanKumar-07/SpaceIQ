const ContactModel = require("../Model/ContactModel")
const {ContactValidation} = require("../Services/ValidationSchema")


const Contact = async(req,res) =>{
   try{
     const UserMessage = await ContactValidation.validateAsync(req.body)
     const {name,email,company,subject,message} = UserMessage
   
   const Message = new ContactModel({
    name,
    email,
    company,
    subject,
    message
   })
   await Message.save();
   res.status(200).json({
    success:true,
    message:"message sent ,We will contact you shortly"
   })
}
catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
 }
}

module.exports = Contact 
