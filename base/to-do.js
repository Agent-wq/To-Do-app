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

    // Add the tasks to the tasks array
    tasks.push(task);

    // Call the function that displays the tasks
    displayTasks();

    // Clear the form
    document.getElementById("task-form").reset();

    console.log("Task added");
}

// Display the tasks
function displayTasks() {
    
    // Get the task list container
    const taskListContainer = document.getElementById("tasks-list");

    // Clear the previous tasks
    taskListContainer.innerHTML = '';

    // Display each task in a list
    tasks.forEach((tasks,index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        // Customize the display format as needed
        taskItem.innerHTML = `<strong>${tasks.title}</strong><p>${tasks.description}</p>`;

        // Append the task item to the task list container
        taskListContainer.appendChild(taskItem);
    });
}