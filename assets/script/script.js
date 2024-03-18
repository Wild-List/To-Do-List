function addNewTaskTextarea() {
    // Event listener for when the textarea is focused
    var inputTextarea = document.getElementById("input-new-task");
    inputTextarea.addEventListener("focus", function() {
        // Clear the textarea's value
        if (inputTextarea.value === "Add new task") {
            inputTextarea.value = "";
        }
    });

    // Event listener for when the textarea loses focus
    inputTextarea.addEventListener("blur", function() {
        // Restore the textarea's value if it's empty
        if (inputTextarea.value === "") {
            inputTextarea.value = "Add new task";
        }
    });
}

function buttonDetailsTask(buttonId, inputId) {
    // Display of details buttons
    document.getElementById(buttonId).addEventListener("click", function() {
        event.preventDefault();
        document.getElementById(inputId).style.display = "inline-block";
        document.getElementById(buttonId).style.display = "none";
    });
}


function buttonCancel() {
    document.getElementById("btn-cancel").addEventListener("click", function() {
        event.preventDefault();
        // Erase textarea input
        document.getElementById("input-new-task").value = "Add new task";
        // Revert the buttons back to their original state
        ["category", "deadline", "priority"].forEach(item => {
            document.getElementById(item).style.display = "none";
            document.getElementById("btn-" + item).style.display = "inline-block";
            document.getElementById(item).value = "";
        });
        document.querySelector(".new-task").style.display = "none";
        document.querySelector(".btn-new-task").style.display = "block";
    });
}

function displayNewTaskCreator() {
    let newTaskButton = document.querySelector(".btn-new-task");
    let newTaskCreator = document.querySelector(".new-task");
    newTaskButton.addEventListener("click", function() {
        event.preventDefault();
        // Hide new task button and display creation menu
        newTaskCreator.style.display = "block";
        newTaskButton.style.display = "none";
    });
}

function getDetailsValue() {
    // Get input values
    let inputDetails = ["input-new-task", "category", "deadline", "priority"];
    let getDetails = [];
    for (let i = 0; i < inputDetails.length; ++i) {
    getDetails[i] = document.getElementById(inputDetails[i]).value;
    }
    console.log(getDetails);
}

function buttonAdd() {
    let addButton = document.getElementById("btn-validate");
    addButton.addEventListener("click", function() {
        event.preventDefault();
        getDetailsValue();
    });
}


function newList() {

}