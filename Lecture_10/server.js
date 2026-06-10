import express from "express"
const app=express()
let products=[
    {title:"16",price:3456},
    {title:"156",price:34563456},
    {title:"76",price:3454566},
]
app.get("/",(req,res)=>{
    let name="shakir"
    res.render("index.ejs",{name,products})
})

const port=5000

app.listen(port,()=>{
    console.log(`server is  running on port ${port}`)
})