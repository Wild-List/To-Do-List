let inputTextarea = document.getElementById("input-new-task");
let newTaskButton = document.querySelector(".btn-new-task");
let newTaskCreator = document.querySelector(".new-task");
newTaskCreator.hidden = true;
let inputDetails = ["input-new-task", "category", "deadline", "priority"];
let getDetails = {};
let addButton = document.getElementById("btn-validate");
let detailsClass = document.querySelectorAll(".input-details");


function switchDisplay(element) {
    element.hidden = !element.hidden
}


    // Event listener for when the textarea is focused
    inputTextarea.addEventListener("focus", (e) => {
        // Clear the textarea's value
        if (inputTextarea.value === "Add new task") {
            inputTextarea.value = "";
        }
    });

    // Event listener for when the textarea loses focus
    inputTextarea.addEventListener("blur", (e) => {
        // Restore the textarea's value if it's empty
        if (inputTextarea.value === "") {
            inputTextarea.value = "Add new task";
        }
    });


// function buttonDetailsTask(buttonId, inputId) {
//     // Display of details buttons
//     document.getElementById(buttonId).addEventListener("click", (e) => {
//         e.preventDefault();
//         document.getElementById(inputId).hidden = false;
//         document.getElementById(buttonId).hidden = true;
//     });
// }

document.getElementById("btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    // Erase textarea input
    document.getElementById("input-new-task").value = "Add new task";
    // Revert the buttons back to their original state
    ["category", "deadline", "priority"].forEach(item => {
        document.getElementById(item).style.display = "none";
        document.getElementById("btn-" + item).style.display = "inline-block";
        document.getElementById(item).value = "";
    });
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
});



newTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Hide new task button and display creation menu
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
});

function getDetailsValue() {
    // Get input values
    for (let i = 0; i < inputDetails.length; ++i) {
    getDetails[i] = document.getElementById(inputDetails[i]).value;
    }
    console.log(getDetails); // remove it later
}


addButton.addEventListener("click", (e) => {
    e.preventDefault();
    getDetailsValue();
    });


function newList() {

}