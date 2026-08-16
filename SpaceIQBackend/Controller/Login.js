const RegisterModel = require("../Model/RegisterModel")
const {LoginValidation} = require("../Services/ValidationSchema")


const Login = async (req,res)=>{
  const login_data = await LoginValidation.validateAsync(req.body)
  const {email,password} = login_data
   
   const user = await RegisterModel.findOne({
    email
   })
   if(!user){
    return res.status(400).json({
        success:false,
        message:"User not Found"
    })
   }
   
   if(user.password !== password){
    return res.status(400).json({
        success:false,
        message:"Wrong Password"
    })
   }
   res.status(200).json({
    success:true,
    message:"Login Successful",
    data:{
        id:user._id,
        name:user.name,
        email:user.email
    }

   })

}

module.exports = Login