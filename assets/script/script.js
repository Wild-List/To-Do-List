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

function buttonDetailsTask() {
    // For each button, their input function is activated when clicked and they are hidden
    document.getElementById("btn-category").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("category").style.display = "inline-block";
        document.getElementById("btn-category").style.display = "none";
    });

    document.getElementById("btn-deadline").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("deadline").style.display = "inline-block";
        document.getElementById("btn-deadline").style.display = "none";
    });

    document.getElementById("btn-priority").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("priority").style.display = "inline-block";
        document.getElementById("btn-priority").style.display = "none";
    });
}

function buttonCancel() {
    var category = document.getElementById("category");
    var deadline = document.getElementById("deadline");
    var priority = document.getElementById("priority");
    document.getElementById("btn-cancel").addEventListener("click", function() {
        event.preventDefault();
        // Erase textarea input
        document.getElementById("input-new-task").value = "Add new task";
        // Revert the buttons back to their original state
        category.style.display = "none";
        document.getElementById("btn-category").style.display = "inline-block";
        deadline.style.display = "none";
        document.getElementById("btn-deadline").style.display = "inline-block";
        priority.style.display = "none";
        document.getElementById("btn-priority").style.display = "inline-block";
        // Erase input values
        category.value = "";
        deadline.value = "";
        priority.value = "";
    })
}

function displayNewTaskCreator() {
    var newTaskButton = document.querySelector(".btn-new-task")
    var newTaskCreator = document.querySelector(".new-task")
    newTaskButton.addEventListener("click", function() {
        //Hide new task button and display creation menu
        event.preventDefault();
        newTaskCreator.style.display = "block";
        newTaskButton.style.display = "none";
        })
    }


