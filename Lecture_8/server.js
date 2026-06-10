import express from "express"
const app=express()
 

app.get("/ahammad",(req,res)=>{
    res.send("this is first crud operation in express js")
})
const port =2000

app.listen(port,()=>{
    console.log(`server is running on ${port}`)

})