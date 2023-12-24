// Makes a variable named tasks
let tasks = []; 

function addTask(){
    // Get task details from the form
    const taskTitle = document.getElementById("task-Title").value;
    const taskDescription = document.getElementById("task-Description").value;

    // Validate the input
    if (!taskTitle) {
        alert("Please enter a task title like: Make lunch")
        return;
    }

    // Create a task object
    const task = {
        title: taskTitle,
        description: taskDescription,
        completed: false
    };
    
}