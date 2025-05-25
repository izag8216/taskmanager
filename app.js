const initialTasks = [
  { id: 1, title: 'UIデザインを決定', completed: false },
  { id: 2, title: 'HTMLの雛形を作成', completed: true },
  { id: 3, title: 'CSSでスタイリング', completed: false },
  { id: 4, title: 'JavaScriptで機能実装', completed: false },
  { id: 5, title: 'タスク追加機能', completed: true },
  { id: 6, title: 'タスク完了/未完了切替', completed: false },
  { id: 7, title: 'タスク削除機能', completed: false },
  { id: 8, title: 'ローカルストレージ保存', completed: false },
  { id: 9, title: 'GitHubに初回コミット', completed: true },
  { id: 10, title: 'README作成', completed: false }
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
        <button class="action-btn" title="完了切替" data-action="toggle" data-id="${task.id}"></button>
        <button class="action-btn" title="削除" data-action="delete" data-id="${task.id}"></button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// タスク追加
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

// タスク完了/削除
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
