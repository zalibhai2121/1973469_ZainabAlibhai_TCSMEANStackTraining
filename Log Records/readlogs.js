let fs = require("fs");
let data = fs.readFileSync("project.json");
debugger;
console.log(data.toString());
debugger;
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
debugger;
console.log("Number of records are "+ anotherJSON.length);
console.log(anotherJSON[0].first_name);