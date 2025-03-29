
function saveTask()
{
    console.log("saveTask is running");
<<<<<<< HEAD
    
    // Get values from form fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    // Create a new task object
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    displayTask(taskToSave);
}

function displayTask(task){
    console.log("displayTask function");

    let syntax = `
        <div class="task-container" style="border-color:${task.color}">
            <div class="task">
                <div class="task-information">
                    <h5>${task.title}</h5>
                    <p>${task.description}</p>
                </div>

                <div class="task-status">${task.status}</div>

                <div class="task-date-budget">
                    <span>${task.date}</span>
                    <span>${task.budget}</span>
                </div>
            </div>
        </div>
    `

    $("#list").append(syntax);
=======
>>>>>>> a262088b6a4e8bebcba38188300ce823341bc4c8
}

function init()
{
    console.log("the init its running");
    //load data
<<<<<<< HEAD
=======

    //hook events
    $("#btnSave").click(saveTask);    
>>>>>>> a262088b6a4e8bebcba38188300ce823341bc4c8

    //hook events
    $("#btnSave").click(saveTask);    
}


window.onload = init;//we wait until the html and css gets resolved and then execute the 
//function