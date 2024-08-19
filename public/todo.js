let taskCounter = 1; // Global counter to track task numbers

document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter the task!');
        return;
    }

    const li = document.createElement('li');

    // Create task number element
    const taskNumber = document.createElement('span');
    taskNumber.textContent = `${taskCounter}. `;
    taskNumber.className = 'task-number';

    const span = document.createElement('span');
    span.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save';
    saveBtn.style.display = 'none';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    li.appendChild(taskNumber);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(deleteBtn);

    document.getElementById('tasks').appendChild(li);
    document.getElementById('new-task').value = '';

    taskCounter++; // Increment the task number counter

    span.addEventListener('click', function () {
        span.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();
        updateTaskNumbers(); // Update task numbers after deletion
    });

    editBtn.addEventListener('click', function () {
        const currentText = span.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        li.insertBefore(input, span);
        li.removeChild(span);
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    });

    saveBtn.addEventListener('click', function () {
        const input = li.querySelector('input[type="text"]');
        const updatedText = input.value;
        span.textContent = updatedText;
        li.insertBefore(span, input);
        li.removeChild(input);
        editBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';
    });
});

// Function to update task numbers
function updateTaskNumbers() {
    const tasks = document.querySelectorAll('#tasks li');
    taskCounter = 1; // Reset the counter
    tasks.forEach(function (task) {
        const taskNumber = task.querySelector('.task-number');
        taskNumber.textContent = `${taskCounter}. `;
        taskCounter++;
    });
}
