import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/shakir") {
        res.end("Shakir Welcome");
    } 
    else if (req.url === "/yahya") {
        res.end("Welcome Yahya");
    } 
    else {
        res.end("Invalid Request");
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});