let taskList = document.querySelector(".task-list");

let lists = [{
    title: "Course",
    tasks: [{
        title: "Carottes",
        priority: "low-priority",
        date: "22/02"
    },
    {
        title: "Primeur",
        priority: "medium-priority",
        date: "28/02"
    }]
}, {
    title: "Etudes",
    tasks: [{
        title: "Reviser thales",
        priority: "high-priority",
        date: "17/03"
    },
    {
        title: "Rédaction",
        priority: "low-priority",
        date: "09/04"
    }]
}];

function displayList(listOfList){
    for(list of listOfList){
      let newList = document.createElement("div");
      let newListDiv = document.createElement("div");
      let listTitle = document.createElement("h3");
      let listBtn = document.createElement("button");

      newList.classList.add("list");
      newListDiv.classList.add("list-header", "flex");
      listTitle.classList.add("list-title");
      listBtn.classList.add("edit-list");

      listTitle.textContent = list.title;
      listBtn.textContent = "···";

      newList.appendChild(newListDiv);
      newListDiv.appendChild(listTitle);
      newListDiv.appendChild(listBtn);

      for(task of list.tasks){
        let newTask = document.createElement("div");
        let taskCheckbox = document.createElement("input");
        let taskTitle = document.createElement("p");
        let taskDate = document.createElement("p");
    
    
        newTask.classList.add("task", "flex", `${task.priority}`);
        taskTitle.classList.add("task-name");
        taskDate.classList.add("task-date");
    
        taskCheckbox.type = "checkbox";
        taskTitle.textContent = task.title;
        taskDate.textContent = task.date;
    
        newTask.appendChild(taskCheckbox);
        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDate);

        newList.appendChild(newTask);
      }

      taskList.appendChild(newList);
    }
}

displayList(lists)