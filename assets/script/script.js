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

function getDetailsValue() {
    // Get input values
    for (let i = 0; i < inputValues.length; ++i) {
    getDetails[i] = document.getElementById(inputValues[i]).value;
    };
    console.log(getDetails); // remove it later
};

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

let datalistInput = document.getElementById("datalist")
let categoryOptions = document.getElementById("category")
//let optionsDatalist = docuement.getElementById("options")

datalistInput.addEventListener("input", () => {
    let inputValue = datalistInput.value.trim();
    if (inputValue !== "") {
      // Check if the value already exists in the datalist
      let existingOption = datalistInput.querySelector(`option[value="${inputValue}"]`);
      if (!existingOption) {
        // If the value doesn't exist, create a new option and append it to the datalist
        let newOption = document.createElement("option");
        newOption.value = inputValue;
        datalistInput.appendChild(newOption);
      }
      // Set the value of the input element to the textarea value
      categoryInput.value = inputValue;
    }
  });


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