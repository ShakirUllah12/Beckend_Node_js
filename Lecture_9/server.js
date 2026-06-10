import express from "express"
import path from path
const app=express()

const products=[
    {title:"i phone 16",price:324},
    {title:"i phone 16",price:324},
    {title:"i phone 16",price:324}
]

app.get("/",(req,res)=>{
    // res.json({
    //     message:"data is send",
    //     products:products,
    //     success:"true"
    // })
    // res.send("<h1>My name is shakir ullah</h1>")
    const dir=path.resolve()
    const url=path.join(dir,"./index.html")
    console.log("fullPath =",url)
    res.sendFile("index.html")
})

const port=3000
app.listen(port,()=>{
    console.log(`server is runnibng on ${port}`)
})