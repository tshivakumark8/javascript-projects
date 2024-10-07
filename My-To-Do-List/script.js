document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Mark task as completed
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Delete task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent marking as completed
                taskList.removeChild(li);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = ''; // Clear the input
        }
    });

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
