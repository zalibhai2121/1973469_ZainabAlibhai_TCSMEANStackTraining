let app = require("express")();
let obj = require("mongoose");

let call_data = [];
let url = "mongodb://localhost:27017/meanstack";


const mongoose = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
obj.connect(url, mongoose); //ready to connect
let db = obj.connection;
db.on("error", (err) => console.log("Error generated: " + err));
db.once("open", () => {
    // define schema
    let callSchema = obj.Schema({
        _id: Number,
        source: String,
        destination: String,
        sourceLocation: String,
        destinationLocation: String,
        callDuration: String,
        roaming: String,
        callCharge: String
    });
    //creating model using schema
    let CallData = obj.model("", callSchema, "CallData");
    CallData.find({}, (err, result) => {
        if(!err){
            result.forEach(doc => call_data.push(doc));
        } else {
            console.log("Error is: " + err) 
        }
        obj.disconnect();
    })
})

app.get("/", (req, res) => {
    res.json(call_data);
})
app.listen(9090, () => { console.log("Running on port number 9090") });
