import express from "express"
const app=express()

app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("index.ejs")})

    app.post("/submit",(req,res)=>{
        console.log(req.body)
        res.json({message:"Form submitted successfully",
            success:true})})
const port=5000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})