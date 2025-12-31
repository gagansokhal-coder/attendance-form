const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://grdb:1008Gagan%401008@cluster1.rvfoweo.mongodb.net/attendance_form");
const createschema=new mongoose.Schema({
    name:String,
    roll:Number,
    reason:String,
    attendance:Number,
    branch:String
})

const user=mongoose.model("Student",createschema);

module.exports={user}