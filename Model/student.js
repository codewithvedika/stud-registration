const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollnumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("student",studentSchema)