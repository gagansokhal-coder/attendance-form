const mongoose=require("mongoose");

async function connectDB(){
    try{
await mongoose.connect(process.env.MONGO_URL);
console.log("mongodb connected");
}catch(err){
    console.error("mongo error",err);
}
}
connectDB();
const createschema=new mongoose.Schema({
    name:String,
    roll:Number,
    reason:String,
    attendance:Number,
    branch:String
})

const user=mongoose.model("Student",createschema);

module.exports={user}
