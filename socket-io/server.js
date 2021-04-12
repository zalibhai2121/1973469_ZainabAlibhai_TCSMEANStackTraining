let app = require("express")();
let http = require("http").Server(app); //to load the library we have to run the port number using http module
let io = require("socket.io")(http);

app.get("/", (req,res) => {
    res.sendFile(__dirname  + "/index.html");
});

io.on("connection", (socket)=>{
    console.log("Client connected to application....");
    socket.on("chat message", (msg) => console.log("Chat message :" + msg));
})

http.listen(9090, ()=> console.log("Server running on port number 9090"));