const { model, Schema } = require("mongoose")


const DemoModel = new Schema({
    name: {
        type:String,
        required:true },
    email : {
        type:String,
        required:true },
    phone : {
        type:String,
        required: true },
    company : {
        type:String,
        required:true },
    industry : {
        type:String,
        required:true },
    warehousesize:{
        type:String,
        required:true },
    date : {
        type:String,
        required:true },
    time : {
        type:String,
        required:true },
    notes : {
        type:String,
        required:true }         

})


module.exports = model ("Demo",DemoModel)