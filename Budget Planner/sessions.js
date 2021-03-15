project = [];

function retrieveFromSession() {
    var retrievedObject = JSON.parse(sessionStorage.getItem("project"));
    console.log("retrieveFromSession: ", retrievedObject);
}

function newProject() {
    var newProject = new Object();

    newProject .name = document.getElementById("name").value;
    newProject .projectName = document.getElementById("projectName").value;
    newProject .budget = document.getElementById("budget").value;


    if (sessionStorage.project) {
        project = JSON.parse(sessionStorage.getItem("projectInfo"));
    } else {
        project = [];
    }
    project.push(newProject);
    sessionStorage.setItem("projectInfo", JSON.stringify(project.textContext));

    retrieveFromSession();
}

function insertNewRecords() {
    var table = document.getElementById("programList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); //row created
    var data = JSON.parse(sessionStorage.getItem("projectInfo"));

    console.log("retrieveFromSession: " + data);


    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.name; //place valuee

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.budget;
}