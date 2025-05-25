// Task Manager Application
const initialTasks = [
  { id: 1, title: 'Decide UI Design', completed: false },
  { id: 2, title: 'Create HTML Template', completed: true },
  { id: 3, title: 'Style with CSS', completed: false },
  { id: 4, title: 'Implement JavaScript Functions', completed: false },
  { id: 5, title: 'Add Task Feature', completed: true },
  { id: 6, title: 'Toggle Task Completion', completed: false },
  { id: 7, title: 'Delete Task Feature', completed: false },
  { id: 8, title: 'LocalStorage Save', completed: false },
  { id: 9, title: 'Initial GitHub Commit', completed: true },
  { id: 10, title: 'Create README', completed: false }
];

let tasks = JSON.parse(localStorage.getItem('tasks')) || initialTasks;
let nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.innerHTML = `
      <span class="task-title">${task.title}</span>
      <div class="task-actions">
        <button class="action-btn" title="Toggle completion" data-action="toggle" data-id="${task.id}">Done</button>
        <button class="action-btn" title="Delete this task" data-action="delete" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Add task
if (taskForm) {
  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;
    tasks.unshift({ id: nextId++, title, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
  });
}

// Handle task completion and deletion
if (taskList) {
  taskList.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;
    if (action === 'toggle') {
      tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
      saveTasks();
      renderTasks();
    } else if (action === 'delete') {
      tasks = tasks.filter(t => t.id !== id);
      saveTasks();
      renderTasks();
    }
  });
}

renderTasks();
