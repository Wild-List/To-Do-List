let taskList = document.querySelector(".task-list");
let listBtn = document.querySelectorAll(".edit-list");
let listMenu = document.querySelectorAll(".list-menu");
let listMenuOptions = document.querySelectorAll(".list-menu-option");
let taskBtn = document.querySelectorAll(".edit-task");
let taskMenu = document.querySelectorAll(".task-menu");
let taskMenuOptions = document.querySelectorAll(".task-menu-option");
let datalistOptions = document.getElementById("datalist");
let desktopDate = document.querySelector(".nav-desktop-date");

let listNumber = 0;
let indexList = 100;
let lists = [{
    title: "Course",
    tasks: [{
        title: "Carottes",
        priority: "low-priority",
        date: "22/02"
    },
    {
        title: "Pommes",
        priority: "medium-priority",
        date: "22/02"
    }]
}, {
    title: "Etudes",
    tasks: [{
        title: "Thése",
        priority: "high-priority",
        date: "17/03"
    },
    {
        title: "Rédaction",
        priority: "low-priority",
        date: "09/04"
    },
    {
        title: "Dossier",
        priority: "medium-priority",
        date: "09/04"
    }]
}, {
    title: "Projet",
    tasks: [{
        title: "Faire la présentation",
        priority: "high-priority",
        date: "17/03"
    },
    {
        title: "Effectuer des tests",
        priority: "medium-priority",
        date: "09/04"
    }]
}];

displayList(lists)

