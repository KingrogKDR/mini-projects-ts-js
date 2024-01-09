"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var tasks = [];
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function (event) {
    event.preventDefault();
});
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskTable = document.getElementById("table-body");
    if (taskInput.value.trim() !== "") {
        var newTask = {
            id: tasks.length + 1,
            name: taskInput.value.trim(),
        };
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks(taskTable);
    }
}
function renderTasks(taskTable) {
    taskTable.innerHTML = "";
    tasks.forEach(function (task) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = String(task.id);
        td1.className = "si-cell";
        var td2 = document.createElement("td");
        td2.textContent = task.name;
        td2.className = "name-cell";
        var td3 = document.createElement("td");
        var Input = document.createElement("input");
        Input.type = "checkbox";
        Input.id = String(task.id);
        td3.appendChild(Input);
        td3.className = "action-cell";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        taskTable === null || taskTable === void 0 ? void 0 : taskTable.appendChild(tr);
    });
}
