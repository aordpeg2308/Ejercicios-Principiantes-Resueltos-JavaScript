// Recuperamos las tareas que tenemos en el localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filterSelect');

// Aqui mostrare las tareas
function renderTasks() {
    
    taskList.innerHTML = '';
    
    // Filtrar tareas según el estado seleccionado
    const filterValue = filterSelect.value;
    const filteredTasks = tasks.filter(task => {
        if (filterValue === 'pendientes') return !task.completed;
        if (filterValue === 'completadas') return task.completed;
        return true; 
    });

    // Dibujar las tareas filtradas
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        // Tarea con su prioridad y checkbox de completado
        li.innerHTML = `
            <span class="task-text">${task.text} - <strong>${task.priority}</strong></span>
            <div>
                <button class="completeBtn">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                <button class="deleteBtn">Eliminar</button>
            </div>
        `;
        
        // Botón para marcar tarea como completada
        li.querySelector('.completeBtn').addEventListener('click', () => toggleComplete(index));
        
        // Botón para eliminar tarea
        li.querySelector('.deleteBtn').addEventListener('click', () => deleteTask(index));

        // Añadir la tarea a la lista
        taskList.appendChild(li);
    });
}

// Función para añadir una nueva tarea
function addTask(event) {
    event.preventDefault(); 

    const newTask = {
        text: taskInput.value,
        priority: prioritySelect.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ''; 
    saveTasks(); 
    renderTasks(); 
}

// Con esto marco o desmarco
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1); 
    saveTasks();
    renderTasks();
}

// Función para guardar las tareas en localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filtrar tareas por estado
filterSelect.addEventListener('change', renderTasks);

taskForm.addEventListener('submit', addTask);


renderTasks();