function displayList(listOfList){
    taskList.innerHTML = ""

    for(const list of listOfList){
      let newList = document.createElement("div");
      let newListDiv = document.createElement("div");
      let listTitle = document.createElement("input");
      let listBtn = document.createElement("button");
      let newListMenu = document.createElement("div");
      let newListMenuOption = document.createElement("ul");
      let newListMenuRename = document.createElement("li");
      let newListMenuDelete = document.createElement("li");
      let categoryOption = document.createElement("option");
      let indexz = 0;

      newList.classList.add("list", `${list.title}`);
      newListDiv.classList.add("list-header", "flex");
      listTitle.classList.add("list-title");
      listBtn.classList.add("edit-list");
      newListMenu.classList.add("list-menu");
      newListMenuOption.classList.add("list-menu-option", "flex");
      newListMenuRename.classList.add("list-menu-option-rename");
      newListMenuDelete.classList.add("list-menu-option-delete");
      listTitle.setAttribute("disabled", "");
      listNumber++;

      listTitle.value = list.title;
      listBtn.textContent = "···";
      newListMenuRename.textContent = "Renommer";
      newListMenuDelete.textContent = "Supprimer";
      newListMenu.hidden = true;
      newList.style.zIndex = indexList--;
      categoryOption.value = list.title;

      newList.appendChild(newListDiv);
      newListDiv.appendChild(listTitle);
      newListDiv.appendChild(listBtn);
      newListDiv.appendChild(newListMenu);
      newListMenu.appendChild(newListMenuOption);
      newListMenuOption.appendChild(newListMenuRename);
      newListMenuOption.appendChild(newListMenuDelete);
      
      if(!datalistOptions.querySelector(`option[value="${list.title}"]`)){
        datalistOptions.appendChild(categoryOption);
    }

      listBtn.addEventListener('click', () => {
        listBtn.hidden = true;
        newListMenu.hidden = false;
      })
      
      newListMenu.addEventListener('click', () => {
        newListMenu.hidden = true;
        listBtn.hidden = false;
      })

      newListMenuDelete.addEventListener('click', (e) => {
        e.target.closest(".list").remove()
        newListMenu.hidden = true;
    })

    window.addEventListener("click", (e) => {
        if(!e.target.classList.contains("list-menu-option-rename") && !e.target.classList.contains("list-menu-option-delete") && !e.target.classList.contains("edit-list")){
            newListMenu.hidden = true;
            listBtn.hidden = false;
        }
    })

    newListMenuRename.addEventListener('click', (e) => {
        newListMenu.hidden = true;
        let currentTitle = e.target.closest(".list-header").firstChild;
        currentTitle.disabled = false;
        currentTitle.value = "";
        currentTitle.focus()
        
        currentTitle.addEventListener("keyup", (e) => {
            if(e.key == "Enter"){
                currentTitle.disabled = true;
                list.title = currentTitle.value;
            }
        })

        newListMenu.hidden = true;
    })
      

      for(const task of list.tasks){
        let newTask = document.createElement("div");
        let taskCheckbox = document.createElement("input");
        let taskTitle = document.createElement("label");
        let taskDate = document.createElement("p");
        let taskBtn = document.createElement("button");
        let newTaskMenu = document.createElement("div");
        let newTaskMenuOption = document.createElement("ul");
        let newTaskMenuPriority = document.createElement("li");
        let newTaskMenuDelete = document.createElement("li");
        let newPriorityOption = document.createElement("ul");
        let lowPriority = document.createElement("li");
        let midPriority = document.createElement("li");
        let highPriority = document.createElement("li");
        let counterId = Math.floor(Math.random() * 100);

    
        newTask.classList.add("task", "flex", `${task.priority}`);
        taskTitle.classList.add("task-name");
        taskDate.classList.add("task-date");
        taskBtn.classList.add("edit-task");
        newTaskMenu.classList.add("task-menu");
        newTaskMenuOption.classList.add("task-menu-option", "flex");
        newTaskMenuPriority.classList.add("task-menu-option-priority");
        newTaskMenuDelete.classList.add("task-menu-option-delete");
        newPriorityOption.classList.add("priority-option");
        newTask.style.zIndex = indexz--;
        taskCheckbox.classList.add(task.priority);
        taskCheckbox.setAttribute("name", `${task.title}${counterId}`);
        taskTitle.setAttribute("for", `${task.title}${counterId}`);

    
        taskCheckbox.type = "checkbox";
        taskBtn.textContent = "···";
        taskTitle.textContent = task.title;
        taskDate.textContent = task.date;
        newTaskMenuPriority.textContent = "Priorité";
        newTaskMenuDelete.textContent = "Supprimer";
        newTaskMenu.hidden = true;
        newPriorityOption.hidden = true;
        highPriority.textContent = "Haute";
        midPriority.textContent = "Moyenne";
        lowPriority.textContent = "Basse";

    
        newTask.appendChild(taskCheckbox);
        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDate);
        newTask.appendChild(taskBtn);
        newTask.appendChild(newTaskMenu);
        newTaskMenu.appendChild(newTaskMenuOption);
        newTaskMenuOption.appendChild(newTaskMenuPriority);
        newTaskMenuOption.appendChild(newTaskMenuDelete);
        newTaskMenuOption.appendChild(newPriorityOption);
        newPriorityOption.appendChild(lowPriority);
        newPriorityOption.appendChild(midPriority);
        newPriorityOption.appendChild(highPriority);
        
        newList.appendChild(newTask);

        taskBtn.addEventListener('click', () => {
            newTaskMenu.hidden = false;
        })
          
        newTaskMenuPriority.addEventListener('click', (e) => {
            if(e.target.classList.contains("task-menu-option-priority")){
                newPriorityOption.hidden = false
            }
            else{
                newTaskMenu.hidden = true;
            }
        })

        window.addEventListener("click", (e) => {
            if(!e.target.classList.contains("task-menu-option-priority") && !e.target.classList.contains("task-menu-option-delete") && !e.target.classList.contains("edit-task")){
                newTaskMenu.hidden = true;
                newPriorityOption.hidden = true;
            }
        })

        newPriorityOption.addEventListener('click', (e) => {
            switch (e.target.textContent) {
                case "Basse":
                    e.target.closest(".task").className = "task", "flex", "low-priority";
                    e.target.closest(".task").classList.add("task", "flex", "low-priority")
                    newTaskMenu.hidden = true;
                    newPriorityOption.hidden = true;
                    break;

                case "Moyenne":
                    e.target.closest(".task").className = "task", "flex", "medium-priority";
                    e.target.closest(".task").classList.add("task", "flex", "medium-priority")
                    newTaskMenu.hidden = true;
                    newPriorityOption.hidden = true;
                    break

                case "Haute":
                    e.target.closest(".task").className = "task", "flex", "high-priority";
                    e.target.closest(".task").classList.add("task", "flex", "high-priority")
                    newTaskMenu.hidden = true;
                    newPriorityOption.hidden = true;
                    break;

            }
        })

        taskCheckbox.addEventListener("change", (e) => {
            if(taskCheckbox.checked){
                taskTitle.style.color = "#e7e7e735";
                taskTitle.style.textDecorationLine = "line-through";
                taskDate.style.color = "#e7e7e735";
                taskBtn.style.color = "#e7e7e735";
                taskBtn.disabled = true;
                newList.appendChild(newTask);
            }
            else{
                taskTitle.style.color = "#e7e7e7";
                taskTitle.style.textDecorationLine = "none";
                taskDate.style.color = "#e7e7e7";
                taskBtn.style.color = "#e7e7e7";
                taskBtn.disabled = false;
            }
        })


        newTaskMenuDelete.addEventListener('click', (e) => {
            e.target.closest(".task").remove()
            newTaskMenu.hidden = true;
        })

      }

      taskList.appendChild(newList);
    }
}

