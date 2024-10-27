document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = taskInput.value;
        row.appendChild(taskCell);

        const actionCell = document.createElement('td');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'action-button edit-button';
        editButton.addEventListener('click', () => editTask(taskCell));
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'action-button delete-button';
        deleteButton.addEventListener('click', () => row.remove());
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);
        taskList.appendChild(row);

        taskInput.value = '';
    }
}

function editTask(taskCell) {
    const newTask = prompt('Edit the task:', taskCell.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskCell.textContent = newTask;
    }
}
// Elemen-elemen 
const bgColorSelect = document.getElementById('bgColor');
const fontSizeRange = document.getElementById('fontSize');
const darkModeCheckbox = document.getElementById('darkModeSlider');
const fontStyleSelect = document.getElementById('fontStyle');
const body = document.body;

// Mengubah warna background
bgColorSelect.addEventListener('change', function() {
    body.style.backgroundColor = this.value;
});

// Mengubah ukuran font
fontSizeRange.addEventListener('input', function() {
    body.style.fontSize = `${this.value}px`;
});

// Dark mode
darkModeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = bgColorSelect.value;
        body.style.color = '#000';
    }
});

// Gaya font
fontStyleSelect.addEventListener('change', function() {
    body.style.fontFamily = this.value;
});

