let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9999;
let tasks = new Array();
let taskPlanner = `
    <form action="/store" method="get" #formInfo>
        <label>EMP ID: </label>
        <input type="text" name="empId"/><br/>
        <label>Task ID:</label>
        <input type="text" name="taskId"/><br/>
        <label>Task:</label>
        <input type="text" name="task"/><br/>
        <label>Deadline:</label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Submit Task!"/>
        <input type="reset" value="reset"/>
    </form>
`
// create array Task array 
let server = http.createServer((req, res) => {
    var pathInfo = url.parse(req.url, true).pathname;
    console.log(req.url)
    if (req.url == "/") {
        res.setHeader("content-type", "text/html");  // by default data consider as a html 
        res.end(taskPlanner);
    } else if (pathInfo == "/store") {
        let data = url.parse(req.url, true).query;
        const task = {
            empId: data.empId,
            taskId: data.taskId,
            task: data.task,
            deadline: data.deadline
        }

        //converet to string 
        let jsonData = JSON.stringify(tasks, null, 2);
        // store using fs module. 
        let stores = fs.readFileSync("project.json");
        try {
            if (stores == '""' || stores == null) {
                fs.writeFileSync("project.json", JSON.stringify(tasks, null, 2));
            } else {
                jsonParse = JSON.parse(stores);
                jsonParse.push(data);
                let jsonData = JSON.stringify(jsonParse, null, 2);
                fs.writeFileSync("project.json", jsonData);
            }
        }
        catch (error) {
            console.log(error)
        }

    } else if (pathInfo == "/delete") {
        try {
            const jsonString = fs.readFileSync('./project.json', 'utf-8');
            const results = JSON.parse(jsonString);
            let findTask = `
                <div style = "text-align:center">
                    <label style = ">Choose Task ID: </label>
                    <select class="form-control" id="task-id" name="task-id" >
                `
            for (i = 0; i < results.length; i++) {
                findTask += `
                        <option> ${results[i].taskId} </option>
                    `
            }
            findTask += `
                    </select><br/> 
                    <input type = "submit" value = "delete" />
                </div>
                `;
            res.end(findTask); 
        }
        catch (error) {
            console.log(error);
        }
        // convert to json 
        // check value using iterator or loop 
        // delete using array method's 
        // store in file using fs module. 
        //if task id not available display error message. 
    } else if (pathInfo == "/display") {
        // read from file 
        try {
            const jsonString = fs.readFileSync('./project.json', 'utf-8');
            const results = JSON.parse(jsonString);
            let table = `
                    <table border = "1"> 
                        <tr>
                            <th> Employee ID <th>
                            <th> Task ID <th>
                            <th> Task<th>
                            <th> Deadline <th>
                        </tr>
                `
            for (i = 0; i < results.length; i++) {
                const task = results[i];
                table += `
                        <tr>
                           <td> ${task.empId} <td>
                           <td> ${task.taskId} <td>  
                           <td> ${task.task} <td>  
                           <td> ${task.deadline} <td>       
                        </tr>
                    `
            }
            table += `</table>`;
            res.end(table);
        } catch (err) {
            console.log("Error is ", err);
        }
    }

});

server.listen(port, () => console.log(`Server running on port number ${port}`));



