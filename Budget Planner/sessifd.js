
var projectObj = [];
function storeInSession(){
    sessionStorage.setItem("projectInfo", projectObj)
}
function retrieveFromSession(){
    var obj = sessionStorage.getItem("projectInfo");
    console.log(obj);
}

function onFormSubmit(){
    //alert("Event generated ... ")
    var data = readFormData();
    insertNewRecord(data);
    empObj.push(data);      //in empObj
    resetData();
}
function readFormData(){
    var obj = {} //empty object
    obj.name = document.getElementById("name").value;
    obj.projectName = document.getElementById("projectName").value;
    obj.budget = document.getElementById("budget").value;
    var empString = JSON.stringify(obj);
    var empJson = JSON.parse(empString);
    console.log(empJson);
    return empJson;
}

function insertNewRecords(data){
    var table = document.getElementById("programList");
    sessionStorage.setItem(t)
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); //row created
    
    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.name; //place valuee
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.budget;
}

// to clear the text boxes after clicking submit
function resetData(){
    document.getElementById("name").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("budget").value = "";
}