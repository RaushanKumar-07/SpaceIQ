const joi = require("joi")


const RegisterValidation = joi.object({
    name: joi.string().required(),
    email:joi.required(),
    password:joi.required(),
    confirmPassword:joi.required(),

})

const ContactValidation = joi.object({

    name: joi.string().required(),
    email:joi.string().required(),
    company: joi.string().required(),
    subject: joi.string().required(),
    message: joi.string().required(),
     
})
const LoginValidation = joi.object({

    email:joi.string().required(),
    password:joi.string().required()
})

 const DemoValidation = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
    company: joi.string().required(),
    industry: joi.string().required(),
    warehousesize: joi.string().required(),
    date: joi.string().required(),
    time: joi.string().required(),
    notes: joi.string().required()
     })

module.exports = {RegisterValidation,ContactValidation,LoginValidation,DemoValidation}