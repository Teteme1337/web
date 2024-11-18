function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskName = taskInput.value.trim();

    if (taskName === "") return;

    const task = document.createElement('div');
    task.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        taskNameElem.classList.toggle('completed');
    };

    const taskNameElem = document.createElement('span');
    taskNameElem.classList.add('task-name');
    taskNameElem.textContent = taskName;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function () {
        const newTaskName = prompt("Edit your task:", taskNameElem.textContent);
        if (newTaskName !== null) {
            taskNameElem.textContent = newTaskName.trim();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        task.remove();
    };

    task.appendChild(checkbox);
    task.appendChild(taskNameElem);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
    taskInput.value = '';
}

function clearTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

function clearSelTasks() {
    let taskList = document.querySelectorAll("#taskList > .task");
    taskList.forEach(element => {
        if (element.querySelector("input").checked) {
           element.remove(); 
        }
    });
}