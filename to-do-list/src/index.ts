interface Task{
    id : number;
    name : string;
}
let tasks : Task[] = [];

const addButton = document.getElementById("add-button") as HTMLButtonElement;

addButton.addEventListener("click", function(event){
    event.preventDefault();
});

function addTask(){
    const taskInput = document.getElementById("task-input") as HTMLInputElement;
    const taskTable = document.getElementById("table-body") as HTMLElement;
    if(taskInput.value.trim() !== ""){
        const newTask : Task = {
            id : tasks.length + 1,
            name : taskInput.value.trim(),
        };
        tasks.push(newTask);
        taskInput.value = "";

        renderTasks(taskTable);

    }
}

function renderTasks(taskTable : HTMLElement){
    taskTable.innerHTML = "";
    
    tasks.forEach((task) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.textContent = String(task.id);
      td1.className = "si-cell";
      const td2 = document.createElement("td");
      td2.textContent = task.name;
      td2.className = "name-cell";
      const td3 = document.createElement("td");
      const Input = document.createElement("input");
      Input.type="checkbox";
      Input.id = String(task.id);
      td3.appendChild(Input);
      td3.className = "action-cell";
      
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      taskTable?.appendChild(tr);
    });
}
export{}