function newTaskAdded(taskAdded){
    let taskObj = {
        title: taskAdded[0],
        date: formatDate(taskAdded[2]),
        priority: taskAdded[3]
    }

    let alreadyThere = taskList.querySelector(`.${taskAdded[1]}`)

    if(alreadyThere){
        for (const list of lists) {
            if(taskAdded[1] == list.title){
                list.tasks.push(taskObj);
            }
        }
    }
    else{
        let listObj = {
            title: taskAdded[1],
            tasks: [taskObj]
        }
        lists.push(listObj);
    }

    displayList(lists)
}

function getDetailsValue() {
    // Get input values
    for (let i = 0; i < inputValues.length; ++i) {
    getDetails[i] = document.getElementById(inputValues[i]).value;
    };
    return newTaskAdded(getDetails);
};

function formatDate(dateString) {
    // Parse the date string into a Date object
    let dateParts = dateString.split('-');
    let year = parseInt(dateParts[0], 10);
    let month = parseInt(dateParts[1], 10) - 1; 
    let day = parseInt(dateParts[2], 10);
    let dateObject = new Date(year, month, day);

    // Format the date as DD/MM
    let formattedDay = String(dateObject.getDate()).padStart(2, '0');
    let formattedMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
    let formattedDate = `${formattedDay}/${formattedMonth}`;

    return formattedDate;
}

function displayTime(){
    let joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let date = new Date();

    let jourSemaine = joursSemaine[date.getDay()];
    let jour = date.getDate();
    let moisActuel = mois[date.getMonth()];
    let heure = date.getHours();
    let minutes = date.getMinutes();

    let minutesFormat = (minutes < 10 ? '0' : '') + minutes;

    desktopDate.textContent = `${jourSemaine} ${jour} ${moisActuel}, ${heure}:${minutesFormat}`;
}

displayTime()
setInterval(displayTime, 60000);


// ---------------------------------------------------------------

let inputTextarea = document.getElementById("input-new-task");
let newTaskButton = document.querySelector(".btn-new-task");
let newTaskCreator = document.querySelector(".new-task");
newTaskCreator.hidden = true;
let inputDetailsList = document.querySelectorAll(".input-details");
let inputDetails = document.querySelector(".input-details");
let btnInputDetails = document.querySelector(".btn-details");
let getDetails = {};
let addButton = document.getElementById("btn-validate");
let category = document.getElementById("category");
let deadline = document.getElementById("deadline");
let priority = document.getElementById("priority");
let inputValues = ["input-new-task", "category", "deadline", "priority"];
let btnCategory = document.getElementById("btn-category");
let btnDeadline = document.getElementById("btn-deadline");
let btnPriority = document.getElementById("btn-priority");


function switchDisplay(element) {
    element.hidden = !element.hidden;
};

function resetDisplay() {
    if (btnCategory.hidden) {
        switchDisplay(btnCategory);
        switchDisplay(category);
        category.value = "";
    };
   if (btnDeadline.hidden) {
        switchDisplay(btnDeadline);
        switchDisplay(deadline);
        deadline.value = "";
    };
   if (btnPriority.hidden) {
        switchDisplay(btnPriority);
        switchDisplay(priority);
        priority.value = "";
    };
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
    inputTextarea.value = "";
};

btnCategory.addEventListener("click", (e) => {
    e.preventDefault();
    switchDisplay(btnCategory);
    switchDisplay(category);
});

btnDeadline.addEventListener("click", (e) => {
    e.preventDefault();
    switchDisplay(btnDeadline);
    switchDisplay(deadline);
});

btnPriority.addEventListener("click", (e) => {
    e.preventDefault();
    switchDisplay(btnPriority);
    switchDisplay(priority);
});


document.getElementById("btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    // Erase text input value
    inputTextarea.value = "";
    // Revert the buttons back to their original state
   resetDisplay();
});



newTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Hide new task button and display creation menu
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
});


function displayTooltip(message) {
    addButton.title = message;  
}

