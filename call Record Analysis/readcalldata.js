let app = require("express")();
let obj = require("mongoose");
var fs = require("fs");

let data = fs.readFileSync("call_data.json");
let url = "mongodb://localhost:27017/meanstack";

let dataString = data.toString();
let dataJson = JSON.parse(dataString);

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

    for (i = 0; i < 5; i++) {
        let c1 = new CallData({ _id: dataJson[i]._id, source: dataJson[i].source,destination: dataJson[i].destination,
            sourceLocation: dataJson[i].sourceLocation, destinationLocation: dataJson[i].destinationLocation,
            callDuration: dataJson[i].callDuration,roaming: dataJson[i].roaming,callCharge: dataJson[i].callCharge});
        c1.save((err, result) => {
            if (!err) {
                console.log("Record inserteed successfully " + result);
            } else {
                console.log("Error is: " + err);
            }
            obj.disconnect();
        });
    }
})