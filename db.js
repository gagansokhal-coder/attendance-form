const mongoose=require("mongoose");


mongoose.connect("process.env.MONGO_URL");
const createschema=new mongoose.Schema({
    name:String,
    roll:Number,
    reason:String,
    attendance:Number,
    branch:String
})

const user=mongoose.model("Student",createschema);

module.exports={user}