// Verify if each input has a value
inputDetailsList.forEach(function(inputDetails) {
    inputDetails.addEventListener("input", () => {
        let anyEmptyInput = false;
        inputDetailsList.forEach(function(input) {
            if (input.value === "") {
                anyEmptyInput = true;
            }
        });
        // Disable add button if an input is empty
        addButton.disabled = anyEmptyInput;
        console.log("Button disabled:", addButton.disabled);
    });
});

addButton.addEventListener("mouseover", function() {
    let emptyFields = [];
    inputValues.forEach(function(inputId) {
        const inputValue = document.getElementById(inputId).value;
        if (inputValue === "") {
            emptyFields.push(inputId);
        }
    });

    if (emptyFields.length > 0) {
        // Display tooltip indicating empty fields
        const emptyFieldsMessage = "Please fill out the following fields: " + emptyFields.join(", ");
        displayTooltip(emptyFieldsMessage);
    }
});

addButton.addEventListener("touchstart", function() {
    let emptyFields = [];
    inputValues.forEach(function(inputId) {
        const inputValue = document.getElementById(inputId).value;
        if (inputValue === "") {
            emptyFields.push(inputId);
        }
    });

    if (emptyFields.length > 0) {
        // Display tooltip indicating empty fields
        const emptyFieldsMessage = "Please fill out the following fields: " + emptyFields.join(", ");
        displayTooltip(emptyFieldsMessage);
    }
});

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    getDetailsValue();
    resetDisplay();
});

let categoryInput = document.getElementById("category");

categoryInput.addEventListener("change", function() {
  let inputValue = categoryInput.value.trim();
  if (inputValue !== "") {
    // Check if the value already exists in the datalist
    let existingOption = datalistOptions.querySelector(`option[value="${inputValue}"]`);
    if (!existingOption) {
      // If the value doesn't exist, create a new option and append it to the datalist
      let newOption = document.createElement("option");
      newOption.value = inputValue;
      datalistOptions.appendChild(newOption);
    }
  }
});


// -----------------------------------------------------------------


let dayliesBar = document.querySelector(".icon-daylies");
let dayliesTask = document.querySelector(".daylies-task");
let dayliesStripe = document.querySelectorAll(".daylies-toggle");
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-chevron-up");
let progressBar = document.querySelector(".progress");
let iconPlus = document.querySelector(".plus-quoti");

dayliesBar.addEventListener("click", () => {
  dayliesTask.hidden
    ? (dayliesTask.hidden = false)
    : (dayliesTask.hidden = true);
});

btn.addEventListener("click", () => {
  if (icon.classList.contains("fa-chevron-up")) {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  }
});

for (const stripe of dayliesStripe) {
  stripe.addEventListener("click", (e) => {
    if (e.target.classList.contains("completed")) {
      e.target.classList.remove("completed");
    } else {
      e.target.classList.add("completed");
    }
    updateProgress();
  });
}

function updateProgress() {
  const completedTasks = document.querySelectorAll(
    ".daylies-task .completed"
  ).length;
  const totalTasks = document.querySelectorAll(".daylies-task li").length;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  progressBar.style.width = progressPercentage + "%";
}

// ------------- AJOUT DES TACHES A FAIRE QUOTIDIENNEMENT --------------- //

// Fonction pour ajouter un nouveau li lorsqu'on clique sur le bouton +
iconPlus.addEventListener("click", function () {
    if(dayliesTask.lastChild.textContent != "" &&  dayliesTask.lastChild.textContent != null){
        let newLi = document.createElement("li");
        newLi.className = "daylies-toggle";
        newLi.setAttribute("contentEditable", "true");
        newLi.addEventListener("click", (e) => {
        if (e.target.classList.contains("completed")) {
        e.target.classList.remove("completed");
        } else {
        e.target.classList.add("completed");
        }
        updateProgress();
    });
    dayliesTask.appendChild(newLi); 
    newLi.focus();
    }
    else{
        dayliesTask.lastChild.focus();
    }

  // Ajouter un gestionnaire d'événement pour intercepter la pression de la touche "Enter"
  dayliesTask.lastChild.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêcher le comportement par défaut de la touche "Enter" (saut de ligne)
      event.target.removeAttribute("contentEditable"); // Désactiver l'édition une fois que la touche "Enter" est pressée
      updateProgress();
    }
  });
});

// Fonction pour ajouter une classe active lorsque l'utilisateur clique sur un li
dayliesTask.addEventListener("click", function (event) {
  if (event.target.classList.contains("daylies-toggle")) {
    event.target.classList.toggle("active");
  }
});
