let app = require("express")();
let http = require("http").Server(app); //to load the library we have to run the port number using http module
let io = require("socket.io")(http);
let obj = require("mongoose");

obj.Promise = global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption = {       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}

app.get("/", (req,res) => {
    res.sendFile(__dirname  + "/chat.html");
});

io.on("connection", (socket)=>{
    console.log("Client connected to application....");

    socket.on('chatMessage', (msg) => {
        obj.connect(url, mongooseDbOption);
    let db = obj.connection;    // connected to database. 
    db.on("error", (err) => console.log(err));
    db.once("open", () => {

        //Defined the Schema 
        let ProductSchema = obj.Schema({
            _id: Number,
            name: String,
            message: String
        });
        // Creating Model using schema 
        let Message = obj.model("", ProductSchema, "Message");

        // Creating reference using model 
        let m1 = new Message({ _id: msg.id, name: msg.name, message: msg.message});
        m1.save((err, result) => {
            if (!err) {
                console.log("course inserted successfully" + result)
            } else {
                console.log(err);
            }
            obj.disconnect();       //close the connectiond..
        })

    })
        console.log('message: ' + msg.message + " the name is: " + msg.name);
     });
    //socket.on("chat message", (msg) => console.log("Chat message :" + msg));
    //socket.on("chat name",  (msg) => console.log("Chat name :" + msg))
})

http.listen(9090, ()=> console.log("Server running on port number 9090"));