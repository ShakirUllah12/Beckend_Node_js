import http from "http";

const server = http.createServer((req,res)=>{
    res.end("your request is working")
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});