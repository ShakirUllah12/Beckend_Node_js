import express from"express"
const app=express()
app.get("/",(req,res)=>{
    res.send("working on my own way")
})
app.get("/shakir",(req,res)=>{
  res.send("My name is shakir ullah i am a mern stack web developer")
})
  const port=3000

  app.listen(port,()=>{
    console.log(`port is running ${3000} `)
  })