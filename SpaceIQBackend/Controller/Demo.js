const DemoModel = require("../Model/DemoModel")
const {DemoValidation} = require("../Services/ValidationSchema")

const Demo = async (req,res) =>{
    try {
        const Demo_data = await DemoValidation.validateAsync(req.body)

        const {name,email,phone,company,industry,warehousesize,date,time,notes } = Demo_data

        const BookDemo = new DemoModel({
            name,
            email,
            phone,
            company,
            industry,
            warehousesize,
            date,
            time,
            notes
        })

        await BookDemo.save()
        res.status(200).json({
            success:true,
            message:"your Demo is Booked successfully"
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = Demo