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

    // Clear previous tasks
    taskListContainer.innerHTML = "";

    // Display each task in the list
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        // Create a container for the checkbox and task details
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create a checkbox element
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks.completed;
        checkbox.addEventListener("change", () => toggleTaskCompletion(index));

        // Customize the display format as needed
        const taskDetails = document.createElement("div");
        taskDetails.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

        // Append the checkbox and task details to the task container
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskDetails);

        // Append the task container to the task list container
        taskItem.appendChild(taskContainer);
        taskListContainer.appendChild(taskItem);
    });
}
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}