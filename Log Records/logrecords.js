var imp = require("./files.js");
let day = imp.date.format(new Date(), 'DD-MM-YYYY');
let time = imp.date.format(new Date(), 'hh:mm A [GMT]Z');
let emp = new Array();

debugger;
let howmany = imp.obj.question("How many data entries?");
for (i = 0; i < howmany; i++) {
    console.log("The "+ i + " entry");
    let fname = imp.obj.question("Enter the first name: ");
    let lname = imp.obj.question("Enter the last name: ");
    let gender = imp.obj.question("Enter the gender: ");
    let email = imp.obj.question("Enter the email: ");
    debugger;
    let emp1 = { "first_name": fname, "last_name": lname, "gender": gender, "email": email, "date": day, "time": time};
    emp.push(emp1);
    debugger;

}

let jsonData = JSON.stringify(emp);
debugger;
imp.fs.writeFileSync("project.json", jsonData, {flag:"a"});
debugger;
console.log('file written...');