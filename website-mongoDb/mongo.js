let express = require("express");
let app = express();
let router = express.Router();
let bodyParser = require("body-parser");
let obj = require("mongoose");
let data = [];

app.use(bodyParser.urlencoded({ extended: true }));

obj.Promise = global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption = {       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
/*
index.html                  get 
retreive all course         get
create, delete and update   post 

*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/");
})
app.get("/storeDetails", (req, res) => {
    res.sendFile(__dirname + "/store.html");
})
app.post("/storeDetails", (req, res) => {
    var name = req.body.name;
    var id = req.body.id;
    var description = req.body.description;
    var price = req.body.price;
    console.log(name, id, description, price);
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
    obj.connect(url, mongooseDbOption);
    let db = obj.connection;    // connected to database. 
    db.on("error", (err) => console.log(err));
    db.once("open", () => {

        //Defined the Schema 
        let ProductSchema = obj.Schema({
            _id: Number,
            cname: String,
            description: String,
            price: Number
        });
        // Creating Model using schema 
        let Course = obj.model("", ProductSchema, "Course");

        // Creating reference using model 
        let c1 = new Course({ _id: id, cname: name, description: description, price: price });
        c1.save((err, result) => {
            if (!err) {
                console.log("course inserted successfully" + result)
            } else {
                console.log(err);
            }
            obj.disconnect();       //close the connectiond..
        })

    })
    res.sendFile(__dirname+"/index.html")
})
app.get("/deleteDetails", (req, res) => {
    res.sendFile(__dirname + "/delete.html");
})
app.post("/deleteDetails", (req, res) => {
    let id = req.body.id;
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
        obj.connect(url, mongooseDbOption);
        let db = obj.connection;    // connected to database. 
        db.on("error", (err) => console.log(err));
        db.once("open", () => {
    
            //Defined the Schema 
            let ProductSchema = obj.Schema({
                _id: Number,
                cname: String,
                description: String,
                price: Number
            });
            // Creating Model using schema 
            let Course = obj.model("", ProductSchema, "Course");
            Course.deleteOne({_id: id}, (err, result) => {
                if(!err){
                    if(result.deletedCount > 0){
                        res.send("Record deleted");
                    } else {
                        res.send("Record not present")
                    }
                } 
                obj.disconnect();
            })
    
        })
        res.sendFile(__dirname+"/index.html")
})
app.get("/update", (req,res) =>{
    res.sendFile(__dirname + "/update.html");
})
app.post("/update", (req, res) => {
    let id = req.body.id;
    let price = req.body.price;
    obj.connect(url, mongooseDbOption);
        let db = obj.connection;    // connected to database. 
        db.on("error", (err) => console.log(err));
        db.once("open", () => {
    
            //Defined the Schema 
            let ProductSchema = obj.Schema({
                _id: Number,
                cname: String,
                description: String,
                price: Number
            });
            // Creating Model using schema 
            let Course = obj.model("", ProductSchema, "Course");
            Course.updateOne({_id: id}, {$set:{price: price}},(err, result) => {
                if(!err){
                    if(result.deletedCount > 0){
                        res.send("Data Updated");
                    } else {
                        res.send("Not updated")
                    }
                } 
                obj.disconnect();
            })
    
        })
        res.sendFile(__dirname+"/index.html")
})

app.get("/get", (req, res) => {
    /*
        retrieve records from mongodb and store in array 
        
        res.json(arrayName);

    */
        obj.connect(url, mongooseDbOption);
        let db = obj.connection;    // connected to database. 
        db.on("error", (err) => console.log(err));
        db.once("open", () => {
    
            //Defined the Schema 
            let ProductSchema = obj.Schema({
                _id: Number,
                cname: String,
                description: String,
                price: Number
            });
            // Creating Model using schema 
            let Course = obj.model("", ProductSchema, "Course");
    
            // Creating reference using model 
            Course.find({}, (err, result) => {
                if(!err){
                    data.push(result);
                } else {
                    console.log("Error is: " + err) 
                }
                obj.disconnect();
            })
    
        })
        res.json(data)
})
app.listen(9090, () => console.log("running.."));