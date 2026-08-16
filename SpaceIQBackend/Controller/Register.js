const RegisterModel = require("../Model/RegisterModel")
const {RegisterValidation} = require("../Services/ValidationSchema")



const Register = async(req,res) =>{
    try{
        const details = await RegisterValidation.validateAsync(req.body)

        const { name, email, password, confirmPassword} = details

        if(password!==confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and confirm password doesn't match"
            })
        }

        const checkUser = await RegisterModel.findOne({
            email
        })

        if(checkUser){
            return res.status(400).json({
                success: false,
                message: "User already registered.."
            })
        }

        const user = new RegisterModel({
            name,
            email,
            password
        })

        await user.save();

        res.status(201).json({
            success: true,
            message: "User created successfully.."
        })

    }catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


module.exports=Register