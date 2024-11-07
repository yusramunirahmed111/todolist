document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
  
    // Add task
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
          <span class="check">📝</span> ${taskText}
          <button class="delete">Del</button>
        `;
        taskList.appendChild(newTask);
  
        // Clear input field
        taskInput.value = "";
  
        // Add delete event
        const deleteButton = newTask.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(newTask);
        });
  
        // Mark task as completed
        const checkButton = newTask.querySelector('.check');
        checkButton.addEventListener('click', function() {
          newTask.classList.toggle('completed');
        });
      }
    });
  
    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTaskButton.click();
      }
    });
  });
  