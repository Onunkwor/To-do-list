// Variables

const addTask = document.getElementById('add-task');   //add task icon
const taskcontainer = document.getElementById('task-container');   //task container
const inputTask = document.getElementById('input-task')  //input button


// Function to create a new task
function createTask() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Please Enter Task');
    } else {
        taskcontainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
        li.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function(){
        task.remove();
    });
}

// Event listener for the "Add" button
addTask.addEventListener('click', createTask);

// Event listener for the "Enter" key
inputTask.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        createTask();
    }
});
