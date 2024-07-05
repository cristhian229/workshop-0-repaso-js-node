class Task {
    constructor(id, description, completed = false) {
      this.id = id;
      this.description = description;
      this.completed = completed;
    }
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      this.loadTasks();
      this.idForUpdate = null;
    }
  
    addTask(description) {
      const id = this.idForUpdate ? this.idForUpdate : this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
      const task = new Task(id, description);
      if (this.idForUpdate) {
        const taskForUpdateIndex = this.tasks.findIndex((task) => task.id === this.idForUpdate)
        this.tasks.splice(taskForUpdateIndex, 1, task)
      } else {
        this.tasks.push(task);
      }
      this.idForUpdate = null;
      this.saveTasks();
      this.renderTasks();
    }
  
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
      this.renderTasks();
    }
  
    updateTask(id) {
      const taskForUpdate = this.tasks.find((task) => task.id === id)
      this.idForUpdate = taskForUpdate.id
      document.querySelector('#new-task').value = taskForUpdate.description;
    }
  
    toggleTaskComplete(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        console.log("antes",task);
        task.toggleComplete();
        console.log("despues",task);
  
        this.saveTasks();
        this.renderTasks();
      }
    }
  
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  
    loadTasks() {
      this.renderTasks();
    }
  
    renderTasks() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
        this.tasks.forEach((task) => {
          const item = document.createElement("li");
          item.textContent = task.description;
          item.className = task.completed ? "completed" : "";
          item.addEventListener("click", () => this.toggleTaskComplete(task.id));
      
          if (task.completed) {
            const label = document.createElement("span");
            label.textContent = "importante";
            label.style.fontWeight = "bold";
            item.appendChild(label);
          }
      
          const updateButton = document.createElement("button");
          updateButton.textContent = "Actualizar Nota";
          updateButton.addEventListener("click", (e) => {
            e.stopPropagation();
            this.updateTask(task.id);
          });
      
          const toggleButton = document.createElement("input");
          toggleButton.setAttribute("type", "checkbox");
          toggleButton.checked = task.completed;
      
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Eliminar Nota";
          deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            this.deleteTask(task.id);
          });
      
          item.appendChild(deleteButton);
          item.appendChild(updateButton);
          item.appendChild(toggleButton);
      
          taskList.appendChild(item);
        });
      }
      
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const taskManager = new TaskManager();
  
    document.getElementById("add-task").addEventListener("click", () => {
      const newTask = document.getElementById("new-task").value;
      if (newTask) {
        taskManager.addTask(newTask);
        document.getElementById("new-task").value = "";
      }
    });
  });