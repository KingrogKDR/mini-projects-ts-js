function addTask(){
    let taskInput = document.getElementById("task-input") as HTMLInputElement;
    let taskList = document.getElementById("todo-list");

    if(taskInput.value !== ""){
        const newEle = document.createElement("task");
        newEle.textContent = taskInput.value;
        taskList?.appendChild(newEle);
        taskInput.value = "";
    }
}

