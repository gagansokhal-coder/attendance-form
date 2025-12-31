


const express=require("express")

const app=express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const {validschema}=require("./validate");
const {user}=require("./db")



app.post("/submit",async (req,res)=>{
    const {name,roll, attendance, reason,branch}=req.body;
    const data=validschema.safeParse(req.body);

    if(!data.success){
        res.status(400).json({
            msg:"invalid inputs"
        })
        return
    }

    const newstudent=await user.create({
        name,roll,attendance,reason,branch
    })


    res.redirect("https://69555df858638b30e39e20e9--peppy-chaja-ccc735.netlify.app/")

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});